---
title: Diffusion Models
date: 2026-05-04
---

Before diffusion models, image generation was largely dominated by GANs. This was despite their inherently poor training stability caused by their two competing networks. Diffusion models emerged as a more stable alternative that produce highly realistic images, and now, are the most popular model for image generation tasks. But what are diffusion models, and how do they work? 

## What are diffusion models?
Diffusion models are a type of generative model that learn how to transform noise into real images. They are trained by adding various amounts of random noise to images, and learning how to undo the added noise. After training, a diffusion model can transform a pure noise input into a realistic image. 

Diffusion models (DDPMS) were introduced by Sohl-Dickstein et al. (2015) and popularized through Ho et al’s “Denoising Diffusion Probabilistic Models”. DDPMs have two key functionalities: the forward process, and the reverse process.

## Forward Process
The forward (diffusion) process gradually adds Gaussian noise to an input image over a total of T timesteps. At each timestep, the amount of noise for the current image x_t is computed with:

βT, the intensity of the noise at the current timestep, is controlled by a noise scheduler. Ho et al. utilized a linear noise scheduler, which creates T equally incremented values of βT from 1e-4 to 0.02. Larger timesteps produce larger βT values, which increasingly corrupt the input image. However, a linear scheduler produces high βT values for many timesteps, producing a larger portion of degraded images that are less useful to train with. Nichol & Dhariwal later proposed a cosine noise scheduler that increments βT more gradually to provide more informative data samples, consequently improving image generations. 


Less noisy image generation via cosine scheduler, figure from Nichol & Dhariwal 

Rather than computing each noisy step sequentially, the forward process can be reparameterized so we can jump directly to any timestep. We can represent X∼N(μ,σ2) as X=μ+σϵ,ϵ∼N(0,1), which means we can represent μ as αˉt​​x0​, and σ2=(1−αˉt​), so σ=1−αˉtσ=1−αˉt, where αT represents the amount of signal (1 - βT). Plugging into μ+σϵμ+σϵ, we get xt=αˉt x0+1−αˉt ϵxt​=αˉt​​x0​+1−αˉt​​ ϵ, where ϵ is sampled from Gaussian noise. The model then attempts to predict the added noise ϵ at the current timestep. 

How does the model learn how to predict ϵ? The loss term is:

which is essentially MSE loss between the true noise and the predicted noise. Interestingly, this loss term is actually a simplified version of the original term

The original objective penalizes the model heavily for incorrect predictions on later timesteps (noisier images) so it can prioritize learning from difficult-to-denoise images. However, Ho et al. determined that the simplified loss term produces better quality samples.

## Reverse Process
The reverse process undoes the forward process through a Markov chain, meaning that an image's next slightly-less noised state depends on the current noise. For each timestep, reverse diffusion slightly undoes the noise of the image until a clean image is produced. After the network predicts ϵ from image Xt, we can compute the mean of the distribution of Xt - 1 with 

We can then find Xt-1 with 

x_{t-1} = (1/√αt) * (xt - (1-αt)/√(1-ᾱt) * εθ(xt, t)) + σt * z, 

where z ~ N(0, I) if t > 1, else z = 0. When t = 0, that is the very last step of the reverse process, which is where the noiseless image is produced. 

Model Architectures
To perform the noise prediction, Ho et al. (2021) utilized a modified U-Net model. [todo explain UNet]

The U-Net is time-conditioned using the current timestep so the model can understand that larger timesteps correspond with noisier images. However, the timestep T is not directly passed through the model because a single large integer timestep value is not informative or efficient for the model to process. Timesteps are embedded using Transformer sinusoidal positional embeddings (Vaswani et al. (2017)), which turn the single integer into a vector of size d_model that is computed with:


A large benefit of representing the timestep with sinusoidal positional embeddings is that they are computed without any additional learning.

The UNet’s blocks consist of two residual layers (cite Resnet), with two residual blocks per image resolution. The UNet also includes self-attention blocks (cite attention) at the bottleneck and 16x16 resolution layers. The self-attention blocks improve denoising capabilities because they allow the model to understand how every pixel within a feature map should attend to each other. Convolutional blocks only learn local relationships due to their small kernel sizes. 
[ insert self attention explanation ] 

An alternative to the U-Net in diffusion models emerged with Diffusion Transformers (DiTs) (Peebles & Xing 2022), where a vision transformer (ViT) replaces the U-Net. The flow of a DiT is: compress an input image with a VAE encoder into a latent representation z, noise z, and patch z with the ViT before performing forward diffusion. The benefit of using a transformer instead of an attention-based UNet is because transformers are more scalable. Larger transformers empirically perform better at diffusion generation than similarly sized UNets (Peebles & Xing 2022). 

Guided diffusion
As is, diffusion models produce diverse, uncontrollable outputs. Their generations are inherently probabilistic because their inference step begins with random noise. Diffusion models can have their outputs be guided towards a specific class or result through several methods. Basic conditioning simply involves concatenating or cross-attending y (a condition image or text label) with the input before it is passed through the diffusion model. In the case of text label conditioning, the text and image must both be converted to embeddings through CLIP encoders before passing through the diffusion model.

Dhariwal & Nichol (2021) introduced classifier guided diffusion, where they train a classifier model on noisy images from forward diffusion, and use their gradients to guide the noise prediction towards the target conditioning class y. 

Ho & Salimans (2022) introduced classifier-free diffusion guidance, where instead of training a separate classifier, a diffusion model that is simultaneously conditioned and unconditioned is trained. During training, the condition c can be randomly dropped. During inference, both conditioned and unconditioned predictions are obtained for an input sample, and the final sample is guided using:

Where w is a weight that when increased, guides the generation towards the conditioned prediction while decreasing sample diversity.
Training
The flow of training a diffusion model is as follows for an input training sample x:
Randomly select a timestep value between 0 and T. T = 1000 is a common choice.
To input x_t, add noise that is computed with T and equation _ using beta from the noise scheduler.
Pass the noised image, and condition if using a conditional diffusion model, into the model. Return the predicted noise ϵ
Pass the predicted noise ϵ and the actual noise to the loss function. 

Inference: DDPM vs. DDIM 
After the diffusion model has been trained, we can input an image consisting of total noise (alongside potential conditioning) to the model, perform reverse diffusion, and produce realistic data samples. DDPM inference, however, is extremely time-consuming and compute-intensive: for all timestep values, we have to predict a denoised image. For 1000 timesteps, that means 1000 consecutive denoising operations.



Song et al. introduced denoising diffusion implicit models (DDIMs), which reparameterize the Markovian forward and reverse process to become non-Markovian. For the reverse process specifically:

At each inference step, we can directly predict the clean image x0 with our current image and the predicted ϵ. Since we can jump directly to the clean image without requiring consecutive renoising steps, inference can be accelerated by taking large timestep jumps with little loss in generation quality, which can reduce the 1000 timesteps of DDPM inference to ~50 steps. Additionally, because DDPMs predict ϵ, we can use DDIM inference on DDPM models. 


References
DDPM: https://arxiv.org/pdf/2006.11239 (Ho et. al)
Improved ddpm: https://arxiv.org/pdf/2102.09672 (Dhariwal & Nichols)
DDIM: https://arxiv.org/pdf/2010.02502 (Song et. al)
Classifier free guidance: https://arxiv.org/pdf/2207.12598 (Ho & Salimans)
UNet: https://arxiv.org/pdf/1505.04597
Vision transformer: https://arxiv.org/pdf/2010.11929
Self attention: https://arxiv.org/pdf/1706.03762
Resnet: https://arxiv.org/pdf/1512.03385
Diffusion transformer: https://arxiv.org/pdf/2212.09748 (Peebles & Xing) 
ADM: https://arxiv.org/pdf/2105.05233 (Dhariwal & Nichols) 

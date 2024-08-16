"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ResumePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/Ali_Momennasab_resume.pdf');
  }, [router]);

  return null; 
};

export default ResumePage;

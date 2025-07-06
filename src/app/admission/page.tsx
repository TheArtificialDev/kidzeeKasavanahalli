'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdmissionPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to contact page immediately
    router.replace('/contact');
  }, [router]);

  // Return null or a loading state while redirecting
  return null;
}

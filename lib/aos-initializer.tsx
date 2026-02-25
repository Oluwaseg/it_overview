'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      disable: false,
    });
  }, []);
  return null;
}

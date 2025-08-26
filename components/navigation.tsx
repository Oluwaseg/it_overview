'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '/about' },
  // { name: 'Services', href: '/services' },
  // { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/#' },
  { name: 'Services', href: '/#' },
  { name: 'Contact', href: '/#' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='relative w-8 h-8 transition-transform duration-300 group-hover:scale-110'>
                <Image
                  src='/images/logo.png'
                  alt='OCI Tech Solutions'
                  fill
                  className='object-contain'
                />
              </div>
              <span className='text-xl font-bold text-primary transition-colors duration-300 group-hover:text-primary/80'>
                OCI Tech Solutions
              </span>
            </Link>
          </div>

          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-1'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out',
                    'before:absolute before:inset-0 before:rounded-lg before:bg-primary/10 before:scale-0 before:transition-transform before:duration-300',
                    'hover:before:scale-100 hover:text-primary',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-foreground hover:bg-accent/50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='sm'
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className='relative p-2 transition-all duration-300 hover:bg-accent/50'
            >
              <div className='relative w-6 h-6'>
                <Menu
                  className={cn(
                    'absolute inset-0 h-6 w-6 transition-all duration-300',
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  )}
                />
                <X
                  className={cn(
                    'absolute inset-0 h-6 w-6 transition-all duration-300',
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  )}
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-500 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className='px-4 pt-2 pb-4 space-y-2 bg-background/98 backdrop-blur-md shadow-xl border-b border-border/50'>
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out',
                'transform hover:scale-[1.02] hover:shadow-md',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-foreground hover:bg-accent/70 hover:text-accent-foreground'
              )}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen
                  ? `slideInFromTop 0.3s ease-out forwards`
                  : undefined,
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-[-1] transition-opacity duration-300'
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}

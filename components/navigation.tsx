'use client';

import type React from 'react';

import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Cloud,
  Menu,
  Shield,
  Users,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const services = [
  {
    title: 'Cloud & Infrastructure',
    href: '/#services',
    icon: Cloud,
    description: 'Scalable cloud solutions and infrastructure management',
  },
  {
    title: 'Consulting Services',
    href: '/#services',
    icon: Users,
    description: 'Expert IT consulting and strategic guidance',
  },
  {
    title: 'IT Staffing',
    href: '/#services',
    icon: Building2,
    description: 'Professional IT talent acquisition and placement',
  },
  {
    title: 'IT Security',
    href: '/#services',
    icon: Shield,
    description: 'Comprehensive cybersecurity solutions',
  },
];

const industries = [
  { name: 'Healthcare', href: '/#industries', color: 'bg-red-50 text-red-600' },
  {
    name: 'Financial Services',
    href: '/#industries',
    color: 'bg-green-50 text-green-600',
  },
  {
    name: 'Manufacturing',
    href: '/#industries',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Energy & Utilities',
    href: '/#industries',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    name: 'Insurance',
    href: '/#industries',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Life Sciences',
    href: '/#industries',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    name: 'Public Sector',
    href: '/#industries',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    name: 'Technology & Media',
    href: '/#industries',
    color: 'bg-pink-50 text-pink-600',
  },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Industries', href: '#', hasDropdown: true },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleAnchorClick = (href: string, event?: React.MouseEvent) => {
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        if (event) {
          event.preventDefault();
        }
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest('[data-dropdown]') &&
        !target.closest('[data-dropdown-trigger]')
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/20'
            : 'bg-white/5 backdrop-blur-md'
        )}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='w-10 h-10 relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-12'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300' />
                <Image
                  src='/images/logo.png'
                  alt='OCI Tech'
                  fill
                  className='object-contain relative z-10'
                />
              </div>
              <div className='flex flex-col'>
                <span className='text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500'>
                  OCI Tech Solutions
                </span>
                <span className='text-xs text-gray-500 font-medium tracking-wide'>
                  Innovation Delivered
                </span>
              </div>
            </Link>

            <div className='hidden lg:flex items-center space-x-2'>
              {navigation.map((item) => (
                <div key={item.name} className='relative' data-dropdown>
                  {item.hasDropdown ? (
                    <div className='relative'>
                      <button
                        data-dropdown-trigger
                        onClick={(e) => toggleDropdown(item.name, e)}
                        className={cn(
                          'flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden group',
                          'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600',
                          activeDropdown === item.name
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 shadow-lg'
                            : 'text-gray-700 hover:text-blue-600'
                        )}
                      >
                        <span className='relative z-10'>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-all duration-300 relative z-10',
                            activeDropdown === item.name && 'rotate-180'
                          )}
                        />
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300' />
                      </button>

                      <div
                        className={cn(
                          'absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-500 origin-top-left',
                          activeDropdown === item.name
                            ? 'opacity-100 scale-100 translate-y-0'
                            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                        )}
                      >
                        {item.name === 'Services' && (
                          <div className='p-6 w-96'>
                            <div className='mb-4'>
                              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                Our Services
                              </h3>
                              <p className='text-sm text-gray-600'>
                                Comprehensive IT solutions for your business
                              </p>
                            </div>
                            <div className='space-y-2'>
                              {services.map((service, index) => {
                                const IconComponent = service.icon;
                                return (
                                  <Link
                                    key={service.title}
                                    href={service.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className='block w-full text-left p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group border border-transparent hover:border-blue-100'
                                    style={{
                                      animationDelay: `${index * 50}ms`,
                                    }}
                                  >
                                    <div className='flex items-start space-x-4'>
                                      <div className='p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300'>
                                        <IconComponent className='w-5 h-5' />
                                      </div>
                                      <div className='flex-1'>
                                        <div className='flex items-center justify-between'>
                                          <h4 className='font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
                                            {service.title}
                                          </h4>
                                          <ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-blue-600' />
                                        </div>
                                        <p className='text-sm text-gray-600 mt-1'>
                                          {service.description}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {item.name === 'Industries' && (
                          <div className='p-6 w-80'>
                            <div className='mb-4'>
                              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                Industries We Serve
                              </h3>
                              <p className='text-sm text-gray-600'>
                                Specialized solutions across sectors
                              </p>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                              {industries.map((industry, index) => (
                                <Link
                                  key={industry.name}
                                  href={industry.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className={cn(
                                    'text-left p-3 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm',
                                    industry.color
                                  )}
                                  style={{ animationDelay: `${index * 30}ms` }}
                                >
                                  {industry.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden group',
                        pathname === item.href
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600'
                      )}
                    >
                      <span className='relative z-10'>{item.name}</span>
                      {pathname !== item.href && (
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300' />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={toggleMobileMenu}
              className='lg:hidden p-3 rounded-xl hover:bg-gray-100/80 transition-all duration-300 group'
            >
              <div className='relative w-6 h-6'>
                <Menu
                  className={cn(
                    'w-6 h-6 absolute inset-0 transition-all duration-300',
                    isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  )}
                />
                <X
                  className={cn(
                    'w-6 h-6 absolute inset-0 transition-all duration-300',
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-500',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={cn(
            'absolute inset-x-0 top-0 h-full bg-white/95 backdrop-blur-xl transition-transform duration-500',
            isOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          <div className='pt-24 px-6 h-full overflow-y-auto'>
            <div className='space-y-2'>
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className={cn(
                    'transition-all duration-500',
                    isOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.hasDropdown ? (
                    <div className='border-b border-gray-200/50 last:border-b-0'>
                      <button
                        onClick={(e) => toggleDropdown(item.name, e)}
                        className='w-full flex items-center justify-between py-6 text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300'
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-all duration-300',
                            activeDropdown === item.name &&
                              'rotate-180 text-blue-600'
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-500',
                          activeDropdown === item.name
                            ? 'max-h-screen opacity-100 pb-4'
                            : 'max-h-0 opacity-0'
                        )}
                      >
                        <div className='space-y-2 pl-4'>
                          {item.name === 'Services' &&
                            services.map((service, serviceIndex) => {
                              const IconComponent = service.icon;
                              return (
                                <Link
                                  key={service.title}
                                  href={service.href}
                                  onClick={() => setIsOpen(false)}
                                  className='block w-full text-left p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group'
                                  style={{
                                    animationDelay: `${serviceIndex * 50}ms`,
                                  }}
                                >
                                  <div className='flex items-center space-x-3'>
                                    <div className='p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white'>
                                      <IconComponent className='w-4 h-4' />
                                    </div>
                                    <div>
                                      <div className='font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
                                        {service.title}
                                      </div>
                                      <div className='text-sm text-gray-600 mt-1'>
                                        {service.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}

                          {item.name === 'Industries' &&
                            industries.map((industry, industryIndex) => (
                              <Link
                                key={industry.name}
                                href={industry.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  'block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium',
                                  industry.color
                                )}
                                style={{
                                  animationDelay: `${industryIndex * 30}ms`,
                                }}
                              >
                                {industry.name}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block py-6 text-lg font-bold border-b border-gray-200/50 last:border-b-0 transition-all duration-300',
                        pathname === item.href
                          ? 'text-blue-600'
                          : 'text-gray-900 hover:text-blue-600'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

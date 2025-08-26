import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='col-span-1 md:col-span-2'>
            <h3 className='text-2xl font-bold mb-4'>
              OCI Tech Solutions Limited
            </h3>
            <p className='text-primary-foreground/80 mb-4 max-w-md'>
              Empowering businesses with innovative IT solutions since 1997. We
              deliver scalable, secure, and reliable technology services across
              multiple industries.
            </p>
            <div className='flex space-x-4'>
              <Link
                href='#'
                className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
              >
                <Twitter className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
              >
                <Facebook className='h-5 w-5' />
              </Link>
            </div>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <Mail className='h-4 w-4' />
                <span className='text-primary-foreground/80'>
                  info@ocitechsolutions.com
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='h-4 w-4' />
                <span className='text-primary-foreground/80'>
                  +234 (XXX) XXX-XXXX
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-4 w-4' />
                <span className='text-primary-foreground/80'>
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-primary-foreground/20 mt-8 pt-8 text-center'>
          <p className='text-primary-foreground/80'>
            © 2025 OCI Tech Solutions Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

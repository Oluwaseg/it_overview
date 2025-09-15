import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
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

          {/* Quick Links */}
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
                  href='/#'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/#'
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
            <div className='space-y-3'>
              <div className='flex items-start space-x-2'>
                <Mail className='h-4 w-4 mt-0.5' />
                <div className='text-sm'>
                  <div className='text-primary-foreground/80'>
                    <a
                      href='mailto:info@oci.com'
                      className='hover:text-primary-foreground transition-colors'
                    >
                      info@oci.com
                    </a>
                  </div>
                  <div className='text-primary-foreground/80'>
                    <a
                      href='mailto:hr@oci.com'
                      className='hover:text-primary-foreground transition-colors'
                    >
                      hr@oci.com
                    </a>
                  </div>
                  <div className='text-primary-foreground/80'>
                    <a
                      href='mailto:sales@oci.com'
                      className='hover:text-primary-foreground transition-colors'
                    >
                      sales@oci.com
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex items-start space-x-2'>
                <Phone className='h-4 w-4 mt-0.5' />
                <div className='text-sm'>
                  <div className='text-primary-foreground/80'>
                    Customer Support:{' '}
                    <a
                      href='tel:+2349016101268'
                      className='hover:text-primary-foreground transition-colors'
                    >
                      +2349016101268
                    </a>
                  </div>
                  <div className='text-primary-foreground/80'>
                    HR:{' '}
                    <a
                      href='tel:+2348035891932'
                      className='hover:text-primary-foreground transition-colors'
                    >
                      +2348035891932
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex items-start space-x-2'>
                <MapPin className='h-4 w-4 mt-0.5' />
                <div className='text-sm'>
                  <div className='text-primary-foreground/80 font-medium'>
                    Head Office:
                  </div>
                  <div className='text-primary-foreground/80'>
                    Block 2, Road 2, Diamond Estate
                  </div>
                  <div className='text-primary-foreground/80'>
                    Lasu-Igando Expressway, Isheri
                  </div>
                  <div className='text-primary-foreground/80'>
                    Lagos State, Nigeria
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className='border-t border-primary-foreground/20 mt-8 pt-8 text-center'>
          <p className='text-primary-foreground/80'>
            © 2022 OCI Tech Solutions Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

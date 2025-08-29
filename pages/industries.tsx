'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  Factory,
  Heart,
  Microscope,
  Shield,
  Smartphone,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const industries = [
  {
    title: 'Healthcare',
    icon: Heart,
    image: '/images/industries/healthcare-medical-technology.png',
    description:
      'Enable better patient care and compliance with secure, integrated healthcare IT services and digital health platforms.',
    services: [
      'Electronic Health Records (EHR)',
      'Patient Data Security',
      'Telemedicine Platforms',
      'Healthcare Analytics',
    ],
    benefits: [
      'Improved patient outcomes',
      'Reduced operational costs',
      'Enhanced data security',
      'Regulatory compliance',
    ],
  },
  {
    title: 'Financial Services',
    icon: DollarSign,
    image: '/images/industries/financial-services-banking.png',
    description:
      'Drive growth and compliance with secure, scalable platforms for banking, payments, and investment management.',
    services: [
      'Core Banking Systems',
      'Payment Processing',
      'Risk Management',
      'Regulatory Reporting',
    ],
    benefits: [
      'Enhanced security',
      'Faster transactions',
      'Improved compliance',
      'Better customer experience',
    ],
  },
  {
    title: 'Manufacturing',
    icon: Factory,
    image: '/images/industries/manufacturing-industrial-automation.png',
    description:
      'Modernize operations with smart manufacturing, IoT integration, and supply chain digitization.',
    services: [
      'Industrial IoT',
      'Supply Chain Management',
      'Quality Control Systems',
      'Predictive Maintenance',
    ],
    benefits: [
      'Increased efficiency',
      'Reduced downtime',
      'Better quality control',
      'Cost optimization',
    ],
  },
  {
    title: 'Energy & Utilities',
    icon: Zap,
    image: '/images/industries/energy-utilities-power-grid.png',
    description:
      'Improve efficiency, safety, and sustainability with IT solutions built for mission-critical operations.',
    services: [
      'Smart Grid Technology',
      'Asset Management',
      'Energy Trading Systems',
      'Environmental Monitoring',
    ],
    benefits: [
      'Improved reliability',
      'Enhanced safety',
      'Sustainability goals',
      'Operational efficiency',
    ],
  },
  {
    title: 'Insurance',
    icon: Shield,
    image: '/images/industries/insurance-risk-management.png',
    description:
      'Streamline claims, underwriting, and customer engagement with modern applications and data-driven solutions.',
    services: [
      'Claims Processing',
      'Underwriting Systems',
      'Customer Portals',
      'Risk Analytics',
    ],
    benefits: [
      'Faster claim processing',
      'Better risk assessment',
      'Improved customer service',
      'Reduced fraud',
    ],
  },
  {
    title: 'Life Sciences',
    icon: Microscope,
    image: '/images/industries/life-sciences-research-lab.png',
    description:
      'Accelerate research, compliance, and product development with advanced IT and data analytics solutions.',
    services: [
      'Clinical Trial Management',
      'Regulatory Compliance',
      'Research Data Management',
      'Laboratory Information Systems',
    ],
    benefits: [
      'Faster time to market',
      'Improved compliance',
      'Enhanced research capabilities',
      'Better data management',
    ],
  },
  {
    title: 'Public Sector',
    icon: Users,
    image: '/images/industries/public-sector-government.png',
    description:
      'Support citizen services and government operations with secure, scalable digital solutions.',
    services: [
      'Citizen Service Portals',
      'Government Cloud',
      'Digital Identity',
      'Data Analytics',
    ],
    benefits: [
      'Better citizen services',
      'Improved transparency',
      'Cost efficiency',
      'Enhanced security',
    ],
  },
  {
    title: 'Technology & Media',
    icon: Smartphone,
    image: '/images/industries/technology-media-communications.png',
    description:
      'Enhance connectivity, content delivery, and customer engagement with agile IT infrastructure and platforms.',
    services: [
      'Content Management Systems',
      'Streaming Platforms',
      'Customer Analytics',
      'Cloud Infrastructure',
    ],
    benefits: [
      'Scalable content delivery',
      'Better user experience',
      'Real-time analytics',
      'Global reach',
    ],
  },
];

const stats = [
  { number: '10+', label: 'Industries Served' },
  { number: '500+', label: 'Industry Projects' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '25+', label: 'Years Experience' },
];

export default function IndustriesPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
      });
    }

    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Remove hash from URL without affecting browser history
          window.history.replaceState(null, '', window.location.pathname);
        }
      }
    };

    // Handle initial load with hash
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <Badge variant='secondary' className='mb-4'>
              Industry Expertise
            </Badge>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
              Industries We Serve
            </h1>
            <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              We partner with organizations across multiple industries,
              delivering technology solutions tailored to their unique
              challenges and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-secondary text-secondary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-8'
            data-aos='fade-up'
          >
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-3xl md:text-4xl font-bold mb-2'>
                  {stat.number}
                </div>
                <div className='text-secondary-foreground/80'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      {industries.map((industry, index) => {
        const sectionId =
          industry.title === 'Healthcare'
            ? 'healthcare'
            : industry.title === 'Financial Services'
            ? 'financial-services'
            : industry.title === 'Manufacturing'
            ? 'manufacturing'
            : industry.title === 'Energy & Utilities'
            ? 'energy-utilities'
            : industry.title === 'Insurance'
            ? 'insurance'
            : industry.title === 'Life Sciences'
            ? 'life-sciences'
            : industry.title === 'Public Sector'
            ? 'public-sector'
            : 'technology-media';

        return (
          <section
            key={index}
            id={sectionId}
            className={`py-20 overflow-hidden ${
              index % 2 === 1 ? 'bg-muted/30' : ''
            }`}
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className='flex-1' data-aos='fade-up'>
                  <div className='relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl'>
                    <Image
                      src={industry.image || '/placeholder.svg'}
                      alt={`${industry.title} solutions`}
                      width={600}
                      height={400}
                      className='object-cover'
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className='flex-1 text-center lg:text-left'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <div className='flex items-center justify-center lg:justify-start space-x-3 mb-6'>
                    <industry.icon className='h-10 w-10 lg:h-12 lg:w-12 text-secondary flex-shrink-0' />
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground'>
                      {industry.title}
                    </h2>
                  </div>
                  <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                    {industry.description}
                  </p>

                  {/* Services */}
                  <div className='mb-8'>
                    <h3 className='text-xl font-semibold mb-4'>
                      Our Solutions
                    </h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                      {industry.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className='flex items-center space-x-2'
                        >
                          <CheckCircle className='h-4 w-4 text-secondary flex-shrink-0' />
                          <span className='text-sm text-muted-foreground'>
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button size='lg' className='pulse-glow' asChild>
                    <Link href='/contact'>
                      Get Started <ArrowRight className='ml-2 h-5 w-5' />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className='py-20 bg-secondary text-secondary-foreground'>
        <div
          className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
          data-aos='fade-up'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Transform Your Industry?
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            Let's discuss how our industry-specific solutions can address your
            unique challenges and drive measurable results for your
            organization.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              variant='outline'
              className='bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90'
              asChild
            >
              <Link href='/contact'>
                Contact Our Experts <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='ghost'
              className='text-secondary-foreground hover:bg-secondary-foreground/10'
              asChild
            >
              <Link href='/services'>Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

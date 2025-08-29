'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Brain,
  Briefcase,
  Building,
  Cloud,
  Code,
  Database,
  Globe,
  Lock,
  Network,
  Server,
  Shield,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const serviceCategories = [
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    image: '/images/modern-cloud-infrastructure-dashboard-with-servers.png',
    description:
      'Scalable and reliable cloud and infrastructure services to empower your business with agility, security, and performance.',
    services: [
      {
        icon: Cloud,
        name: 'Cloud Platforms',
        description:
          'Harness leading cloud platforms to drive digital transformation and optimize business operations.',
      },
      {
        icon: Server,
        name: 'Mainframe',
        description:
          'Modernize and support mission-critical mainframe applications with security and scalability.',
      },
      {
        icon: Network,
        name: 'Network Solutions',
        description:
          'Build resilient, high-performance networks for reliable connectivity and enterprise workloads.',
      },
      {
        icon: Database,
        name: 'Private & Public Cloud',
        description:
          'Customized cloud environments and scalable public cloud solutions for all business sizes.',
      },
    ],
  },
  {
    title: 'Consulting Services',
    icon: Briefcase,
    image: '/images/business-consulting-meeting-with-technology-charts.png',
    description:
      "End-to-end guidance from strategy to execution, ensuring your business stays competitive in today's digital world.",
    services: [
      {
        icon: Briefcase,
        name: 'Strategic Consulting',
        description:
          'Expert advice and tailored strategies to align technology with business goals.',
      },
      {
        icon: Brain,
        name: 'Data & AI',
        description:
          'Advanced analytics and AI solutions to drive smarter decisions and predict trends.',
      },
      {
        icon: Code,
        name: 'Custom Applications',
        description:
          'Tailored solutions including modernization, managed applications, and quality engineering.',
      },
      {
        icon: Zap,
        name: 'Software Development',
        description:
          'End-to-end software development services from design to deployment.',
      },
    ],
  },
  {
    title: 'IT Staffing',
    icon: Users,
    image: '/images/professional-it-team-working-on-computers-in-mod.png',
    description:
      'Connect organizations with highly skilled professionals to fill critical technology roles and drive business success.',
    services: [
      {
        icon: Globe,
        name: 'Onshore & Offshore Staffing',
        description:
          'Flexible staffing models to meet your needs locally or globally with cost-effectiveness.',
      },
      {
        icon: Users,
        name: 'Contract & Permanent Placement',
        description:
          'Short-term expertise for projects or permanent team members for long-term growth.',
      },
      {
        icon: Code,
        name: 'Specialized IT Roles',
        description:
          'Certified experts across cloud, infrastructure, cybersecurity, data, and development.',
      },
      {
        icon: Building,
        name: 'Industry-Aligned Expertise',
        description:
          'Professionals who understand healthcare, banking, and manufacturing industry needs.',
      },
    ],
  },
  {
    title: 'IT Security',
    icon: Shield,
    image: '/images/cybersecurity-dashboard-with-shield-icons-and-netw.png',
    description:
      'End-to-end security solutions that safeguard your business against evolving cyber threats.',
    services: [
      {
        icon: Shield,
        name: 'Cyber Risk & Compliance',
        description:
          'Proactively identify and manage risks while ensuring compliance with global regulations.',
      },
      {
        icon: Lock,
        name: 'Cyber Transformation',
        description:
          'Modernize security operations with advanced tools, automation, and 24/7 monitoring.',
      },
      {
        icon: Users,
        name: 'Digital Identity',
        description:
          'Strengthen identity and access management with next-generation authentication solutions.',
      },
      {
        icon: Database,
        name: 'Infrastructure Protection',
        description:
          'Comprehensive protection across IT infrastructure, applications, and sensitive data.',
      },
    ],
  },
];

const industries = [
  'Consumer & Retail',
  'Energy & Utilities',
  'Financial Services',
  'Healthcare',
  'Insurance',
  'Life Sciences',
  'Manufacturing',
  'Public Sector',
  'Technology & Media',
  'Travel & Transportation',
];

export default function ServicesPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <Badge variant='secondary' className='mb-4'>
              Comprehensive Solutions
            </Badge>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
              Our Services
            </h1>
            <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              From cloud infrastructure to cybersecurity, we deliver
              enterprise-grade IT solutions that transform businesses and drive
              sustainable growth across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          id={
            category.title === 'Cloud & Infrastructure'
              ? 'cloud-infrastructure'
              : category.title === 'Consulting Services'
              ? 'consulting-services'
              : category.title === 'IT Staffing'
              ? 'it-staffing'
              : 'it-security'
          }
          className={`py-20 overflow-hidden ${
            categoryIndex % 2 === 1 ? 'bg-muted/30' : ''
          }`}
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Category Header with Image */}
            <div
              className={`flex flex-col lg:flex-row items-center gap-12 mb-16 ${
                categoryIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className='flex-1' data-aos='fade-up'>
                <div className='relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src={category.image || '/placeholder.svg'}
                    alt={`${category.title} illustration`}
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
                <div className='flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 mb-4 sm:mb-6'>
                  <category.icon className='h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-secondary flex-shrink-0' />
                  <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground ml-1'>
                    {category.title}
                  </h2>
                </div>
                <p className='text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8'>
                  {category.description}
                </p>
                <Button size='lg' className='pulse-glow' asChild>
                  <Link href='/contact'>
                    Get Started <ArrowRight className='ml-2 h-5 w-5' />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {category.services.map((service, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >
                  <CardHeader>
                    <div className='flex items-center space-x-4'>
                      <div className='p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors'>
                        <service.icon className='h-8 w-8 text-secondary' />
                      </div>
                      <div>
                        <CardTitle className='text-xl'>
                          {service.name}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-base'>
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Industries Section */}
      <section className='py-20 bg-secondary text-secondary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Industries We Serve
            </h2>
            <p className='text-xl opacity-90 max-w-4xl mx-auto'>
              We partner with organizations across multiple industries,
              delivering technology solutions tailored to their unique
              challenges and requirements.
            </p>
          </div>

          <div
            className='grid grid-cols-2 md:grid-cols-5 gap-4'
            data-aos='fade-up'
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className='p-6 bg-secondary-foreground/10 rounded-xl text-center hover:bg-secondary-foreground/20 transition-all duration-300 cursor-pointer hover:scale-105'
                data-aos='zoom-in'
                data-aos-delay={index * 50}
              >
                <h3 className='font-semibold text-sm'>{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div
          className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
          data-aos='fade-up'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Ready to Get Started?
          </h2>
          <p className='text-xl text-muted-foreground mb-8'>
            Let's discuss how our comprehensive IT services can transform your
            business and accelerate your digital journey.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' className='pulse-glow' asChild>
              <Link href='/contact'>
                Contact Our Experts <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <Link href='/about'>Learn About Our Company</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

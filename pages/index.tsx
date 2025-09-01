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
  Briefcase,
  CheckCircle,
  Cloud,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const heroSlides = [
  {
    title: 'Empowering Your Digital Future',
    subtitle: 'Transform your business with comprehensive IT solutions',
    description:
      'From cloud infrastructure to cybersecurity, we deliver enterprise-grade services that drive growth and innovation.',
    image: '/images/modern-technology-dashboard-interface.png',
    cta: 'Get Started',
  },
  {
    title: 'Cloud Infrastructure Excellence',
    subtitle: 'Scalable solutions for modern enterprises',
    description:
      'Harness the power of leading cloud platforms to drive digital transformation and optimize business operations.',
    image: '/images/cloud-infrastructure-servers-data-center.png',
    cta: 'Explore Cloud Services',
  },
  {
    title: 'Cybersecurity That Protects',
    subtitle: 'End-to-end security solutions',
    description:
      'Safeguard your business against evolving cyber threats with our comprehensive security framework.',
    image: '/images/cybersecurity-shield-protection-network.png',
    cta: 'Learn Security',
  },
];

const clientLogos = [
  { name: 'Microsoft', logo: '/images/microsoft-logo.png' },
  { name: 'Oracle', logo: '/images/oracle-logo.png' },
  { name: 'SAP', logo: '/images/sap-logo.png' },
  { name: 'Salesforce', logo: '/images/salesforce-logo.png' },
  { name: 'AWS', logo: '/images/aws-logo.png' },
  { name: 'Google Cloud', logo: '/images/partners/google-cloud-logo.png' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO, HealthTech Solutions',
    content:
      'OCI Tech transformed our healthcare IT infrastructure, improving patient data security and reducing system downtime by 90%.',
    rating: 5,
    avatar: '/images/professional-woman-avatar.png',
  },
  {
    name: 'Michael Chen',
    position: 'IT Director, Financial Corp',
    content:
      'Their cloud migration expertise helped us reduce costs by 40% while improving our system performance significantly.',
    rating: 5,
    avatar: '/images/professional-man-avatar.png',
  },
];

const services = [
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description:
      'Scalable and reliable cloud platforms, mainframe modernization, and network solutions.',
    features: [
      'Cloud Platforms',
      'Mainframe',
      'Network',
      'Private & Public Cloud',
    ],
  },
  {
    icon: Briefcase,
    title: 'Consulting Services',
    description:
      'Expert guidance from strategy to execution with data & AI solutions.',
    features: [
      'Strategic Consulting',
      'Data & AI',
      'Custom Applications',
      'Quality Engineering',
    ],
  },
  {
    icon: Users,
    title: 'IT Staffing',
    description:
      'Connect with highly skilled professionals for onshore and offshore roles.',
    features: [
      'Onshore & Offshore',
      'Contract & Permanent',
      'Specialized Roles',
      'Scalable Solutions',
    ],
  },
  {
    icon: Shield,
    title: 'IT Security',
    description:
      'End-to-end security solutions protecting against evolving cyber threats.',
    features: [
      'Cyber Risk & Compliance',
      'Digital Identity',
      'Infrastructure Protection',
      '24/7 Operations',
    ],
  },
];

const industries = [
  {
    name: 'Healthcare',
    image: '/images/industries/healthcare-medical-technology.png',
  },
  {
    name: 'Financial Services',
    image: '/images/industries/financial-services-banking.png',
  },
  {
    name: 'Manufacturing',
    image: '/images/industries/manufacturing-industrial-automation.png',
  },
  {
    name: 'Energy & Utilities',
    image: '/images/industries/energy-utilities-power-grid.png',
  },
  {
    name: 'Insurance',
    image: '/images/industries/insurance-risk-management.png',
  },
  {
    name: 'Life Sciences',
    image: '/images/industries/life-sciences-research-lab.png',
  },
  {
    name: 'Public Sector',
    image: '/images/industries/public-sector-government.png',
  },
  {
    name: 'Technology & Media',
    image: '/images/industries/technology-media-communications.png',
  },
];

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '500+', label: 'Successful Projects' },
  { number: '50+', label: 'Enterprise Clients' },
  { number: '24/7', label: 'Support Available' },
];

export default function HomePage() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OCI Tech Solutions',
    url: 'https://ocitech.com',
    logo: 'https://ocitech.com/images/logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+2348035891932',
        contactType: 'customer service',
        email: 'info@oci.com',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/ocitech',
      'https://twitter.com/ocitech',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Block 2, Road 2, Diamond Estate, Lasu-Igando Expressway, Isheri',
      addressLocality: 'Lagos',
      addressCountry: 'Nigeria',
      postalCode: '230001',
    },
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Initialize AOS when component mounts
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
      });
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className='pt-16'>
      <section className='relative h-screen flex items-center overflow-hidden'>
        {/* Background Image Slider */}
        <div className='absolute inset-0'>
          <div
            className='flex h-full transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide, index) => (
              <div key={index} className='w-full h-full flex-shrink-0 relative'>
                <Image
                  src={slide.image || '/placeholder.svg'}
                  alt={`Slide ${index + 1}`}
                  fill
                  className='object-cover'
                  priority={index === 0}
                />
                {/* Dark overlay for better text contrast */}
                <div className='absolute inset-0 bg-black/40' />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
          <div className='max-w-3xl' data-aos='fade-right'>
            <Badge
              variant='secondary'
              className='mb-4 bg-white/90 text-black hover:bg-white'
            >
              Trusted Since 1997
            </Badge>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
              {heroSlides[currentSlide].title.split(' ').slice(0, 2).join(' ')}
              <span className='text-secondary block'>
                {heroSlides[currentSlide].title.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className='text-xl text-white/90 mb-2 font-semibold'>
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className='text-lg text-white/80 mb-8 leading-relaxed max-w-2xl'>
              {heroSlides[currentSlide].description}
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button size='lg' className='pulse-glow' asChild>
                <Link href='/contact'>
                  {heroSlides[currentSlide].cta}{' '}
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='bg-white/10 border-white/30 text-white hover:bg-white/20'
                asChild
              >
                <Link href='/services'>Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button> */}

        {/* Slide Indicators */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div> */}
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-primary text-primary-foreground'>
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
                <div className='text-primary-foreground/80'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Our Core Services
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Comprehensive IT solutions designed to accelerate your digital
              transformation and drive sustainable business growth.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
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
                      <CardTitle className='text-xl'>{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base mb-4'>
                    {service.description}
                  </CardDescription>
                  <ul className='space-y-2'>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center space-x-2'>
                        <CheckCircle className='h-4 w-4 text-secondary' />
                        <span className='text-sm text-muted-foreground'>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div data-aos='fade-right'>
              <Image
                src='/images/modern-cloud-infrastructure-data-center-servers.png'
                alt='Cloud Infrastructure'
                width={600}
                height={500}
                className='rounded-lg shadow-xl'
              />
            </div>
            <div data-aos='fade-left'>
              <Badge variant='secondary' className='mb-4'>
                Cloud Solutions
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Scalable Cloud Infrastructure for Modern Enterprises
              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
                Transform your business operations with our comprehensive cloud
                platforms. From private cloud environments to public cloud
                solutions, we deliver the scalability, security, and performance
                your organization needs.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center space-x-3'>
                  <CheckCircle className='h-5 w-5 text-secondary' />
                  <span>99.9% uptime guarantee</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <CheckCircle className='h-5 w-5 text-secondary' />
                  <span>Enterprise-grade security</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <CheckCircle className='h-5 w-5 text-secondary' />
                  <span>24/7 monitoring and support</span>
                </li>
              </ul>
              <Button size='lg' asChild>
                <Link href='/services'>
                  Learn More <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div data-aos='fade-right'>
              <Badge variant='secondary' className='mb-4'>
                Cybersecurity
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Comprehensive Security Solutions That Protect Your Business
              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
                Stay ahead of evolving cyber threats with our end-to-end
                security framework. Our expert team provides proactive
                monitoring, threat detection, and incident response to keep your
                data and systems secure.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center space-x-3'>
                  <Shield className='h-5 w-5 text-secondary' />
                  <span>Advanced threat detection</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <Shield className='h-5 w-5 text-secondary' />
                  <span>Compliance management</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <Shield className='h-5 w-5 text-secondary' />
                  <span>Incident response team</span>
                </li>
              </ul>
              <Button size='lg' asChild>
                <Link href='/services'>
                  Secure Your Business <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
              </Button>
            </div>
            <div data-aos='fade-left'>
              <Image
                src='/images/cybersecurity-shield-protection-network-security.png'
                alt='Cybersecurity Solutions'
                width={600}
                height={500}
                className='rounded-lg shadow-xl'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              What Our Clients Say
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Trusted by leading organizations across multiple industries
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className='p-6'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <div className='flex items-center space-x-1 mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
                <p className='text-muted-foreground mb-6 italic'>
                  "{testimonial.content}"
                </p>
                <div className='flex items-center space-x-4'>
                  <Image
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className='rounded-full'
                  />
                  <div>
                    <h4 className='font-semibold'>{testimonial.name}</h4>
                    <p className='text-sm text-muted-foreground'>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div data-aos='fade-up'>
            <h3 className='text-center text-lg font-semibold text-muted-foreground mb-8'>
              Trusted by Industry Leaders
            </h3>
            <div className='relative overflow-hidden'>
              <div className='flex animate-scroll'>
                {/* First set of logos */}
                {clientLogos.map((client, index) => (
                  <div key={`first-${index}`} className='flex-shrink-0 mx-8'>
                    <Image
                      src={client.logo || '/placeholder.svg'}
                      alt={client.name}
                      width={120}
                      height={60}
                      className='grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((client, index) => (
                  <div key={`second-${index}`} className='flex-shrink-0 mx-8'>
                    <Image
                      src={client.logo || '/placeholder.svg'}
                      alt={client.name}
                      width={120}
                      height={60}
                      className='grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id='industries' className='py-20 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Industries We Serve
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Delivering tailored technology solutions across diverse sectors
              with deep industry expertise.
            </p>
          </div>

          <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
            data-aos='fade-up'
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className='group bg-card rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2'
              >
                <div className='aspect-video relative overflow-hidden'>
                  <Image
                    src={industry.image || '/placeholder.svg'}
                    alt={industry.name}
                    width={400}
                    height={250}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  <div className='absolute bottom-4 left-4 right-4'>
                    <h3 className='text-white font-semibold text-lg'>
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-secondary text-secondary-foreground'>
        <div
          className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
          data-aos='fade-up'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            Let's discuss how our proven IT solutions can accelerate your
            digital transformation and drive measurable results for your
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
                Start Your Project <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='ghost'
              className='text-secondary-foreground hover:bg-secondary-foreground/10'
              asChild
            >
              <Link href='/about'>Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

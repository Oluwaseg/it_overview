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
  Award,
  Calendar,
  Handshake,
  Lightbulb,
  TrendingUp,
  User,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

const newsArticles = [
  {
    title: 'Driving Digital Transformation in Healthcare',
    category: 'Client Success',
    date: 'March 2025',
    author: 'OCI Tech Solutions',
    excerpt:
      'OCI Tech Solutions successfully partnered with a leading private hospital in Lagos to modernize its IT infrastructure and implement a secure electronic health record (EHR) platform.',
    content:
      'The project improved patient data accuracy, reduced waiting times by 40%, and enabled doctors to access patient records securely from multiple departments. "This transformation project shows our commitment to improving healthcare delivery in Nigeria through technology," said our Chief Information Officer.',
    image: '/images/news/healthcare-digital-transformation.png',
    icon: Award,
    featured: true,
  },
  {
    title: 'Strategic Partnership with Microsoft Nigeria',
    category: 'Partnership',
    date: 'February 2025',
    author: 'OCI Tech Solutions',
    excerpt:
      'OCI Tech Solutions Limited has entered into a strategic partnership with Microsoft Nigeria to deliver enterprise-grade cloud services to banks and financial institutions across West Africa.',
    content:
      'The collaboration will focus on cloud migration, cybersecurity resilience, and AI-driven analytics. "Our partnership with Microsoft strengthens our mission to deliver scalable, secure, and innovative solutions tailored to Nigeria\'s financial sector," said our CEO.',
    image: '/images/news/microsoft-partnership.png',
    icon: Handshake,
    featured: true,
  },
  {
    title: 'Launch of AI-Powered Fraud Detection Platform',
    category: 'Innovation',
    date: 'January 2025',
    author: 'OCI Tech Solutions',
    excerpt:
      'OCI Tech Solutions Limited announced the launch of its proprietary AI-powered fraud detection platform for the Nigerian banking industry.',
    content:
      'Leveraging machine learning algorithms, the platform can detect unusual transaction patterns in real time, reducing fraud risk and improving compliance with Central Bank of Nigeria (CBN) regulations. The solution is expected to be piloted with two Tier-1 Nigerian banks in Q2 2025.',
    image: '/images/news/ai-fraud-detection.png',
    icon: Lightbulb,
    featured: false,
  },
  {
    title: 'The Future of IT Staffing in Nigeria',
    category: 'Industry Insight',
    date: 'December 2024',
    author: 'OCI Tech Solutions',
    excerpt:
      'OCI Tech Solutions Limited released its annual report on IT staffing trends in Nigeria, highlighting the growing demand for cloud engineers, cybersecurity specialists, and data scientists.',
    content:
      'The report emphasizes the importance of upskilling and reskilling Nigerian talent to meet global IT demands. The report also notes that hybrid staffing models—combining onshore and offshore delivery—are gaining traction among Nigerian enterprises.',
    image: '/images/news/it-staffing-trends.png',
    icon: TrendingUp,
    featured: false,
  },
  {
    title: 'Digital Literacy Program for Youth in Ibadan',
    category: 'Community',
    date: 'November 2024',
    author: 'OCI Tech Solutions',
    excerpt:
      'As part of its Corporate Social Responsibility (CSR), OCI Tech Solutions Limited launched a digital literacy initiative targeting 1,000 secondary school students in Oyo State.',
    content:
      'The program provides free training on coding, cybersecurity basics, and safe internet practices. "We believe the future of Nigeria lies in equipping young people with digital skills to compete globally," said our Head of Community Engagement.',
    image: '/images/news/digital-literacy-program.png',
    icon: Users,
    featured: false,
  },
];

const categories = [
  'All',
  'Client Success',
  'Partnership',
  'Innovation',
  'Industry Insight',
  'Community',
];

export default function NewsPage() {
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

  const featuredArticles = newsArticles.filter((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <Badge variant='secondary' className='mb-4'>
              Latest Updates
            </Badge>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
              Newsroom
            </h1>
            <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              Stay up to date with the latest news, press releases, and updates
              from OCI Tech Solutions Limited. Discover our client success
              stories, new partnerships, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Featured Stories
            </h2>
            <p className='text-xl text-muted-foreground'>
              Highlighting our most impactful achievements and partnerships
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {featuredArticles.map((article, index) => (
              <Card
                key={index}
                className='group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={article.image || '/placeholder.svg'}
                    alt={article.title}
                    width={500}
                    height={300}
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute top-4 left-4'>
                    <Badge
                      variant='secondary'
                      className='bg-secondary/90 backdrop-blur-sm'
                    >
                      {article.category}
                    </Badge>
                  </div>
                  <div className='absolute top-4 right-4'>
                    <div className='p-2 bg-secondary/90 backdrop-blur-sm rounded-full'>
                      <article.icon className='h-5 w-5 text-secondary-foreground' />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className='flex items-center space-x-4 text-sm text-muted-foreground mb-2'>
                    <div className='flex items-center space-x-1'>
                      <Calendar className='h-4 w-4' />
                      <span>{article.date}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <User className='h-4 w-4' />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <CardTitle className='text-xl group-hover:text-secondary transition-colors duration-300'>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base mb-4 leading-relaxed'>
                    {article.excerpt}
                  </CardDescription>
                  <p className='text-sm text-muted-foreground mb-6 leading-relaxed'>
                    {article.content}
                  </p>
                  <Button
                    variant='outline'
                    className='group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300'
                  >
                    Read More <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className='py-20 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Latest News & Updates
            </h2>
            <p className='text-xl text-muted-foreground mb-8'>
              Explore our complete collection of news, insights, and company
              updates
            </p>

            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? 'default' : 'outline'}
                  size='sm'
                  className='transition-all duration-300'
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {regularArticles.map((article, index) => (
              <Card
                key={index}
                className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={article.image || '/placeholder.svg'}
                    alt={article.title}
                    width={400}
                    height={200}
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute top-3 left-3'>
                    <Badge
                      variant='secondary'
                      className='bg-secondary/90 backdrop-blur-sm text-xs'
                    >
                      {article.category}
                    </Badge>
                  </div>
                  <div className='absolute top-3 right-3'>
                    <div className='p-1.5 bg-secondary/90 backdrop-blur-sm rounded-full'>
                      <article.icon className='h-4 w-4 text-secondary-foreground' />
                    </div>
                  </div>
                </div>
                <CardHeader className='pb-3'>
                  <div className='flex items-center space-x-3 text-xs text-muted-foreground mb-2'>
                    <div className='flex items-center space-x-1'>
                      <Calendar className='h-3 w-3' />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <CardTitle className='text-lg group-hover:text-secondary transition-colors duration-300 line-clamp-2'>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='pt-0'>
                  <CardDescription className='text-sm mb-4 leading-relaxed line-clamp-3'>
                    {article.excerpt}
                  </CardDescription>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='p-0 h-auto font-medium text-secondary hover:text-secondary/80 hover:bg-transparent'
                  >
                    Read More <ArrowRight className='ml-1 h-3 w-3' />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='py-20 bg-secondary text-secondary-foreground'>
        <div
          className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
          data-aos='fade-up'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Stay Updated</h2>
          <p className='text-xl mb-8 opacity-90'>
            Subscribe to our newsletter to receive the latest news, insights,
            and updates directly in your inbox.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 rounded-lg bg-secondary-foreground text-secondary placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20'
            />
            <Button
              size='lg'
              variant='outline'
              className='bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90'
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

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
  BookOpen,
  Briefcase,
  Clock,
  Coffee,
  Globe,
  Heart,
  Lightbulb,
  MapPin,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const jobOpenings = [
  {
    title: 'Senior Cloud Engineer',
    department: 'Cloud & Infrastructure',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    experience: '5+ years',
    description:
      'Lead cloud infrastructure projects and mentor junior engineers in our growing cloud practice.',
  },
  {
    title: 'Cybersecurity Analyst',
    department: 'IT Security',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    experience: '3+ years',
    description:
      'Monitor security threats and implement protective measures for our enterprise clients.',
  },
  {
    title: 'Software Developer',
    department: 'Consulting Services',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    description:
      'Develop custom applications and modernize legacy systems for diverse industry clients.',
  },
  {
    title: 'IT Project Manager',
    department: 'IT Staffing',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    experience: '4+ years',
    description:
      'Manage complex IT projects and coordinate with cross-functional teams.',
  },
  {
    title: 'Data Scientist',
    department: 'Consulting Services',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    description:
      'Analyze complex datasets and build AI/ML solutions for business intelligence.',
  },
  {
    title: 'DevOps Engineer',
    department: 'Cloud & Infrastructure',
    location: 'Remote',
    type: 'Contract',
    experience: '4+ years',
    description:
      'Implement CI/CD pipelines and automate infrastructure deployment processes.',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description:
      'Comprehensive health insurance and wellness programs for you and your family.',
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    description:
      'Continuous learning opportunities with training budgets and certification support.',
  },
  {
    icon: Globe,
    title: 'Global Opportunities',
    description:
      'Work on international projects with onshore and offshore teams.',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description:
      'Flexible working arrangements and generous vacation policies.',
  },
  {
    icon: Award,
    title: 'Recognition Programs',
    description:
      'Performance-based bonuses and employee recognition initiatives.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description:
      'Work with diverse, talented teams in an inclusive environment.',
  },
];

const values = [
  {
    title: 'Innovation',
    description:
      'We embrace cutting-edge technologies and creative problem-solving.',
    icon: Lightbulb,
  },
  {
    title: 'Inclusion',
    description:
      'We value diversity and create an environment where everyone belongs.',
    icon: Users,
  },
  {
    title: 'Growth',
    description:
      'We invest in our people and support their professional development.',
    icon: BookOpen,
  },
];

const stats = [
  { number: '200+', label: 'Team Members' },
  { number: '15+', label: 'Countries' },
  { number: '95%', label: 'Employee Satisfaction' },
  { number: '25+', label: 'Years in Business' },
];

export default function CareerPage() {
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
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div data-aos='fade-right'>
              <Badge variant='secondary' className='mb-4'>
                Join Our Team
              </Badge>
              <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
                Build Your Career with OCI Tech Solutions
              </h1>
              <p className='text-xl text-muted-foreground leading-relaxed mb-8'>
                At OCI Tech Solutions Limited, our people are our greatest
                strength. We foster an environment of collaboration, continuous
                learning, and innovation where you can shape the future of
                technology.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button size='lg' className='pulse-glow' asChild>
                  <Link href='#openings'>
                    View Open Positions <ArrowRight className='ml-2 h-5 w-5' />
                  </Link>
                </Button>
                <Button variant='outline' size='lg' asChild>
                  <Link href='#culture'>Learn About Our Culture</Link>
                </Button>
              </div>
            </div>
            <div data-aos='fade-left'>
              <div className='relative h-96 rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/professional-team-meeting-technology-office.png'
                  alt='OCI Tech Solutions team'
                  width={600}
                  height={400}
                  className='object-cover'
                />
              </div>
            </div>
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

      {/* Values Section */}
      <section id='culture' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Our Values
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              We believe in creating an environment where innovation thrives and
              every team member can reach their full potential.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className='mx-auto p-4 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors w-fit'>
                    <value.icon className='h-8 w-8 text-secondary' />
                  </div>
                  <CardTitle className='text-xl'>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base'>
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Why Work With Us
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              We offer comprehensive benefits and opportunities that support
              your professional growth and personal well-being.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className='flex items-center space-x-4'>
                    <div className='p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors'>
                      <benefit.icon className='h-6 w-6 text-secondary' />
                    </div>
                    <CardTitle className='text-lg'>{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base'>
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id='openings' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Current Openings
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Join our team and work on cutting-edge projects that make a real
              impact across industries.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className='flex items-start justify-between'>
                    <div>
                      <CardTitle className='text-xl mb-2'>
                        {job.title}
                      </CardTitle>
                      <Badge variant='secondary' className='mb-2'>
                        {job.department}
                      </Badge>
                    </div>
                    <Briefcase className='h-6 w-6 text-secondary' />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base mb-4'>
                    {job.description}
                  </CardDescription>
                  <div className='space-y-2 mb-6'>
                    <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                      <MapPin className='h-4 w-4' />
                      <span>{job.location}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                      <Clock className='h-4 w-4' />
                      <span>
                        {job.type} • {job.experience}
                      </span>
                    </div>
                  </div>
                  <Button className='w-full' asChild>
                    <Link href='/contact'>
                      Apply Now <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
            Don't See the Right Role?
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            We're always looking for talented individuals to join our team. Send
            us your resume and let's discuss how you can contribute to our
            mission.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              variant='outline'
              className='bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90'
              asChild
            >
              <Link href='/contact'>
                Send Your Resume <ArrowRight className='ml-2 h-5 w-5' />
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

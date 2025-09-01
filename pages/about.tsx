'use client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Award, Globe, Heart, Lightbulb, Target, Users } from 'lucide-react';
import { useEffect } from 'react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable results.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'We conduct business with the highest ethical standards, building trust through transparency and accountability.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We believe in the power of partnership, working closely with clients to achieve shared success.',
  },
];

const achievements = [
  {
    icon: Award,
    title: 'Healthcare IT Excellence',
    description:
      'Outstanding contributions to healthcare IT modernization across Nigeria',
  },
  {
    icon: Globe,
    title: 'Cloud Leadership',
    description:
      'Recognition for leadership in cloud and infrastructure transformation',
  },
  {
    icon: Users,
    title: 'Trusted IT Partner',
    description:
      'Acknowledged as a trusted IT staffing partner across multiple industries',
  },
];

export default function AboutPage() {
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
      <section className='py-20 bg-gradient-to-br from-background via-muted/50 to-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <Badge variant='secondary' className='mb-4'>
              Since 1997
            </Badge>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
              About OCI Tech Solutions
            </h1>
            <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              For over 25 years, we've been at the forefront of delivering
              transformative IT services and solutions to clients worldwide. Our
              journey began with a simple mission: empower businesses with
              technology that drives measurable growth and sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div data-aos='fade-right'>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Our Story
              </h2>
              <div className='space-y-6 text-muted-foreground'>
                <p className='text-lg leading-relaxed'>
                  Founded in 1997, OCI Tech Solutions Limited has established
                  itself as a trusted partner for organizations seeking
                  innovative, scalable, and secure technology solutions. What
                  started as a vision to bridge the technology gap for
                  businesses has evolved into a comprehensive IT services
                  powerhouse.
                </p>
                <p className='text-lg leading-relaxed'>
                  Our expertise spans across cloud & infrastructure, consulting
                  & engineering, IT staffing, security, and industry-specific
                  digital transformation. We combine onshore and offshore
                  capabilities to ensure flexibility, cost-effectiveness, and
                  round-the-clock support for our clients.
                </p>
                <p className='text-lg leading-relaxed'>
                  Today, we serve clients across healthcare, finance,
                  manufacturing, energy, and many other industries, helping them
                  navigate the complexities of digital transformation while
                  maintaining operational excellence.
                </p>
              </div>
            </div>
            <div data-aos='fade-left'>
              <img
                src='/images/professional-team-meeting-technology-office.png'
                alt='OCI Tech Team'
                className='rounded-lg shadow-xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className='py-20 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Leadership Team
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Meet the experienced leaders driving innovation and excellence at
              OCI Tech Solutions.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card
              className='text-center group hover:shadow-xl transition-all duration-300'
              data-aos='fade-up'
            >
              <CardContent className='p-6'>
                <img
                  src='/images/IMG-20250831-WA0002.jpg'
                  alt='CEO'
                  className='w-32 h-32 rounded-full mx-auto mb-4 object-cover hover:scale-105 transition-transform duration-300'
                />
                <h3 className='text-xl font-semibold mb-2'>
                  Chief Executive Officer
                </h3>
                <p className='text-muted-foreground mb-3'>Christopher Smith</p>
                <p className='text-muted-foreground mb-3'>
                  Leading strategic vision and growth
                </p>
                <Badge variant='secondary'>25+ Years Experience</Badge>
              </CardContent>
            </Card>

            <Card
              className='text-center group hover:shadow-xl transition-all duration-300'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <CardContent className='p-6'>
                <img
                  src='/images/IMG-20250831-WA0003.jpg'
                  alt='COO'
                  className='w-32 h-32 rounded-full mx-auto mb-4 object-cover hover:scale-105 transition-transform duration-300'
                />
                <h3 className='text-xl font-semibold mb-2'>
                  Chief Operating Officer
                </h3>
                <p className='text-muted-foreground mb-3'>Ajayi Odukoya</p>
                <p className='text-muted-foreground mb-3'>
                  Ensuring operational excellence and delivery
                </p>
                <Badge variant='secondary'>18+ Years Experience</Badge>
              </CardContent>
            </Card>

            <Card
              className='text-center group hover:shadow-xl transition-all duration-300'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <CardContent className='p-6'>
                <img
                  src='/images/IMG-20250831-WA0001.jpg'
                  alt='CTO'
                  className='w-32 h-32 rounded-full mx-auto mb-4 object-cover hover:scale-105 transition-transform duration-300'
                />
                <h3 className='text-xl font-semibold mb-2'>
                  Chief Technology Officer
                </h3>
                <p className='text-muted-foreground mb-3'>Olumide Adebayo</p>
                <p className='text-muted-foreground mb-3'>
                  Driving technical innovation and excellence
                </p>
                <Badge variant='secondary'>20+ Years Experience</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Our Core Values
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              These principles guide everything we do and shape our
              relationships with clients, partners, and team members.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='group hover:shadow-xl transition-all duration-300'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className='flex items-center space-x-4'>
                    <div className='p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors'>
                      <value.icon className='h-8 w-8 text-secondary' />
                    </div>
                    <CardTitle className='text-xl'>{value.title}</CardTitle>
                  </div>
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

      {/* Awards Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Awards & Recognition
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Our commitment to excellence has been recognized by industry
              leaders and clients alike.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className='text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className='mx-auto p-4 bg-secondary/10 rounded-full w-fit group-hover:bg-secondary/20 transition-colors'>
                    <achievement.icon className='h-12 w-12 text-secondary' />
                  </div>
                  <CardTitle className='text-xl'>{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base'>
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className='py-20 bg-secondary text-secondary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Environmental, Social & Governance
            </h2>
            <p className='text-xl opacity-90 max-w-4xl mx-auto'>
              As a company that has grown with our clients for over two decades,
              we understand our responsibility to the communities we serve and
              the environment we share.
            </p>
          </div>

          <div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
            data-aos='fade-up'
          >
            <div className='text-center'>
              <div className='p-4 bg-secondary-foreground/10 rounded-full w-fit mx-auto mb-4'>
                <Globe className='h-12 w-12' />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Environmental</h3>
              <p className='opacity-90'>
                Reducing carbon footprint through energy-efficient data centers
                and green IT practices.
              </p>
            </div>
            <div className='text-center'>
              <div className='p-4 bg-secondary-foreground/10 rounded-full w-fit mx-auto mb-4'>
                <Users className='h-12 w-12' />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Social</h3>
              <p className='opacity-90'>
                Supporting diversity, inclusion, and community initiatives
                through training programs and outreach.
              </p>
            </div>
            <div className='text-center'>
              <div className='p-4 bg-secondary-foreground/10 rounded-full w-fit mx-auto mb-4'>
                <Award className='h-12 w-12' />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Governance</h3>
              <p className='opacity-90'>
                Maintaining transparency, ethical business practices, and
                compliance with international standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

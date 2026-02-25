'use client';

import type React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    // title: 'Email Us',
    details: [
      {
        label: 'General Inquiries',
        value: 'info@ocitech.tech',
        link: 'mailto:info@ocitech.tech',
      },
      {
        label: 'Sales & Solutions',
        value: 'sales@ocitech.tech',
        link: 'mailto:sales@ocitech.tech',
      },
      {
        label: 'HR & Employment',
        value: 'hr@ocitech.tech',
        link: 'mailto:hr@ocitech.tech',
      },
      {
        label: 'Customer Support',
        value: 'support@ocitech.tech',
        link: 'mailto:support@ocitech.tech',
      },
    ],
  },
  {
    icon: Phone,
    // title: 'Call Us',
    details: [
      {
        label: 'Customer Support',
        value: '+2349016101268',
        link: 'tel:+2349016101268',
      },
      {
        label: 'HR Department',
        value: '+2348035891932',
        link: 'tel:+2348035891932',
      },
    ],
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: [
      {
        label: 'Corporate Office (USA)',
        value: '1217 Gable Breeze Drive, Katy, Texas 77493',
        link: undefined,
      },
      {
        label: 'Corporate Office Phone',
        value: 'Tel: 1 (832)-361-6901',
        link: 'tel:18323616901',
      },
      {
        label: 'Head Office',
        value:
          'Block 2, Road 2, Diamond Estate, Lasu-Igando Expressway, Isheri, Lagos State, Nigeria',
        link: undefined,
      },
      {
        label: 'Branch Office',
        value:
          'Plot 9, Nse Iwok Street, Olugbode Lafenwa-Otta, Ogun State, Nigeria',
        link: undefined,
      },
      {
        label: 'Business Hours',
        value: 'Mon - Fri: 8:00 AM - 6:00 PM',
        link: undefined,
      },
    ],
  },
];

const inquiryTypes = [
  'Sales & Solutions',
  'IT Staffing',
  'Technical Support',
  'Partnership Opportunities',
  'General Inquiry',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: '',
          message: '',
        });

        // Reset success state after 3s
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-background via-muted/50 to-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos='fade-up'>
            <Badge variant='secondary' className='mb-4'>
              Get In Touch
            </Badge>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
              Contact Us
            </h1>
            <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              Ready to transform your business with our IT solutions? We'd love
              to hear from you. Whether you're a client, partner, or candidate,
              we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className='text-center group hover:shadow-xl transition-all duration-300'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className='mx-auto p-4 bg-secondary/10 rounded-full w-fit group-hover:bg-secondary/20 transition-colors'>
                    <info.icon className='h-8 w-8 text-secondary' />
                  </div>
                  <CardTitle className='text-xl'>{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-3'>
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        <p className='text-sm text-muted-foreground'>
                          {detail.label}
                        </p>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            className='font-medium text-sm hover:text-primary transition-colors'
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className='font-medium text-sm'>{detail.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className='py-20 bg-muted/30'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Send Us a Message
            </h2>
            <p className='text-xl text-muted-foreground'>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card data-aos='fade-up'>
            <CardContent className='p-8'>
              {isSubmitted ? (
                <div className='text-center py-12'>
                  <div className='mx-auto p-4 bg-green-100 rounded-full w-fit mb-4'>
                    <CheckCircle className='h-12 w-12 text-green-600' />
                  </div>
                  <h3 className='text-2xl font-bold text-foreground mb-2'>
                    Message Sent!
                  </h3>
                  <p className='text-muted-foreground'>
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-foreground mb-2'
                      >
                        Full Name *
                      </label>
                      <Input
                        id='name'
                        name='name'
                        type='text'
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter your full name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-foreground mb-2'
                      >
                        Email Address *
                      </label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter your email address'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='company'
                        className='block text-sm font-medium text-foreground mb-2'
                      >
                        Company Name
                      </label>
                      <Input
                        id='company'
                        name='company'
                        type='text'
                        value={formData.company}
                        onChange={handleChange}
                        placeholder='Enter your company name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='inquiryType'
                        className='block text-sm font-medium text-foreground mb-2'
                      >
                        Inquiry Type *
                      </label>
                      <select
                        id='inquiryType'
                        name='inquiryType'
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring'
                      >
                        <option value=''>Select inquiry type</option>
                        {inquiryTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-foreground mb-2'
                    >
                      Message *
                    </label>
                    <Textarea
                      id='message'
                      name='message'
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Tell us about your project or inquiry...'
                    />
                  </div>

                  <Button
                    type='submit'
                    size='lg'
                    className='w-full pulse-glow'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2'></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send className='ml-2 h-5 w-5' />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12' data-aos='fade-up'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Our Locations
            </h2>
            <p className='text-xl text-muted-foreground'>
              Visit our offices in Lagos and Ogun State, Nigeria
            </p>
          </div>

          <div
            className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
            data-aos='fade-up'
          >
            <div>
              <img
                src='/images/modern-office-building-lagos.png'
                alt='OCI Tech Office Building'
                className='rounded-lg shadow-xl'
              />
            </div>
            <div>
              <div className='space-y-6'>
                {/* US Corporate Office */}
                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-secondary/10 rounded-lg'>
                    <MapPin className='h-6 w-6 text-secondary' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-foreground mb-2'>
                      Corporate Office (USA)
                    </h3>
                    <p className='text-muted-foreground'>
                      1217 Gable Breeze Drive
                    </p>
                    <p className='text-muted-foreground'>Katy, Texas 77493</p>
                    <p className='text-muted-foreground'>
                      Tel: 1 (832)-361-6901
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-secondary/10 rounded-lg'>
                    <MapPin className='h-6 w-6 text-secondary' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-foreground mb-2'>
                      Head Office
                    </h3>
                    <p className='text-muted-foreground'>
                      Block 2, Road 2, Diamond Estate
                    </p>
                    <p className='text-muted-foreground'>
                      Lasu-Igando Expressway, Isheri
                    </p>
                    <p className='text-muted-foreground'>
                      Lagos State, Nigeria
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-secondary/10 rounded-lg'>
                    <MapPin className='h-6 w-6 text-secondary' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-foreground mb-2'>
                      Branch Office
                    </h3>
                    <p className='text-muted-foreground'>
                      Plot 9, Nse Iwok Street
                    </p>
                    <p className='text-muted-foreground'>
                      Olugbode Lafenwa-Otta
                    </p>
                    <p className='text-muted-foreground'>Ogun State, Nigeria</p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-secondary/10 rounded-lg'>
                    <Phone className='h-6 w-6 text-secondary' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-foreground mb-2'>
                      Business Hours
                    </h3>
                    <p className='text-muted-foreground'>
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className='text-muted-foreground'>
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                    <p className='text-muted-foreground'>Sunday: Closed</p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-secondary/10 rounded-lg'>
                    <Mail className='h-6 w-6 text-secondary' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-foreground mb-2'>
                      Quick Contact
                    </h3>
                    <p className='text-muted-foreground'>
                      <a
                        href='mailto:info@ocitech.tech'
                        className='hover:text-foreground transition-colors'
                      >
                        info@ocitech.tech
                      </a>
                    </p>
                    <p className='text-muted-foreground'>
                      Customer Support:{' '}
                      <a
                        href='tel:+2349016101268'
                        className='hover:text-foreground transition-colors'
                      >
                        +2349016101268
                      </a>
                    </p>
                    <p className='text-muted-foreground'>
                      HR:{' '}
                      <a
                        href='tel:+2348035891932'
                        className='hover:text-foreground transition-colors'
                      >
                        +2348035891932
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

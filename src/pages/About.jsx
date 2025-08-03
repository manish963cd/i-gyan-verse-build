import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaGraduationCap, FaUsers, FaRocket, FaHeart, FaGlobe, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We believe in pushing boundaries and creating cutting-edge learning experiences that prepare students for the future.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Our team is passionate about education and dedicated to helping every student achieve their full potential.'
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: 'We foster a supportive community where students, mentors, and companies collaborate and grow together.'
    },
    {
      icon: FaGlobe,
      title: 'Accessibility',
      description: 'Quality education should be accessible to everyone, regardless of background or location.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students Trained' },
    { number: '500+', label: 'Expert Mentors' },
    { number: '200+', label: 'Partner Companies' },
    { number: '95%', label: 'Job Placement Rate' }
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      description: 'Former tech executive with 15+ years in Silicon Valley, passionate about democratizing tech education.',
      image: '👩‍💼'
    },
    {
      name: 'Arjun Mehta',
      role: 'Head of Curriculum',
      description: 'Ex-Google engineer who designed curricula that have trained thousands of developers.',
      image: '👨‍💻'
    },
    {
      name: 'Ravi Kumar',
      role: 'Head of Mentorship',
      description: 'Industry veteran who has mentored over 1000 professionals across top tech companies.',
      image: '👨‍🏫'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Transforming Lives Through Technology Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're on a mission to bridge the gap between traditional education and industry demands, 
            creating pathways for students to build successful careers in technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg">
              <Link to="/signup">Join Our Community</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To create an ecosystem where passionate students can learn cutting-edge technologies, 
                connect with industry experts, and land their dream jobs in tech companies.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that with the right guidance, practical projects, and industry connections, 
                anyone can build a successful career in technology.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <FaGraduationCap className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Learn</p>
                </div>
                <div className="text-center">
                  <FaUsers className="h-12 w-12 text-secondary mx-auto mb-2" />
                  <p className="font-semibold">Connect</p>
                </div>
                <div className="text-center">
                  <FaRocket className="h-12 w-12 text-accent mx-auto mb-2" />
                  <p className="font-semibold">Launch</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Started in 2019</h3>
                <p className="text-muted-foreground">
                  Founded by a group of tech industry veterans who saw the need for practical, 
                  industry-aligned education that goes beyond traditional classroom learning.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have already started their journey to success.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/learn">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
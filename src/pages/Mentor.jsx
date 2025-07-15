import React, { useState } from 'react';
import {
  FaGraduationCap,
  FaCode,
  FaChartLine,
  FaDesktop,
  FaUsers,
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaVideo,
  FaComment,
  FaHeart,
  FaArrowLeft,
  FaUserTie,
  FaAward,
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Mentor = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('find'); // 'find' or 'apply'

  const categories = [
    { name: 'All', count: 128, emoji: '🎯' },
    { name: 'Technology', count: 45, emoji: '💻' },
    { name: 'Business', count: 32, emoji: '💼' },
    { name: 'Design', count: 28, emoji: '🎨' },
    { name: 'Marketing', count: 23, emoji: '📈' }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      title: 'Senior Software Engineer at Google',
      avatar: '👩‍💻',
      expertise: ['React', 'Node.js', 'System Design', 'Career Guidance'],
      experience: '8 years',
      students: 245,
      rating: 4.9,
      reviews: 89,
      hourlyRate: '₹1,500',
      bio: 'Passionate about mentoring the next generation of developers. Specialized in full-stack development and system architecture.',
      achievements: ['Google Developer Expert', 'Tech Conference Speaker', 'Open Source Contributor'],
      languages: ['English', 'Hindi'],
      responseTime: '< 2 hours',
      availability: 'Weekdays 6-9 PM',
      featured: true,
      verified: true
    },
    {
      id: 2,
      name: 'Rahul Patel',
      title: 'Product Manager at Microsoft',
      avatar: '👨‍💼',
      expertise: ['Product Strategy', 'User Research', 'Data Analysis', 'Leadership'],
      experience: '10 years',
      students: 156,
      rating: 4.8,
      reviews: 67,
      hourlyRate: '₹2,000',
      bio: 'Helping aspiring product managers navigate their career journey. Former startup founder with enterprise experience.',
      achievements: ['PMI Certified', 'Startup Exit', '50+ Product Launches'],
      languages: ['English', 'Gujarati'],
      responseTime: '< 4 hours',
      availability: 'Weekends',
      featured: true,
      verified: true
    },
    {
      id: 3,
      name: 'Ananya Gupta',
      title: 'Data Science Lead at Flipkart',
      avatar: '👩‍🔬',
      expertise: ['Machine Learning', 'Python', 'Statistics', 'Research'],
      experience: '6 years',
      students: 189,
      rating: 4.9,
      reviews: 78,
      hourlyRate: '₹1,800',
      bio: 'Data science enthusiast with a passion for solving real-world problems using AI and machine learning.',
      achievements: ['PhD in Computer Science', 'Research Publications', 'Kaggle Master'],
      languages: ['English', 'Hindi'],
      responseTime: '< 3 hours',
      availability: 'Flexible',
      featured: false,
      verified: true
    },
    {
      id: 4,
      name: 'Arjun Singh',
      title: 'UX Design Director at Zomato',
      avatar: '👨‍🎨',
      expertise: ['UI/UX Design', 'Design Thinking', 'Prototyping', 'User Research'],
      experience: '7 years',
      students: 134,
      rating: 4.7,
      reviews: 56,
      hourlyRate: '₹1,600',
      bio: 'Creative problem solver with experience in designing user-centric products at scale.',
      achievements: ['Design Award Winner', 'Design System Creator', 'Workshop Facilitator'],
      languages: ['English', 'Punjabi'],
      responseTime: '< 6 hours',
      availability: 'Evenings',
      featured: false,
      verified: true
    }
  ];

  const mentorshipPrograms = [
    {
      title: '1-on-1 Career Guidance',
      description: 'Personalized career coaching sessions',
      duration: '1 hour',
      price: '₹1,500',
      features: ['Resume Review', 'Interview Prep', 'Career Roadmap', 'Goal Setting']
    },
    {
      title: 'Project Mentorship',
      description: 'Complete project guidance from ideation to deployment',
      duration: '4 weeks',
      price: '₹8,000',
      features: ['Project Planning', 'Code Reviews', 'Best Practices', 'Deployment Help']
    },
    {
      title: 'Skill Development',
      description: 'Structured learning path for specific skills',
      duration: '8 weeks',
      price: '₹12,000',
      features: ['Learning Plan', 'Practice Projects', 'Progress Tracking', 'Certification']
    }
  ];

  const filteredMentors = mentors.filter(mentor => 
    selectedCategory === 'All' || mentor.expertise.some(skill => 
      skill.toLowerCase().includes(selectedCategory.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors">
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient">I-GYAN</div>
            <div className="text-sm text-muted-foreground">👨‍🏫 Mentorship Hub</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Find Your Perfect Mentor 👨‍🏫
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Learn from industry experts and accelerate your career growth
            </p>
            
            {/* Toggle Buttons */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex">
                <button
                  onClick={() => setViewMode('find')}
                  className={`px-6 py-3 rounded-xl transition-all ${
                    viewMode === 'find' ? 'bg-white text-primary font-semibold' : 'text-white'
                  }`}
                >
                  Find a Mentor
                </button>
                <button
                  onClick={() => setViewMode('apply')}
                  className={`px-6 py-3 rounded-xl transition-all ${
                    viewMode === 'apply' ? 'bg-white text-primary font-semibold' : 'text-white'
                  }`}
                >
                  Become a Mentor
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-glass">
                Browse All Mentors
              </button>
              <button className="btn-glass">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {viewMode === 'find' ? (
        <>
          {/* Categories */}
          <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Find Mentors by Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-primary text-primary-foreground shadow-soft'
                        : 'bg-card border border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="mr-2">{category.emoji}</span>
                    {category.name}
                    <span className="ml-2 text-xs opacity-70">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Mentors */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
                Featured Mentors ⭐
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {filteredMentors.filter(m => m.featured).map((mentor) => (
                  <div key={mentor.id} className="card-glow group">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="text-4xl group-hover:scale-110 transition-transform">
                          {mentor.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {mentor.name}
                            </h3>
                            {mentor.verified && (
                              <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                                <FaAward className="mr-1" />
                                Verified
                              </div>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm mb-2">{mentor.title}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <FaStar className="text-yellow-500" />
                              <span className="font-semibold">{mentor.rating}</span>
                              <span className="text-muted-foreground">({mentor.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaUsers />
                              <span>{mentor.students} students</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{mentor.hourlyRate}</div>
                          <div className="text-xs text-muted-foreground">per hour</div>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-muted-foreground mb-4 text-sm">{mentor.bio}</p>

                      {/* Expertise */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {mentor.achievements.map((achievement, index) => (
                            <span key={index} className="px-2 py-1 bg-success/10 text-success rounded-full text-xs">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Info Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <div className="text-muted-foreground">Experience</div>
                          <div className="font-semibold">{mentor.experience}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Response Time</div>
                          <div className="font-semibold">{mentor.responseTime}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Languages</div>
                          <div className="font-semibold">{mentor.languages.join(', ')}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Availability</div>
                          <div className="font-semibold">{mentor.availability}</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary-glow transition-colors">
                          Book Session
                        </button>
                        <button className="px-4 py-3 border border-border rounded-xl hover:border-primary transition-colors">
                          <FaComment />
                        </button>
                        <button className="px-4 py-3 border border-border rounded-xl hover:border-primary transition-colors">
                          <FaHeart />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* All Mentors */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
                  All Mentors ({filteredMentors.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMentors.filter(m => !m.featured).map((mentor) => (
                    <div key={mentor.id} className="card-glow group">
                      <div className="p-6">
                        {/* Header */}
                        <div className="text-center mb-4">
                          <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                            {mentor.avatar}
                          </div>
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                            {mentor.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">{mentor.title}</p>
                        </div>

                        {/* Rating & Students */}
                        <div className="flex items-center justify-between mb-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <FaStar className="text-yellow-500" />
                            <span className="font-semibold">{mentor.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaUsers />
                            <span>{mentor.students} students</span>
                          </div>
                          <div className="font-bold text-primary">{mentor.hourlyRate}/hr</div>
                        </div>

                        {/* Expertise */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {mentor.expertise.slice(0, 3).map((skill, index) => (
                              <span key={index} className="px-2 py-1 bg-muted text-xs rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Quick Info */}
                        <div className="text-xs text-muted-foreground mb-4">
                          <div>{mentor.experience} experience</div>
                          <div>Responds in {mentor.responseTime}</div>
                        </div>

                        {/* CTA */}
                        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary-glow transition-colors">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mentorship Programs */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gradient">
                  Mentorship Programs 🎯
                </h2>
                <p className="text-xl text-muted-foreground">
                  Choose the program that fits your learning goals
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {mentorshipPrograms.map((program, index) => (
                  <div key={index} className="card-glow text-center">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="text-3xl font-bold text-primary mb-2">{program.price}</div>
                      <div className="text-sm text-muted-foreground mb-6">{program.duration}</div>
                      <ul className="space-y-2 mb-6">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="text-sm flex items-center">
                            <span className="text-success mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary-glow transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Become a Mentor Section */
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-8 text-gradient">
                  Become a Mentor 🌟
                </h2>
                <p className="text-xl text-muted-foreground">
                  Share your expertise and help the next generation of professionals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Why Mentor with I-GYAN?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary text-xl">💰</div>
                      <div>
                        <h4 className="font-semibold">Earn Extra Income</h4>
                        <p className="text-muted-foreground text-sm">Set your own rates and work flexible hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-primary text-xl">🚀</div>
                      <div>
                        <h4 className="font-semibold">Give Back to Community</h4>
                        <p className="text-muted-foreground text-sm">Help shape the future of technology and business</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-primary text-xl">📈</div>
                      <div>
                        <h4 className="font-semibold">Build Your Brand</h4>
                        <p className="text-muted-foreground text-sm">Establish yourself as a thought leader in your field</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-primary text-xl">🤝</div>
                      <div>
                        <h4 className="font-semibold">Network & Learn</h4>
                        <p className="text-muted-foreground text-sm">Connect with peers and stay updated with trends</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-glow">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Application Form</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Current Role</label>
                        <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Years of Experience</label>
                        <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>Select Experience</option>
                          <option>3-5 years</option>
                          <option>5-8 years</option>
                          <option>8+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Expertise Areas</label>
                        <textarea className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" rows="3" placeholder="List your main areas of expertise..."></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">LinkedIn Profile</label>
                        <input type="url" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-glow transition-colors">
                        Submit Application
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="card-gradient text-center p-8">
                <h3 className="text-2xl font-bold mb-6">Mentor Requirements</h3>
                <div className="grid md:grid-cols-4 gap-6 text-sm">
                  <div>
                    <div className="text-3xl mb-2">🎓</div>
                    <div className="font-semibold">3+ Years Experience</div>
                    <div className="text-muted-foreground">In your field of expertise</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="font-semibold">Proven Track Record</div>
                    <div className="text-muted-foreground">Successful projects or achievements</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">💬</div>
                    <div className="font-semibold">Communication Skills</div>
                    <div className="text-muted-foreground">Ability to teach and guide</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">⏰</div>
                    <div className="font-semibold">Time Commitment</div>
                    <div className="text-muted-foreground">Minimum 5 hours per week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Mentor;
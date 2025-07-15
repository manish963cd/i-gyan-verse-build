import React from 'react';
import {
  FaCode,
  FaChartLine,
  FaRobot,
  FaComments,
  FaShieldAlt,
  FaHeart,
  FaMagic,
  FaUserTie,
  FaClock,
  FaUsers,
  FaStar,
  FaPlay,
  FaArrowLeft
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Learn = () => {
  const learningPaths = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Master modern web development with React, Node.js, and databases',
      emoji: '🚀',
      icon: FaCode,
      difficulty: 'Intermediate',
      duration: '6 months',
      students: '2,450',
      rating: 4.8,
      tags: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 2,
      title: 'Data Science & AI',
      description: 'Learn Python, machine learning, and data visualization',
      emoji: '🤖',
      icon: FaRobot,
      difficulty: 'Advanced',
      duration: '8 months',
      students: '1,890',
      rating: 4.9,
      tags: ['Python', 'TensorFlow', 'Pandas', 'ML'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Master SEO, social media, and performance marketing',
      emoji: '📱',
      icon: FaChartLine,
      difficulty: 'Beginner',
      duration: '4 months',
      students: '3,120',
      rating: 4.7,
      tags: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      title: 'Business & Finance',
      description: 'Learn financial planning, investment, and business strategy',
      emoji: '💰',
      icon: FaChartLine,
      difficulty: 'Intermediate',
      duration: '5 months',
      students: '1,670',
      rating: 4.6,
      tags: ['Finance', 'Investment', 'Business Plan', 'Excel'],
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Communication Skills',
      description: 'Develop presentation, writing, and interpersonal skills',
      emoji: '💬',
      icon: FaComments,
      difficulty: 'Beginner',
      duration: '3 months',
      students: '2,890',
      rating: 4.8,
      tags: ['Public Speaking', 'Writing', 'Leadership', 'Soft Skills'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 6,
      title: 'Freelancing Mastery',
      description: 'Build a successful freelancing career and personal brand',
      emoji: '💼',
      icon: FaUserTie,
      difficulty: 'Intermediate',
      duration: '4 months',
      students: '2,340',
      rating: 4.7,
      tags: ['Freelancing', 'Personal Brand', 'Client Management', 'Pricing'],
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const categories = [
    { name: 'Technology', count: 45, emoji: '💻' },
    { name: 'Business', count: 32, emoji: '📊' },
    { name: 'Design', count: 28, emoji: '🎨' },
    { name: 'Communication', count: 24, emoji: '💬' },
    { name: 'Finance', count: 19, emoji: '💰' },
    { name: 'Marketing', count: 35, emoji: '📈' }
  ];

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
            <div className="text-sm text-muted-foreground">🧠 Learning Hub</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Start Your Learning Journey 📚
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover courses designed to turn your passion into profession
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What do you want to learn today? 🔍"
                  className="w-full px-6 py-4 text-lg rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="absolute right-2 top-2 p-2 rounded-xl bg-primary hover:bg-primary-glow transition-all">
                  <FaPlay className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
            Browse by Category 🎯
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="card-glow text-center p-4 cursor-pointer group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Learning Paths */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Featured Learning Paths 🌟
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive programs designed for career transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPaths.map((path) => (
              <div key={path.id} className="card-glow group cursor-pointer">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {path.emoji}
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-500" />
                      <span className="text-sm font-semibold">{path.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {path.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {path.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <FaClock />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUsers />
                      <span>{path.students}</span>
                    </div>
                    <div className="text-primary font-semibold">
                      {path.difficulty}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-primary text-white py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 group-hover:scale-[1.02]">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-12">
              Learning That Works 📊
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">📚</div>
                <div className="text-3xl font-bold mb-1">200+</div>
                <div className="text-sm opacity-80">Courses Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎓</div>
                <div className="text-3xl font-bold mb-1">12,000+</div>
                <div className="text-sm opacity-80">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💼</div>
                <div className="text-3xl font-bold mb-1">85%</div>
                <div className="text-sm opacity-80">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-3xl font-bold mb-1">4.8/5</div>
                <div className="text-sm opacity-80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient">
              Ready to Start Learning? 🚀
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who are already building their future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Browse All Courses
              </button>
              <Link to="/ai-guide" className="btn-gradient">
                Get AI Guidance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
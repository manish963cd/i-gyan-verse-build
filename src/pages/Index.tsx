import React, { useState } from 'react';
import { 
  FaRocket, 
  FaBookOpen, 
  FaPlay, 
  FaChalkboardTeacher, 
  FaBuilding, 
  FaRobot,
  FaPhone,
  FaGraduationCap,
  FaProjectDiagram,
  FaUsers,
  FaTools,
  FaLightbulb,
  FaHeart,
  FaShare,
  FaChevronRight,
  FaStar,
  FaCode,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaUserTie,
  FaDesktop,
  FaComments,
  FaAward,
  FaEnvelope,
  FaUserGraduate,
  FaTrophy,
  FaCheckCircle,
  FaFire,
  FaGem,
  FaShieldAlt,
  FaInfinity,
  FaMagic,
  FaEye,
  FaThumbsUp,
  FaMoon,
  FaSun
} from 'react-icons/fa';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatInput('');
      }, 2000);
    }
  };

  const skillTracks = [
    { name: 'Finance & Investment', icon: FaChartLine, color: 'from-green-500 to-emerald-600', emoji: '💰' },
    { name: 'Freelancing & Business', icon: FaUserTie, color: 'from-blue-500 to-cyan-600', emoji: '💼' },
    { name: 'Programming & AI', icon: FaCode, color: 'from-purple-500 to-pink-600', emoji: '🚀' },
    { name: 'AI Tools Mastery', icon: FaRobot, color: 'from-orange-500 to-red-600', emoji: '🤖' },
    { name: 'Communication Skills', icon: FaComments, color: 'from-indigo-500 to-purple-600', emoji: '💬' },
    { name: 'Legal & Compliance', icon: FaShieldAlt, color: 'from-gray-500 to-slate-600', emoji: '⚖️' },
    { name: 'Emotional Intelligence', icon: FaHeart, color: 'from-pink-500 to-rose-600', emoji: '❤️' },
    { name: 'Creative Design', icon: FaMagic, color: 'from-yellow-500 to-amber-600', emoji: '🎨' }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "CS Student, Delhi",
      message: "I-GYAN helped me land my dream job at a tech startup! The AI guidance was spot-on! 🚀",
      avatar: "👩‍💻",
      rating: 5
    },
    {
      name: "Rahul Patel",
      role: "Teacher, Gujarat",
      message: "Amazing platform for mentoring students. The project-based learning approach works wonders! 🌟",
      avatar: "👨‍🏫",
      rating: 5
    },
    {
      name: "TechCorp Solutions",
      role: "HR Manager",
      message: "We've found incredible talent through I-GYAN. The skill verification system is impressive! 💯",
      avatar: "🏢",
      rating: 5
    }
  ];

  const ctaButtons = [
    { 
      label: 'Start Learning', 
      icon: FaBookOpen, 
      emoji: '📘', 
      description: 'For students beginning their journey',
      gradient: 'from-blue-500 to-cyan-600'
    },
    { 
      label: 'Share Your Project', 
      icon: FaShare, 
      emoji: '🚀', 
      description: 'Upload, showcase, and build a public profile',
      gradient: 'from-purple-500 to-pink-600'
    },
    { 
      label: 'Become a Mentor', 
      icon: FaChalkboardTeacher, 
      emoji: '👨‍🏫', 
      description: 'Teachers or industry experts can guide learners',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      label: 'Partner with Us', 
      icon: FaBuilding, 
      emoji: '🏢', 
      description: 'Companies post real projects & discover talent',
      gradient: 'from-orange-500 to-red-600'
    },
    { 
      label: 'Talk to Our AI', 
      icon: FaRobot, 
      emoji: '💡', 
      description: 'Launch AI chat to ask questions or get guidance',
      gradient: 'from-indigo-500 to-purple-600'
    },
    { 
      label: 'Contact Us', 
      icon: FaPhone, 
      emoji: '📞', 
      description: 'For queries, feedback, or partnerships',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-background transition-all duration-300`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient">I-GYAN</div>
            <div className="text-sm text-muted-foreground">🧠 AI-Powered Education</div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
            </button>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#learn" className="hover:text-primary transition-colors">Learn</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#mentors" className="hover:text-primary transition-colors">Mentors</a>
              <a href="#companies" className="hover:text-primary transition-colors">Companies</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Welcome to <span className="text-gradient-warm">I-GYAN</span> 🧠
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Your AI-powered companion for learning, growing, and earning in the digital age
            </p>
            
            {/* AI Chat Input */}
            <form onSubmit={handleChatSubmit} className="max-w-2xl mx-auto mb-8 animate-slide-up">
              <div className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Hi! What do you want to learn or become? 🤔"
                  className="w-full px-6 py-4 text-lg rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-2 rounded-xl bg-primary hover:bg-primary-glow transition-all duration-300"
                >
                  <FaRocket className="text-white" />
                </button>
              </div>
              {isTyping && (
                <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="animate-pulse">🤖</div>
                    <div className="text-sm">AI is crafting your personalized roadmap...</div>
                  </div>
                </div>
              )}
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero animate-bounce">
                <FaBookOpen className="mr-2" />
                📘 Start Learning
              </button>
              <button className="btn-glass">
                <FaRocket className="mr-2" />
                🚀 Explore Projects
              </button>
              <button className="btn-glass">
                <FaPlay className="mr-2" />
                🎥 Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is I-GYAN */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              What is I-GYAN? 🤔
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  I-GYAN is revolutionizing education by bridging the gap between learning and earning. 
                  We're aligned with NEP 2020 and the New India vision, creating a future where every 
                  student can access quality education and real opportunities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                    <FaGlobe className="text-primary" />
                    <span className="text-sm">Global Reach</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full">
                    <FaUsers className="text-secondary" />
                    <span className="text-sm">Community Driven</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                    <FaRobot className="text-accent" />
                    <span className="text-sm">AI-Powered</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="card-gradient p-8 text-center animate-float">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Empowering every student to discover their potential, learn future-ready skills, 
                    and build meaningful careers through AI-guided education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              How It Works 🚀
            </h2>
            <p className="text-xl text-muted-foreground">
              Your journey from learning to earning in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-glow text-center group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
              <h3 className="text-xl font-semibold mb-3">Learn via AI</h3>
              <p className="text-muted-foreground">
                Get personalized learning modules powered by AI that adapt to your pace and style
              </p>
            </div>
            
            <div className="card-glow text-center group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🛠️</div>
              <h3 className="text-xl font-semibold mb-3">Build Real Projects</h3>
              <p className="text-muted-foreground">
                Work on real projects from companies and mentors to gain practical experience
              </p>
            </div>
            
            <div className="card-glow text-center group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
              <h3 className="text-xl font-semibold mb-3">Earn & Grow</h3>
              <p className="text-muted-foreground">
                Get verified certificates, build your portfolio, and land your dream job
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Tracks */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Skill Tracks 🎯
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose your path and start your journey to success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillTracks.map((track, index) => (
              <div key={index} className="card-glow group cursor-pointer">
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {track.emoji}
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {track.name}
                  </h3>
                  <div className="flex justify-center">
                    <FaChevronRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Persona CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Build the Future — Together 🌟
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Whether you're a student, teacher, or company, there's a place for you in our community
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ctaButtons.map((button, index) => (
                <div key={index} className="card-glass p-6 group cursor-pointer">
                  <div className="text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {button.emoji}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary-glow transition-colors">
                      {button.label}
                    </h3>
                    <p className="text-sm opacity-80 mb-4">
                      {button.description}
                    </p>
                    <div className="flex justify-center">
                      <button.icon className="text-primary-glow" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DigiSkill Profile Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              DigiSkill Profile Preview 🎖️
            </h2>
            <p className="text-xl text-muted-foreground">
              See how your public profile showcases your achievements
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card-glow p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                  👩‍💻
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Ananya Gupta</h3>
                  <p className="text-muted-foreground">Full Stack Developer • Mumbai</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Skills Completed</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React.js</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">AWS</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Projects Completed</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span>E-commerce Platform</span>
                      <FaCheckCircle className="text-success" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span>AI Chat Application</span>
                      <FaCheckCircle className="text-success" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">AI-Verified Badges</h4>
                  <div className="flex space-x-2">
                    <FaAward className="text-yellow-500 text-2xl" />
                    <FaTrophy className="text-orange-500 text-2xl" />
                    <FaGem className="text-purple-500 text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              What Our Community Says 💬
            </h2>
            <p className="text-xl text-muted-foreground">
              Success stories from students, teachers, and companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-glow group">
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.message}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Join the Movement 📊
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-pulse-glow">
                <div className="text-4xl mb-2">🎓</div>
                <div className="text-3xl font-bold mb-1">12,000+</div>
                <div className="text-sm opacity-80">Students Learning</div>
              </div>
              <div className="text-center animate-pulse-glow">
                <div className="text-4xl mb-2">🧑‍🏫</div>
                <div className="text-3xl font-bold mb-1">900+</div>
                <div className="text-sm opacity-80">Mentors Active</div>
              </div>
              <div className="text-center animate-pulse-glow">
                <div className="text-4xl mb-2">🏢</div>
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm opacity-80">Companies Engaged</div>
              </div>
              <div className="text-center animate-pulse-glow">
                <div className="text-4xl mb-2">🛠️</div>
                <div className="text-3xl font-bold mb-1">4,500+</div>
                <div className="text-sm opacity-80">Projects Submitted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">I-GYAN</div>
              <p className="text-sm opacity-80">
                Empowering the next generation through AI-powered education and career development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Courses</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Mentors</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Companies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <FaEnvelope className="text-xl hover:text-primary transition-colors cursor-pointer" />
                <FaGlobe className="text-xl hover:text-primary transition-colors cursor-pointer" />
                <FaUsers className="text-xl hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 I-GYAN. Built with ❤️ for the future of education.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-primary text-primary-foreground p-4 rounded-full shadow-glow hover:scale-110 transition-all duration-300 animate-pulse-glow">
          <FaRobot className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Index;

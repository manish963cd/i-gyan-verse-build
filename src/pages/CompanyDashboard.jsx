import React, { useState } from 'react';
import { FaBriefcase, FaUsers, FaEye, FaPlus, FaFilter, FaDownload, FaStar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Active Projects', value: '24', icon: FaBriefcase, color: 'text-blue-500' },
    { label: 'Total Applicants', value: '156', icon: FaUsers, color: 'text-green-500' },
    { label: 'Shortlisted', value: '42', icon: FaStar, color: 'text-yellow-500' },
    { label: 'Hired This Month', value: '8', icon: FaUsers, color: 'text-purple-500' }
  ];

  const activeProjects = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      description: 'Build a React Native app for online shopping',
      applicants: 23,
      budget: '$5000-$8000',
      deadline: '2024-02-15',
      skills: ['React Native', 'JavaScript', 'UI/UX'],
      status: 'Active'
    },
    {
      id: 2,
      title: 'Data Analytics Dashboard',
      description: 'Create an interactive dashboard for business metrics',
      applicants: 18,
      budget: '$3000-$5000',
      deadline: '2024-02-20',
      skills: ['Python', 'Data Science', 'Visualization'],
      status: 'Active'
    },
    {
      id: 3,
      title: 'AI Chatbot Integration',
      description: 'Integrate AI chatbot for customer service',
      applicants: 31,
      budget: '$4000-$7000',
      deadline: '2024-02-25',
      skills: ['AI/ML', 'Python', 'NLP'],
      status: 'Active'
    }
  ];

  const recentApplicants = [
    {
      id: 1,
      name: 'Priya Sharma',
      project: 'E-commerce Mobile App',
      skills: ['React Native', 'JavaScript', 'Firebase'],
      rating: 4.8,
      location: 'Mumbai',
      appliedDays: 2
    },
    {
      id: 2,
      name: 'Rohit Kumar',
      project: 'Data Analytics Dashboard',
      skills: ['Python', 'Pandas', 'React'],
      rating: 4.6,
      location: 'Bangalore',
      appliedDays: 1
    },
    {
      id: 3,
      name: 'Anjali Singh',
      project: 'AI Chatbot Integration',
      skills: ['Machine Learning', 'Python', 'TensorFlow'],
      rating: 4.9,
      location: 'Delhi',
      appliedDays: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      {/* Header */}
      <div className="bg-card border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Company Dashboard 🏢</h1>
            <p className="text-muted-foreground">Manage projects and discover talented students</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button>
              <FaPlus className="h-4 w-4 mr-2" />
              Post New Project
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Projects */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <FaBriefcase className="h-5 w-5 mr-2 text-primary" />
                      Active Projects
                    </CardTitle>
                    <CardDescription>Manage your posted projects</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <FaFilter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.skills.map((skill, idx) => (
                            <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-muted-foreground">
                          <FaUsers className="h-4 w-4 mr-1" />
                          {project.applicants} applicants
                        </span>
                        <span className="flex items-center text-muted-foreground">
                          <FaClock className="h-4 w-4 mr-1" />
                          Due: {project.deadline}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-green-600">{project.budget}</span>
                        <Button size="sm" variant="outline">
                          <FaEye className="h-4 w-4 mr-1" />
                          View Applications
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Applicants */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaUsers className="h-5 w-5 mr-2 text-green-500" />
                  Recent Applicants
                </CardTitle>
                <CardDescription>Latest students who applied to your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplicants.map((applicant) => (
                    <div key={applicant.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold">{applicant.name}</h4>
                            <div className="flex items-center">
                              <FaStar className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">{applicant.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">Applied for: {applicant.project}</p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {applicant.skills.map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <FaMapMarkerAlt className="h-3 w-3 mr-1" />
                            {applicant.location} • Applied {applicant.appliedDays} days ago
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm">View Profile</Button>
                          <Button size="sm" variant="outline">Shortlist</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <FaPlus className="h-4 w-4 mr-2" />
                  Post New Project
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FaUsers className="h-4 w-4 mr-2" />
                  Browse Talent Pool
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FaDownload className="h-4 w-4 mr-2" />
                  Download Reports
                </Button>
              </CardContent>
            </Card>

            {/* Search Talent */}
            <Card>
              <CardHeader>
                <CardTitle>🔍 Find Talent</CardTitle>
                <CardDescription>Search for students with specific skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Search skills (e.g., React, Python)" />
                <Input placeholder="Location (optional)" />
                <Button className="w-full">Search Students</Button>
              </CardContent>
            </Card>

            {/* Hiring Insights */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">📊 Hiring Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Most in-demand skill:</span>
                  <span className="font-medium">React.js</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg. response time:</span>
                  <span className="font-medium">2.3 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Success rate:</span>
                  <span className="font-medium">87%</span>
                </div>
              </CardContent>
            </Card>

            {/* AI Recommendation */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">🤖 AI Recruiter</CardTitle>
                <CardDescription>Get AI-powered candidate recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Get AI Suggestions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
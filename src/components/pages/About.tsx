import React from 'react';
import { 
  Info, 
  Users, 
  Target, 
  Award, 
  Heart,
  Code,
  Shield,
  Globe
} from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security-first principles and enterprise-grade reliability.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools designed for modern teams.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Designed to scale with your business, from startup to enterprise.'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Built by developers, for developers, with modern tech stack.'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '10,000+' },
    { label: 'Projects Completed', value: '50,000+' },
    { label: 'Countries', value: '150+' },
    { label: 'Uptime', value: '99.9%' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="card gradient-bg text-white border-0 mb-4">
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-3 me-3">
              <Info size={32} />
            </div>
            <h2 className="mb-0">About Our Platform</h2>
          </div>
          <p className="mb-0 fs-5 opacity-75">
            We're building the future of team collaboration and productivity. Our platform empowers 
            teams to work smarter, faster, and more efficiently than ever before.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
              <Target size={32} className="text-primary" />
            </div>
            <h3 className="fw-bold mb-3">Our Mission</h3>
            <p className="fs-5 text-muted">
              To democratize access to powerful collaboration tools and help teams around the world 
              achieve their full potential through innovative technology solutions.
            </p>
          </div>

          <div className="row g-4 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <h3 className="text-primary fw-bold mb-1">{stat.value}</h3>
                <small className="text-muted">{stat.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="row g-4 mb-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="col-12 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">{feature.title}</h5>
                      <p className="text-muted mb-0">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Values Section */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <div className="bg-danger bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
              <Heart size={32} className="text-danger" />
            </div>
            <h3 className="fw-bold">Our Values</h3>
          </div>

          <div className="row g-4 text-center">
            <div className="col-12 col-md-4">
              <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                <Award size={32} className="text-success" />
              </div>
              <h5 className="fw-bold mb-2">Excellence</h5>
              <p className="text-muted">
                We strive for excellence in everything we do, from product design to customer service.
              </p>
            </div>

            <div className="col-12 col-md-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                <Users size={32} className="text-primary" />
              </div>
              <h5 className="fw-bold mb-2">Collaboration</h5>
              <p className="text-muted">
                We believe in the power of collaboration and building strong relationships.
              </p>
            </div>

            <div className="col-12 col-md-4">
              <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                <Target size={32} className="text-info" />
              </div>
              <h5 className="fw-bold mb-2">Innovation</h5>
              <p className="text-muted">
                We continuously innovate to stay ahead of the curve and deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="card border-0 shadow-sm" style={{background: 'linear-gradient(135deg, #f8f9ff 0%, #fff0f8 100%)'}}>
        <div className="card-body p-4 text-center">
          <h3 className="fw-bold mb-3">Get in Touch</h3>
          <p className="text-muted mb-4">
            Have questions or feedback? We'd love to hear from you. Reach out to our team anytime.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-primary">
              Contact Support
            </button>
            <button className="btn btn-outline-primary">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
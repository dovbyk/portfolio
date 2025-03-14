
import React from 'react';
import AnimatedText from './AnimatedText';
import { CheckCircle, Code, Server, Github, Linkedin, Download } from 'lucide-react';
import { Button } from './ui/button';

const About: React.FC = () => {
  const skills = [
    'JavaScript/TypeScript', 
    'React.js', 
    'Node.js', 
    'Python',
    'Java', 
    'SQL/NoSQL',
    'AWS Cloud',
    'Docker',
    'Git/GitHub',
    'UI/UX Design'
  ];

  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,55,55,0.05)_0,rgba(0,0,0,1)_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-7/12">
            <div className="inline-block mb-6 px-4 py-1 border border-white/10 rounded-full">
              <span className="text-white/80 text-sm font-medium">ABOUT ME</span>
            </div>
            
            <AnimatedText
              text="Passionate Computer Science Student"
              el="h2"
              className="text-3xl md:text-4xl font-bold mb-6 font-agency"
              animation="slide-up"
            />
            
            <AnimatedText
              el="p"
              text="I'm a dedicated computer science student with a passion for creating innovative solutions using technology. My journey in programming started when I was in high school, and since then I've been constantly learning and improving my skills."
              className="text-white/80 mb-6"
              animation="fade-in"
              delay={200}
            />
            
            <AnimatedText
              el="p"
              text="I focus on web development, machine learning, and software engineering. I believe in building applications that are not only functional but also user-friendly and aesthetically pleasing."
              className="text-white/80 mb-8"
              animation="fade-in"
              delay={400}
            />
            
            <div className="mb-10" style={{ opacity: 0, animation: 'fade-in 0.8s ease-out 0.6s forwards' }}>
              <h3 className="text-xl font-semibold mb-4 font-agency">My Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-blue-400" />
                    <span className="text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12" style={{ opacity: 0, animation: 'fade-in 0.8s ease-out 0.8s forwards' }}>
              <div className="glass-panel p-6">
                <Code size={28} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-agency">Frontend Development</h3>
                <p className="text-white/70">Crafting beautiful, responsive user interfaces with modern technologies.</p>
              </div>
              
              <div className="glass-panel p-6">
                <Server size={28} className="text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-agency">Backend Engineering</h3>
                <p className="text-white/70">Building robust server-side applications and APIs.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="mt-4 flex items-center gap-2 border-white/20 hover:bg-white/10">
                <Download size={16} />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0 flex-shrink-0">
            <div className="relative" style={{ opacity: 0, animation: 'fade-in 0.8s ease-out forwards' }}>
              <div className="aspect-square overflow-hidden rounded-2xl relative border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1000&auto=format&fit=crop" 
                  alt="CS Student Profile" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-white/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/20 rounded-lg"></div>
              
              {/* Social links overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/50 backdrop-blur-sm rounded-lg">
                <div className="flex justify-center gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

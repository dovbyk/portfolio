
import React from 'react';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Study Assistant",
      description: "A machine learning application that helps students organize notes and study materials with AI-generated summaries.",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "Machine Learning", "React"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with secure payment integration, user accounts, and an intuitive shopping experience.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["React.js", "Node.js", "MongoDB"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      title: "Smart Home Dashboard",
      description: "A centralized control system for IoT devices, featuring real-time monitoring and automated routines.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["IoT", "React", "TypeScript"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,55,55,0.05)_0,rgba(0,0,0,1)_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1 border border-white/10 rounded-full">
            <span className="text-white/80 text-sm font-medium">MY WORK</span>
          </div>
          
          <AnimatedText
            text="Featured Projects"
            el="h2"
            className="text-3xl md:text-5xl font-bold mb-6"
            animation="blur-in"
          />
          
          <AnimatedText
            text="Here are some of my recent projects that showcase my skills and experience"
            el="p"
            className="text-white/80 max-w-2xl mx-auto"
            animation="fade-in"
            delay={200}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16" style={{ opacity: 0, animation: 'fade-in 0.8s ease-out 1s forwards' }}>
          <a 
            href="https://github.com/example" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

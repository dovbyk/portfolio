
import React from 'react';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const Projects: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ 
    delay: 100, 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ 
    delay: 300, 
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLDivElement>({ 
    delay: 500, 
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  });

  const projects = [
    {
      title: "DeepScript",
      description: "A Transformer model which takes handwriting sample from user and converts any digital text into a realistic handwriting ",
      image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ["Python", "Machine Learning", "React"],
      demoLink: "deepscript.vercel.app",
      codeLink: "https://github.com/dovbyk/DeepScript",
    },
    {
      title: "PromptToAnimation",
      description: "Visualize any mathematical equations or ML algorithms with beautiful animations and voiceovers just by a single prompt.",
      image: 'https://thumbs.dreamstime.com/b/abstract-connection-dots-technology-background-digital-drawing-black-white-theme-network-concept-abstract-connection-dots-100249947.jpg',
      tags: ["Python", "Manim", "Gemini API"],
      demoLink: "promptanimate.vercel.app",
      codeLink: "https://github.com/dovbyk/manim-video-generator",
    },
    {
      title: "SaveThePac",
      description: "A customized version of the traditional PacMan game. Skip past all the obstacles that come along the way and collect as many points.",
      image: 'https://www.shutterstock.com/shutterstock/photos/1654081297/display_1500/stock-vector-spiral-sound-wave-rhythm-line-dynamic-abstract-vector-background-1654081297.jpg',
      tags: ["Java", "Swing"],
      demoLink: "dovbyk.github.io/pacman.js",
      codeLink: "https://github.com/dovbyk/PacMan",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,55,55,0.05)_0,rgba(0,0,0,1)_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-1000 transform",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}
        >
          <div className="inline-block mb-6 px-4 py-1 border border-white/10 rounded-full">
            <span className="text-white/80 text-sm font-medium">MY WORK</span>
          </div>
          
          <AnimatedText
            text="Featured Projects"
            el="h2"
            className="text-3xl md:text-5xl font-bold mb-6 font-agency"
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
        
        <div 
          ref={gridRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1200 transform",
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
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
        
        <div 
          ref={buttonRef}
          className={cn(
            "text-center mt-16 transition-all duration-1000 transform",
            buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <a 
            href="https://github.com/dovbyk" 
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

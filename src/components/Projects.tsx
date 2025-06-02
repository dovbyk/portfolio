
import React from 'react';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "DeepScript",
      description: "A Transformer model which takes handwriting sample from user and converts any digital text into a realistic handwriting ",
      image: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ["Python", "Machine Learning", "React"],
      demoLink: "deepscript.vercel.app",
      codeLink: "https://github.com/dovbyk/DeepScript",
    },
    {
      title: "PromptToAnimation",
      description: "Visualize any mathematical equations or machine learning algorithms with beautiful animations and voiceovers just by a single prompt",
      image: 'https://e7.pngegg.com/pngimages/9/267/png-clipart-senior-management-business-project-management-project-manager-team-members-text-service.png',
      tags: ["Python", "Manim", "Gemini API"],
      codeLink: "https://github.com/dovbyk/manim-video-generator",
    },
    {
      title: "SaveThePac",
      description: "A customized version of the traditional PacMan game. Skip past all the obstacles that come along the way and collect as many points.",
      image: 'https://png.pngtree.com/background/20230716/original/pngtree-realistic-discord-icon-logo-in-3d-rendering-picture-image_4237831.jpg',
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
        <div className="text-center mb-16">
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

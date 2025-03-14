
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink,
  index,
}) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
      style={{ 
        opacity: 0, 
        transform: 'translateY(20px)',
        animation: `fade-in 0.8s ease-out ${0.2 * index}s forwards`
      }}
    >
      {/* Project Image with Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-30"></div>
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap max-w-[calc(100%-32px)] z-10">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm text-white/90 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-white text-white/90 font-agency">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        
        {/* Links */}
        <div className="flex items-center gap-4">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Hover Effect - Gradient Border */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100" 
        style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6) border-box' }}>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string; // Live demo link
  codeLink?: string; // GitHub repository link
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
  // Function to open the correct Live Demo link in a new tab
  const handleOpenDemo = () => {
    const demoURL = "https://dovbyk.github.io/pacman.js"; //  Set the correct URL here
    const newTab = window.open(demoURL, "_blank", "noopener,noreferrer");
    
  
  };

  return (
    <div 
      className="relative group bg-black-900 p-6 rounded-2xl transition-transform transform-gpu hover:scale-[1.05] shadow-lg hover:shadow-2xl"
      style={{ opacity: 0, animation: `fade-in 0.8s ease-out ${0.2 * index}s forwards` }}
    >
      {/* Image Section with Hover Effect */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-50 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-white/70 mt-2">{description}</p>
        
        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm text-white/90 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons for Links */}
        <div className="flex items-center gap-4 mt-4">
          {title === "SaveThePac" && (
          <button
            onClick={handleOpenDemo} //  Calls the function to open the correct link
            className="px-4 py-2 bg-black-800 hover:bg-gray-700 text-white rounded-md flex items-center gap-2 transition"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </button>
         )}
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black-800 hover:bg-gray-700 text-white rounded-md flex items-center gap-2 transition"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string; // This will now be a video link
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
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div 
      className="relative group bg-gray-900 p-6 rounded-2xl transition-transform transform-gpu hover:scale-[1.05] shadow-lg hover:shadow-2xl"
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
          {demoLink && (
            <button
              onClick={() => setShowVideo(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 rounded-md transition"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </button>
          )}
          
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md flex items-center gap-2 transition"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="relative bg-gray-900 p-4 rounded-lg w-[60%] max-w-3xl">
            <button 
              className="absolute top-2 right-2 text-white hover:text-gray-400"
              onClick={() => setShowVideo(false)}
            >
              <X size={30} />
            </button>
            <video controls className="w-full rounded-lg">
              <source src={demoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string; // Video link
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
  // State for video modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

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
              onClick={() => {
                setCurrentVideo(demoLink);
                setIsVideoModalOpen(true);
              }}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md flex items-center gap-2 transition"
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

      {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="relative w-full max-w-4xl bg-gray-900 rounded-lg">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute -top-10 right-0 text-gray-400 hover:text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
              <video
                src={currentVideo}
                controls
                className="w-full rounded-lg"
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
    </div>
  );
};

export default ProjectCard;

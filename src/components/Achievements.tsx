
import React from 'react';
import { Trophy, Award, Medal, Star } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Dean's List",
      description: "Maintained a GPA in the top 10% of the computer science department for 3 consecutive years.",
      icon: <Trophy className="text-yellow-500" size={36} />,
      year: "2021-2023"
    },
    {
      title: "Hackathon Winner",
      description: "First place in the University Annual Hackathon with an AI-powered educational application.",
      icon: <Award className="text-blue-400" size={36} />,
      year: "2022"
    },
    {
      title: "Research Publication",
      description: "Co-authored a paper on machine learning algorithms published in an international conference.",
      icon: <Medal className="text-purple-400" size={36} />,
      year: "2023"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to several open-source projects with over 50 accepted pull requests.",
      icon: <Star className="text-green-400" size={36} />,
      year: "2022-Present"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,55,55,0.05)_0,rgba(0,0,0,1)_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1 border border-white/10 rounded-full">
            <span className="text-white/80 text-sm font-medium">ACHIEVEMENTS</span>
          </div>
          
          <AnimatedText
            text="Academic & Professional Achievements"
            el="h2"
            className="text-3xl md:text-5xl font-bold mb-6 font-agency"
            animation="blur-in"
          />
          
          <AnimatedText
            text="Recognition and accomplishments throughout my academic and professional journey"
            el="p"
            className="text-white/80 max-w-2xl mx-auto"
            animation="fade-in"
            delay={200}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 flex flex-col md:flex-row items-start md:items-center gap-4"
              style={{ opacity: 0, animation: `fade-in 0.8s ease-out ${0.2 * (index + 1)}s forwards` }}
            >
              <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm">
                {achievement.icon}
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold font-agency">{achievement.title}</h3>
                  <span className="text-white/60 text-sm">{achievement.year}</span>
                </div>
                <p className="text-white/80">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

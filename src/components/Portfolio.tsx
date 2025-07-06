import React, { useState } from 'react';
import { FiEye, FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedSection } from './AnimatedSection';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: t('ecommercePlatform'),
      description: t('ecommerceDesc'),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      links: { github: '#', demo: '#' }
    },
    {
      id: 2,
      title: t('foodDeliveryApp'),
      description: t('foodDeliveryDesc'),
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Google Maps API'],
      links: { github: '#', demo: '#' }
    },
    {
      id: 3,
      title: t('analyticsBoard'),
      description: t('analyticsBoardDesc'),
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ui',
      tags: ['Figma', 'UI/UX', 'Data Visualization'],
      links: { behance: '#', demo: '#' }
    },
    {
      id: 4,
      title: t('educationalPlatform'),
      description: t('educationalDesc'),
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      links: { github: '#', demo: '#' }
    },
    {
      id: 5,
      title: t('fitnessApp'),
      description: t('fitnessDesc'),
      image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'mobile',
      tags: ['Flutter', 'Firebase', 'Health API'],
      links: { github: '#', demo: '#' }
    },
    {
      id: 6,
      title: t('bankingApp'),
      description: t('bankingDesc'),
      image: 'https://images.pexels.com/photos/5583964/pexels-photo-5583964.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ui',
      tags: ['Figma', 'Prototyping', 'UI/UX'],
      links: { behance: '#', demo: '#' }
    }
  ];

  const filters = [
    { key: 'all', label: t('all') },
    { key: 'web', label: t('webDevelopment') },
    { key: 'mobile', label: t('mobileApps') },
    { key: 'ui', label: t('uiDesignCategory') }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400';
      case 'mobile': return 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400';
      case 'ui': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('portfolioTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('portfolioDescription')}
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection animation="slideUp" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="scaleUp" 
              delay={index * 100}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2">
                
                {/* Project Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform duration-300"
                        >
                          <FiEye size={20} />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform duration-300"
                        >
                          <FiGithub size={20} />
                        </a>
                      )}
                      {project.links.behance && (
                        <a
                          href={project.links.behance}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform duration-300"
                        >
                          <SiBehance size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(project.category)}`}>
                      {filters.find(f => f.key === project.category)?.label}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View More Button */}
        <AnimatedSection animation="fadeIn" delay={600}>
          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 font-medium">
              {t('viewMore')}
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
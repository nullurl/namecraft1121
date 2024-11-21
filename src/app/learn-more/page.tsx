import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../../store/languageStore';
import { translations } from '../../utils/translations';
import { Globe2, BookOpen, Type } from 'lucide-react';

export default function LearnMore() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const categories = [
    {
      title: 'Chinese Names',
      description: 'Explore traditional and modern Chinese name generation options',
      icon: <Globe2 className="w-8 h-8 text-purple-600" />,
      to: '/learn-more/chinese'
    },
    {
      title: 'English Names',
      description: 'Discover various English name generation possibilities',
      icon: <Type className="w-8 h-8 text-purple-600" />,
      to: '/learn-more/english'
    },
    {
      title: 'Japanese Names',
      description: 'Browse Japanese name generation features and styles',
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      to: '/learn-more/japanese'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Name Generator Resources
          </h1>
          <p className="text-xl text-gray-600">
            Choose a category to explore our comprehensive name generation options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.to}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-purple-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-gray-600">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
import React from 'react';
import { useLanguageStore } from '../../../../store/languageStore';
import { translations } from '../../../../utils/translations';

const chineseKeywords = [
  'chinese name generator', 'chinese girl name generator', 'chinese name generator fantasy',
  'chinese names generator', 'random chinese name generator', 'chinese name generator male',
  'male chinese name generator', 'chinese male names generator', 'chinese name generator with meaning',
  'chinese town name generator', 'chinese name generator female', 'female chinese names generator',
  'chinese city name generator', 'chinese fantasy name generator', 'chinese restaurant name generator',
  'random name generator chinese', 'chinese last name generator', 'chinese last names generator',
  'chinese name generator from english', 'fantasy chinese name generator', 'generator chinese name',
  'generate chinese name', 'ancient chinese name generator', 'chinese female name generator',
  'chinese generational names', 'chinese name generators'
];

export default function ChineseNameGenerator() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chinese Name Generator Keywords
          </h1>
          <p className="text-xl text-gray-600">
            Explore our comprehensive collection of Chinese name generation options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chineseKeywords.map((keyword, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <h2 className="text-gray-700 hover:text-purple-600 transition-colors">
                {keyword}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
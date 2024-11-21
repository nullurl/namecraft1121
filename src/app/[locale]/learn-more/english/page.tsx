import React from 'react';
import { useLanguageStore } from '../../../../store/languageStore';
import { translations } from '../../../../utils/translations';

const englishKeywords = [
  'english name generator', 'generator english name', 'old english name generator',
  'random english name generator', 'english last name generator', 'english generator name',
  'english names generator', 'female english names generator', 'last name generator english',
  'english random name generator', 'english town name generator', 'random name generator english',
  'name generator english', 'korean name generator from english', 'old english names generator',
  'chinese name generator from english', 'english city name generator', 'english city names generator',
  'english last names generator', 'japanese name generator from english', 'korean english name generator',
  'name generator old english', 'american english name generator', 'generate english name',
  'english footballer name generator'
];

export default function EnglishNameGenerator() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            English Name Generator Keywords
          </h1>
          <p className="text-xl text-gray-600">
            Explore our comprehensive collection of English name generation options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {englishKeywords.map((keyword, index) => (
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
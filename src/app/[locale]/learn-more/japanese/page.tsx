import React from 'react';
import { useLanguageStore } from '../../../../store/languageStore';
import { translations } from '../../../../utils/translations';

const japaneseKeywords = [
  'japanese name generator', 'japanese names generator', 'japanese last name generator',
  'random japanese name generator', 'japanese anime characters name generator',
  'japanese name and surname generator', 'female japanese names generator',
  'name generator japanese', 'female japanese name generator', 'japanese girl name generator',
  'japanese town name generator', 'japanese city name generator', 'japanese name.generator',
  'japanese male name generator', 'japanese name generator female', 'generate japanese name',
  'male japanese name generator', 'japanese female name generator', 'japanese village name generator',
  'japanese family name generator', 'japanese village names generator',
  'japanese name generator with meanings', 'japanese last names generator',
  'japanese names male generator', 'last name generator japanese',
  'female name generator japanese', 'japanese name female generator',
  'name in japanese generator', 'japanese female names generator',
  'random name generator japanese', 'japanese name generator anime',
  'japanese clan name generator', 'japanese fantasy name generator',
  'japanese name generator from english', 'japanese generator name',
  'super japanese name generator', 'japanese random name generator',
  'fantasy japanese name generator', 'japanese male names generator'
];

export default function JapaneseNameGenerator() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Japanese Name Generator Keywords
          </h1>
          <p className="text-xl text-gray-600">
            Explore our comprehensive collection of Japanese name generation options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {japaneseKeywords.map((keyword, index) => (
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
'use client';

import React from 'react';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/utils/translations';

export default function PrivacyPage() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const dataCollectionItems = Array.isArray(t.dataCollectionItems) 
    ? t.dataCollectionItems 
    : ['Name generation preferences', 'Language settings', 'Usage statistics'];

  return (
    <main className="flex-grow bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.privacyPolicyTitle || 'Privacy Policy'}</h1>
          
          <div className="space-y-6 text-gray-600">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacyIntro || 'Our Commitment to Privacy'}</h2>
              <p>{t.privacyIntroText || 'We take your privacy seriously and are committed to protecting your personal information.'}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.dataCollection || 'Data Collection'}</h2>
              <p>{t.dataCollectionText || 'We collect minimal data to provide our service:'}</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                {dataCollectionItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.dataUsage || 'Data Usage'}</h2>
              <p>{t.dataUsageText || 'We use collected data solely to improve our service and user experience.'}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.dataSecurity || 'Data Security'}</h2>
              <p>{t.dataSecurityText || 'We implement industry-standard security measures to protect your data.'}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.cookies || 'Cookies'}</h2>
              <p>{t.cookiesText || 'We use essential cookies to maintain basic website functionality.'}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.contact || 'Contact Information'}</h2>
              <p>{t.contactText || 'For privacy-related inquiries, please contact us at:'}</p>
              <p className="mt-2">Email: joyforjoker43@gmail.com</p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              {t.lastUpdated || 'Last Updated'}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Extracurricular Activities | Kidzee Kasavanahalli',
  description: 'Karate, art, tuition, music, sports, and more. Flexible, hybrid extracurricular activities for children in Kasavanahalli. Open to all, not just preschoolers.',
};

const activities = [
  {
    title: 'Karate Classes',
    icon: '🥋',
    details: [
      'Physical fitness, discipline, self-defense',
      'Certified instructors, regular belt progression',
      'Age 4-12, online/offline, competitions',
    ],
  },
  {
    title: 'Drawing & Art Classes',
    icon: '🎨',
    details: [
      'Fine motor skills, creative thinking, art appreciation',
      'Portfolio development, exhibitions, ages 3-12',
    ],
  },
  {
    title: 'Tuition Classes',
    icon: '📚',
    details: [
      'Personalized attention, exam prep, confidence building',
      'Subjects: Math, English, Science, Social Studies',
      'Age 5-12, small batches, parent feedback',
    ],
  },
  {
    title: 'Coming Soon',
    icon: '✨',
    details: [
      'Music, sports, science labs, theater, coding',
      'Hybrid learning: online, offline, blended',
      'Open to all children in the community',
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">Beyond the Classroom - Nurturing Hidden Talents</h1>
          <p className="text-xl text-gray-700 mb-8">Where Every Child Discovers Their Special Gift</p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((a, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{a.icon}</span>
                  <h2 className="text-2xl font-bold text-purple-700">{a.title}</h2>
                </div>
                <ul className="space-y-2">
                  {a.details.map((d, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8 text-center">Activity Benefits for Overall Development</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-bold text-purple-700 mb-2">Physical</h3>
              <p className="text-gray-600 text-sm">Fitness, coordination, stamina</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-purple-700 mb-2">Cognitive</h3>
              <p className="text-gray-600 text-sm">Focus, memory, problem-solving</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-purple-700 mb-2">Social-Emotional</h3>
              <p className="text-gray-600 text-sm">Teamwork, leadership, confidence</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-bold text-purple-700 mb-2">Character</h3>
              <p className="text-gray-600 text-sm">Discipline, perseverance, respect</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

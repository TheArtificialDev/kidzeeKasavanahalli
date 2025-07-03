const stats = [
  { 
    label: 'Years of Excellence', 
    value: '14+',
    icon: '🏆',
    description: 'Serving Kasavanahalli families'
  },
  { 
    label: 'Children Nurtured', 
    value: '7000+',
    icon: '👶',
    description: 'Happy graduates across batches'
  },
  { 
    label: 'Teacher Experience', 
    value: '10+',
    icon: '👩‍🏫',
    description: 'Years average experience'
  },
  { 
    label: 'Parent Satisfaction', 
    value: '98%',
    icon: '⭐',
    description: 'Would recommend to friends'
  },
  { 
    label: 'Safety Record', 
    value: '100%',
    icon: '🛡️',
    description: 'Zero incidents maintained'
  },
  { 
    label: 'Comprehensive Programs', 
    value: '6',
    icon: '📚',
    description: 'Age-appropriate curricula'
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400">
            Our Impact in Numbers
          </h2>
          <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
            14 years of dedication, thousands of success stories, and countless happy families
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="font-semibold text-lg mb-2">{stat.label}</div>
              <div className="text-sm text-purple-200">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-yellow-400 text-purple-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Become Part of Our Success Story?</h3>
            <p className="text-lg mb-6">Join the families who have trusted us with their children&apos;s early education journey.</p>
            <a
              href="/contact"
              className="inline-block bg-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-purple-800 transition-colors"
            >
              Schedule Your Visit Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

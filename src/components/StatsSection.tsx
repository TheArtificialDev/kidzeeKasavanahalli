import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const stats = [
  { 
    label: 'Years of Excellence', 
    value: '13+ ',
    icon: '🏆',
    description: 'Serving Kasavanahalli families'
  },
  { 
    label: 'Children Nurtured', 
    value: '1400+',
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
    value: '98%',
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
          <ScrollAnimationWrapper animation="elastic">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400">
              Our Impact in Numbers
            </h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fade-blur" delay={1}>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              13 years of dedication, thousands of success stories, and countless happy families
            </p>
          </ScrollAnimationWrapper>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <ScrollAnimationWrapper key={i} animation="float" delay={i + 1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</div>
                <div className="font-semibold text-lg mb-2">{stat.label}</div>
                <div className="text-sm text-purple-200">{stat.description}</div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
        
        <ScrollAnimationWrapper animation="bounce" delay={2}>
          <div className="text-center mt-16">
            <div className="bg-yellow-400 text-purple-800 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Become Part of Our Success Story?</h3>
              <p className="text-lg mb-6">Join the families who have trusted us with their children&apos;s early education journey.</p>
              <a
                href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20school"
                className="inline-block bg-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-purple-800 transition-colors"
              >
                💬 WhatsApp Us Today
              </a>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

interface ProgramCardProps {
  title: string;
  ageRange: string;
  duration: string;
  focus: string;
  keyBenefits: string[];
  icon: string;
}

const ProgramCard = ({ title, ageRange, duration, focus, keyBenefits, icon }: ProgramCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100 hover:shadow-xl hover:border-purple-300 transition-all transform hover:-translate-y-1 h-full">
    <div className="text-center mb-6">
      <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-purple-700 mb-2">{title}</h3>
      <div className="flex justify-center items-center gap-2 text-sm text-purple-600 font-semibold bg-purple-50 rounded-full px-4 py-2">
        <span>👶 {ageRange}</span>
        <span>•</span>
        <span>⏰ {duration}</span>
      </div>
    </div>
    
    <p className="text-gray-700 mb-6 leading-relaxed text-center">{focus}</p>
    
    <div className="space-y-3">
      <h4 className="font-semibold text-purple-700 text-sm uppercase tracking-wide">Key Benefits:</h4>
      <ul className="space-y-2">
        {keyBenefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
            <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div className="mt-6 pt-4 border-t border-purple-100">
      <a 
        href="/programs" 
        className="block text-center bg-purple-50 text-purple-700 font-semibold py-2 px-4 rounded-lg hover:bg-purple-100 transition-colors text-sm"
      >
        Learn More →
      </a>
    </div>
  </div>
);

export default ProgramCard;

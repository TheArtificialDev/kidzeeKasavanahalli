import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-2xl mb-4 text-yellow-400">Kidzee Kasavanahalli</h3>
            <p className="text-purple-200 text-base mb-4 leading-relaxed">
              13+  years of excellence in early childhood education. Nurturing young minds to become future leaders through the proven Péntemind curriculum.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-purple-700 px-3 py-1 rounded-full">✅ 1400+ Children Served</span>
              <span className="bg-purple-700 px-3 py-1 rounded-full">✅ Expert Teachers</span>
              <span className="bg-purple-700 px-3 py-1 rounded-full">✅ Safe Environment</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/programs" className="text-purple-200 hover:text-white transition-colors text-base">Programs</Link></li>
              <li><Link href="/activities" className="text-purple-200 hover:text-white transition-colors text-base">Activities</Link></li>
              <li><Link href="/about" className="text-purple-200 hover:text-white transition-colors text-base">About Us</Link></li>
              <li><Link href="/contact" className="text-purple-200 hover:text-white transition-colors text-base">Contact</Link></li>
              <li><Link href="/blogs" className="text-purple-200 hover:text-white transition-colors text-base">Blogs</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">📞</span>
                  <a href="tel:+918884750750" className="text-purple-200 hover:text-white transition-colors text-base">
                    +91 8884750750
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">✉️</span>
                  <a href="mailto:contact.kidzeekasavanahalli@gmail.com" className="text-purple-200 hover:text-white transition-colors text-base">
                    contact.kidzeekasavanahalli@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">📍</span>
                  <span className="text-purple-200 text-base">
                    House no: 108, 19th Cross Rd, opposite to SJR VERITY, Tulasi Layout, apartment,<br />
                    Bengaluru, Karnataka 560035
                  </span>
                </div>
              </li>
              <li>
                <Link href="/contact" className="inline-block bg-yellow-400 text-purple-800 px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-500 transition-colors mt-2">
                  Schedule Visit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Hours & Bottom Section */}
        <div className="border-t border-purple-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold text-yellow-400 mb-2">Operating Hours</h4>
              <p className="text-purple-200 text-sm">
                Mon-Fri: 9:00 AM - 6:00 PM (Visiting Hours) | Sat: 10:00 AM - 1:00 PM (Visits Only) | Sun: Closed
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-purple-200 text-sm">
                © {new Date().getFullYear()} Kidzee Kasavanahalli. All rights reserved.
              </p>
              <p className="text-purple-300 text-xs mt-1">
                Designed for converting parents into enrolled families
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-neutral-300 hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/ayurveda" className="text-neutral-300 hover:text-white transition-colors">
                  Ayurveda Treatments
                </Link>
              </li>
              <li>
                <Link href="/services/yoga" className="text-neutral-300 hover:text-white transition-colors">
                  Yoga Programs
                </Link>
              </li>
              <li>
                <Link href="/services/wellness" className="text-neutral-300 hover:text-white transition-colors">
                  Wellness Packages
                </Link>
              </li>
              <li>
                <Link href="/services/meditation" className="text-neutral-300 hover:text-white transition-colors">
                  Meditation Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-neutral-400">Location:</span>
                <span className="ml-2 text-neutral-300">123 Wellness Street</span>
              </li>
              <li className="flex items-center">
                <span className="text-neutral-400">Phone:</span>
                <span className="ml-2 text-neutral-300">+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <span className="text-neutral-400">Email:</span>
                <span className="ml-2 text-neutral-300">info@wellness.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Newsletter</h3>
            <p className="mb-4 text-neutral-300">Subscribe to our newsletter for updates and special offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-500 text-neutral-100 placeholder-neutral-500"
              />
              <button
                type="submit"
                className="w-full bg-white text-neutral-900 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400">
            © {new Date().getFullYear()} Wellness Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


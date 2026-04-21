import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-green-700">
              Abhishag
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              About Us
            </Link>
          </div>

          {/* Mobile menu button (placeholder for future enhancement) */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

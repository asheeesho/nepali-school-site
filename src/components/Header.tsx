import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, GraduationCap } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'गृहपृष्ठ', href: '/' },
    { name: 'हाम्रो बारेमा', href: '/about' },
    { name: 'भर्ना', href: '/admissions' },
    { name: 'शैक्षिक', href: '/academics' },
    { name: 'घटनाहरू', href: '/events' },
    { name: 'सम्पर्क', href: '/contact' },
  ];

  return (
    <header className="bg-school-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-school-accent rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-school-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">श्री कृष्ण</h1>
              <p className="text-sm text-school-accent">उच्च माध्यमिक विद्यालय</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-school-accent ${
                  location.pathname === item.href
                    ? 'text-school-accent border-b-2 border-school-accent'
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Login Dropdown */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="bg-school-accent text-school-primary hover:bg-school-accent-light">
                  लगइन <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/login" className="text-school-primary">
                    विद्यार्थी/अभिभावक लगइन
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/login" className="text-school-primary">
                    शिक्षक लगइन
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-school-accent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-school-accent py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="bg-school-accent text-school-primary px-4 py-2 rounded-lg text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                लगइन
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
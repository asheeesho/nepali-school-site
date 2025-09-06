import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-school-accent">सम्पर्क गर्नुहोस्</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-school-accent mt-1 flex-shrink-0" />
                <p className="text-sm">तर्केश्वर-०२, नुवाकोट नेपाल</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-school-accent" />
                <p className="text-sm">+९७७ १ ४५६७८९०</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-school-accent" />
                <p className="text-sm">info@shreekrishnahss.edu.np</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-school-accent" />
                <p className="text-sm">सोम-शुक्र: ७:०० - ४:०० बजे</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-school-accent">द्रुत लिङ्कहरू</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm hover:text-school-accent transition-colors">गृहपृष्ठ</Link>
              <Link to="/about" className="block text-sm hover:text-school-accent transition-colors">हाम्रो बारेमा</Link>
              <Link to="/admissions" className="block text-sm hover:text-school-accent transition-colors">भर्ना</Link>
              <Link to="/academics" className="block text-sm hover:text-school-accent transition-colors">शैक्षिक कार्यक्रम</Link>
              <Link to="/events" className="block text-sm hover:text-school-accent transition-colors">घटनाहरू र समाचार</Link>
              <Link to="/contact" className="block text-sm hover:text-school-accent transition-colors">सम्पर्क</Link>
            </div>
          </div>

          {/* For Students & Parents */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-school-accent">विद्यार्थी र अभिभावकहरूका लागि</h3>
            <div className="space-y-2">
              <Link to="/login" className="block text-sm hover:text-school-accent transition-colors">विद्यार्थी पोर्टल</Link>
              <Link to="/login" className="block text-sm hover:text-school-accent transition-colors">अभिभावक ड्यासबोर्ड</Link>
              <Link to="/academics" className="block text-sm hover:text-school-accent transition-colors">शैक्षिक क्यालेन्डर</Link>
              <Link to="/events" className="block text-sm hover:text-school-accent transition-colors">परीक्षा तालिका</Link>
              <Link to="/contact" className="block text-sm hover:text-school-accent transition-colors">विद्यालय नीति</Link>
            </div>
          </div>

          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-school-accent">श्री कृष्ण उच्च माध्यमिक विद्यालय</h3>
            <p className="text-sm text-gray-300">
              मन सशक्त बनाउँदै, भविष्य निर्माण गर्दै। श्री कृष्ण उच्च माध्यमिक विद्यालयले 
              १९८५ देखि गुणस्तरीय शिक्षा प्रदान गर्दै आएको छ।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-school-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-school-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-school-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-school-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © २०२३ श्री कृष्ण उच्च माध्यमिक विद्यालय। सबै अधिकार सुरक्षित।
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-300 hover:text-school-accent">गोपनीयता नीति</Link>
            <Link to="/terms" className="text-sm text-gray-300 hover:text-school-accent">सेवाका शर्तहरू</Link>
            <Link to="/sitemap" className="text-sm text-gray-300 hover:text-school-accent">साइटम्याप</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  UserX, 
  Calendar, 
  MapPin,
  ChevronRight,
  Award,
  BookOpen,
  Heart
} from 'lucide-react';

// Import images
import heroBackground from '@/assets/hero-background.jpg';
import galleryAwards from '@/assets/gallery-awards.jpg';
import galleryPerformance from '@/assets/gallery-performance.jpg';
import galleryRobotics from '@/assets/gallery-robotics.jpg';
import galleryMuseum from '@/assets/gallery-museum.jpg';

const Home = () => {
  const quickAccessCards = [
    {
      title: 'विद्यार्थीहरू',
      description: 'शिक्षण स्रोत, तालिका, र असाइनमेन्ट पहुँच गर्नुहोस्',
      icon: GraduationCap,
      href: '/login',
      buttonText: 'विद्यार्थी पोर्टल'
    },
    {
      title: 'अभिभावकहरू',
      description: 'आफ्ना बच्चाहरूको प्रगति र विद्यालयका गतिविधिहरूसँग अद्यावधिक रहनुहोस्',
      icon: Users,
      href: '/login',
      buttonText: 'अभिभावक पोर्टल'
    },
    {
      title: 'शिक्षकहरू',
      description: 'कक्षाहरू, ग्रेडहरू, र शैक्षिक स्रोतहरू व्यवस्थापन गर्नुहोस्',
      icon: UserCheck,
      href: '/login',
      buttonText: 'शिक्षक पोर्टल'
    },
    {
      title: 'पूर्व विद्यार्थी',
      description: 'पूर्व सहपाठीहरूसँग जोडिनुहोस् र हाम्रो विद्यालयलाई समर्थन गर्नुहोस्',
      icon: UserX,
      href: '/alumni',
      buttonText: 'एलुम्नी नेटवर्क'
    }
  ];

  const announcements = [
    {
      title: 'मौसमको कारण विद्यालय बन्द',
      date: 'अक्टोबर १४, २०२३',
      type: 'notice'
    },
    {
      title: 'वार्षिक खेलकुद दिवस',
      date: 'अक्टोबर १०, २०२३',
      type: 'event'
    },
    {
      title: 'नयाँ पुस्तकालय घण्टा',
      date: 'अक्टोबर ८, २०२३',
      type: 'info'
    },
    {
      title: 'अभिभावक-शिक्षक भेटघाट',
      date: 'अक्टोबर ५, २०२३',
      type: 'meeting'
    }
  ];

  const upcomingEvents = [
    {
      date: '१६',
      month: 'अक्ट',
      title: 'विज्ञान प्रदर्शनी',
      time: '१०:०० बिहान - ३:०० दिउँसो',
      location: 'विज्ञान प्रयोगशाला'
    },
    {
      date: '२५',
      month: 'अक्ट',
      title: 'अभिभावक-शिक्षक भेटघाट',
      time: '९:०० बिहान - १:०० दिउँसो',
      location: 'मुख्य सभागार'
    },
    {
      date: '५',
      month: 'नोभ',
      title: 'वार्षिक खेलकुद दिवस',
      time: '८:०० बिहान - ५:०० साँझ',
      location: 'विद्यालय मैदान'
    }
  ];

  const galleryImages = [
    { title: 'शैक्षिक पुरस्कार', subtitle: 'मे २५, २०२३', image: galleryAwards },
    { title: 'गायन प्रदर्शन', subtitle: 'अप्रिल १५, २०२३', image: galleryPerformance },
    { title: 'रोबोटिक्स प्रतियोगिता', subtitle: 'मार्च १०, २०२३', image: galleryRobotics },
    { title: 'संग्रहालय भ्रमण', subtitle: 'फेब्रुअरी २५, २०२३', image: galleryMuseum }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-school-primary/80 via-school-primary-light/70 to-school-navy/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            श्री कृष्ण उच्च माध्यमिक विद्यालय
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-school-accent">
            "मन सशक्त बनाउँदै, भविष्य निर्माण गर्दै"
          </p>
          <Button 
            size="lg" 
            className="bg-school-accent text-school-primary hover:bg-school-accent-light text-lg px-8 py-3"
          >
            थप जान्नुहोस्
          </Button>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-school-primary">द्रुत पहुँच</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-school-primary text-white">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-school-accent rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-school-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-sm text-gray-200">{card.description}</p>
                    <Button 
                      asChild 
                      className="bg-school-accent text-school-primary hover:bg-school-accent-light w-full"
                    >
                      <Link to={card.href}>{card.buttonText}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Latest Announcements */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-school-primary">पछिल्ला घोषणाहरू</h2>
                <Button variant="outline" className="text-school-primary border-school-primary">
                  सबै हेर्नुहोस्
                </Button>
              </div>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-school-primary mb-2">
                            {announcement.title}
                          </h3>
                          <p className="text-sm text-gray-600">{announcement.date}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          announcement.type === 'notice' ? 'bg-red-100 text-red-800' :
                          announcement.type === 'event' ? 'bg-green-100 text-green-800' :
                          announcement.type === 'info' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {announcement.type === 'notice' ? 'सूचना' :
                           announcement.type === 'event' ? 'घटना' :
                           announcement.type === 'info' ? 'जानकारी' : 'भेटघाट'}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-school-primary">आगामी घटनाहरू</h2>
                <Button variant="outline" className="text-school-primary border-school-primary" asChild>
                  <Link to="/events">पूर्ण क्यालेन्डर</Link>
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-school-primary text-white text-center p-3 rounded-lg min-w-[60px]">
                          <div className="text-xl font-bold">{event.date}</div>
                          <div className="text-xs">{event.month}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-school-primary mb-1">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-1">{event.time}</p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {event.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-primary mb-4">विद्यालय ग्यालेरी</h2>
            <p className="text-gray-600">हाम्रा विद्यार्थीहरूका उपलब्धि र गतिविधिहरूका झलकहरू</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image.image})` }}
                ></div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-school-primary mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-school-primary text-white hover:bg-school-primary-light">
              पूर्ण ग्यालेरी हेर्नुहोस्
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-primary mb-4">
              श्री कृष्ण उच्च माध्यमिक विद्यालय किन छनौट गर्ने?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-school-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-school-primary" />
              </div>
              <h3 className="text-xl font-semibold text-school-primary mb-2">शैक्षिक उत्कृष्टता</h3>
              <p className="text-gray-600">
                पहिलो श्रेणीका शिक्षकहरूले गुणस्तरीय शिक्षा प्रदान गर्दै, 
                विद्यार्थीहरूलाई उत्कृष्टताका लागि तयार पार्छौं।
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-school-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-school-primary" />
              </div>
              <h3 className="text-xl font-semibold text-school-primary mb-2">आधुनिक सुविधाहरू</h3>
              <p className="text-gray-600">
                अत्याधुनिक प्रयोगशाला, पुस्तकालय र खेल मैदानहरूले 
                विद्यार्थीहरूको समग्र विकासमा योगदान पुर्याउँछ।
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-school-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-school-primary" />
              </div>
              <h3 className="text-xl font-semibold text-school-primary mb-2">समग्र विकास</h3>
              <p className="text-gray-600">
                शैक्षिक, खेलकुद, कला र सांस्कृतिक गतिविधिहरूमार्फत 
                विद्यार्थीहरूको व्यक्तित्व विकासमा ध्यान दिन्छौं।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
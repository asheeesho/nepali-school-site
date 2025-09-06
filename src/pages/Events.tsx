import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const monthNames = [
    'जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन',
    'जुलाई', 'अगस्त', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'
  ];

  const upcomingEvents = [
    {
      date: '१६',
      month: 'अक्ट',
      title: 'वार्षिक सांस्कृतिक दिवस',
      time: '९:०० बिहान - ४:०० दिउँसो',
      location: 'मुख्य सभागार',
      description: 'विद्यार्थीहरूको सांस्कृतिक कार्यक्रम, नृत्य, गीत-संगीत र नाटकको प्रस्तुति।',
      category: 'सांस्कृतिक'
    },
    {
      date: '२५',
      month: 'अक्ट',
      title: 'अभिभावक-शिक्षक भेटघाट',
      time: '१०:०० बिहान - २:०० दिउँसो',
      location: 'कक्षा कोठाहरू',
      description: 'विद्यार्थीहरूको शैक्षिक प्रगतिको बारेमा छलफल र अभिभावकहरूसँग भेटघाट।',
      category: 'शैक्षिक'
    },
    {
      date: '५',
      month: 'नोभ',
      title: 'वार्षिक खेलकुद दिवस',
      time: '८:०० बिहान - ५:०० साँझ',
      location: 'विद्यालय खेल मैदान',
      description: 'विभिन्न खेलकुद प्रतियोगिता र पुरस्कार वितरण कार्यक्रम।',
      category: 'खेलकुद'
    }
  ];

  const eventCategories = [
    {
      title: 'शैक्षिक घटनाहरू',
      description: 'शैक्षिक गतिविधि, सेमिनार र कार्यशालाहरू',
      events: ['विज्ञान मेला - मे २०', 'गणित ओलम्पियाड - जुन ५', 'वर्तनी प्रतियोगिता - जुन १५'],
      color: 'bg-blue-500'
    },
    {
      title: 'सांस्कृतिक घटनाहरू',
      description: 'कला, संगीत, नृत्य र सांस्कृतिक उत्सवहरू',
      events: ['वार्षिक सांस्कृतिक कार्यक्रम - मे १९', 'संगीत प्रतियोगिता - जुन ८', 'कलाकृति प्रदर्शनी - जुलाई १०'],
      color: 'bg-purple-500'
    },
    {
      title: 'खेलकुद घटनाहरू',
      description: 'खेलकुद प्रतियोगिता, अन्तर-विद्यालय खेल र शारीरिक गतिविधिहरू',
      events: ['वार्षिक खेलकुद दिवस - मे २२', 'फुटबल प्रतियोगिता - जुन ४', 'तैराकी प्रतियोगिता - जुलाई ७'],
      color: 'bg-green-500'
    }
  ];

  const pastEvents = [
    {
      title: 'वार्षिक सांस्कृतिक दिवस २०२२',
      date: 'मे ५, २०२२',
      gallery: '२५ तस्बिर',
      description: 'विद्यार्थीहरूको उत्कृष्ट सांस्कृतिक प्रस्तुति'
    },
    {
      title: 'वार्षिक खेलकुद दिवस २०२२',
      date: 'अप्रिल २ मे २०२२',
      gallery: '४० तस्बिर',
      description: 'रोमाञ्चक खेलकुद प्रतियोगिता'
    },
    {
      title: 'विज्ञान प्रदर्शनी २०२२',
      date: 'जुलाई १५, २०२२',
      gallery: '३० तस्बिर',
      description: 'विद्यार्थीहरूको नवाचार प्रदर्शनी'
    },
    {
      title: 'अन्तर-विद्यालय बहस प्रतियोगिता २०२२',
      date: 'अगस्त १०, २०२२',
      gallery: '१५ तस्बिर',
      description: 'वाकवैशिष्ट्य विकास कार्यक्रम'
    }
  ];

  // Generate calendar days
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentMonth - 1);
    } else {
      newDate.setMonth(currentMonth + 1);
    }
    setCurrentDate(newDate);
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const calendarDays = [];

  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-school-primary via-school-primary-light to-school-navy"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">विद्यालयका घटनाहरू</h1>
          <p className="text-xl text-school-accent">
            श्री कृष्ण उच्च माध्यमिक विद्यालयका सबै शैक्षिक, सांस्कृतिक र खेलकुद घटनाहरूसँग अद्यावधिक रहनुहोस्
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-1">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-school-primary">
                    {monthNames[currentMonth]} {currentYear}
                  </h3>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigateMonth('prev')}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigateMonth('next')}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनि'].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <div
                      key={index}
                      className={`text-center py-2 text-sm ${
                        day
                          ? 'hover:bg-school-blue-light cursor-pointer rounded'
                          : ''
                      } ${
                        day === 16 || day === 25 || day === 5
                          ? 'bg-school-accent text-school-primary font-bold rounded'
                          : day
                          ? 'text-gray-700'
                          : ''
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Upcoming Events List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-school-primary">आगामी घटनाहरू</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">सबै घटनाहरू</Button>
                  <Button variant="outline" size="sm">क्यालेन्डरमा थप्नुहोस्</Button>
                </div>
              </div>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex space-x-4">
                        <div className="bg-school-primary text-white text-center p-3 rounded-lg min-w-[70px]">
                          <div className="text-2xl font-bold">{event.date}</div>
                          <div className="text-sm">{event.month}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-semibold text-school-primary">
                              {event.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              event.category === 'शैक्षिक' ? 'bg-blue-100 text-blue-800' :
                              event.category === 'सांस्कृतिक' ? 'bg-purple-100 text-purple-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {event.category}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
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

      {/* Event Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-primary mb-4">घटना श्रेणीहरू</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className={`h-48 ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-school-primary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-school-accent rounded-full"></div>
                        <span className="text-sm text-gray-600">{event}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-school-primary text-white hover:bg-school-primary-light">
                    सबै {category.title} हेर्नुहोस्
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Event Galleries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-primary mb-4">विगतका घटनाहरूको ग्यालेरी</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-school-primary to-school-primary-light"></div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-school-primary mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <p className="text-xs text-gray-500 mb-3">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-school-accent">{event.gallery}</span>
                    <Button size="sm" variant="outline" className="text-xs">
                      ग्यालेरी हेर्नुहोस्
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-school-primary text-white hover:bg-school-primary-light">
              सबै घटना ग्यालेरीहरू हेर्नुहोस्
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-school-primary to-school-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">विद्यालयका घटनाहरूसँग अद्यावधिक रहनुहोस्</h2>
          <p className="text-xl mb-8 text-school-accent">
            हाम्रो न्यूजलेटर सब्सक्राइब गरेर घटना अपडेट, दर्ताकरण समयसीमा, र विशेष हाइलाइटहरू प्राप्त गर्नुहोस्
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="तपाईंको इमेल ठेगाना"
              className="flex-1 px-4 py-2 rounded-lg text-gray-800"
            />
            <Button className="bg-school-accent text-school-primary hover:bg-school-accent-light px-6">
              सब्सक्राइब गर्नुहोस्
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
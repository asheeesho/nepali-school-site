import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, BookOpen, Heart, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'शैक्षिक उत्कृष्टता',
      description: 'हामी प्रत्येक विद्यार्थीमा शैक्षिक उत्कृष्टता र आजीवन सिकाइको प्रेम विकास गर्न प्रतिबद्ध छौं।'
    },
    {
      icon: BookOpen,
      title: 'चरित्र निर्माण',
      description: 'नैतिक मूल्यमान्यता र इमानदारीसहितको चरित्र निर्माणमा हामी विशेष जोड दिन्छौं।'
    },
    {
      icon: Heart,
      title: 'समग्र विकास',
      description: 'शैक्षिक, सामाजिक, भावनात्मक र शारीरिक सबै पक्षको समग्र विकासमा ध्यान दिन्छौं।'
    }
  ];

  const achievements = [
    'राष्ट्रिय स्तरमा शैक्षिक उपलब्धि',
    'खेलकुदमा उत्कृष्ट प्रदर्शन',
    'कला र सांस्कृतिक कार्यक्रमहरूमा सक्रियता',
    'सामुदायिक सेवामा अग्रणी भूमिका'
  ];

  const whyChooseUs = [
    {
      title: 'शैक्षिक उत्कृष्टता',
      description: 'योग्य र अनुभवी शिक्षकहरूले आधुनिक शिक्षण विधि प्रयोग गरेर गुणस्तरीय शिक्षा प्रदान गर्छन्।'
    },
    {
      title: 'आधुनिक सुविधाहरू',
      description: 'अत्याधुनिक कक्षा कोठा, प्रयोगशाला, पुस्तकालय र खेल मैदानहरू उपलब्ध छन्।'
    },
    {
      title: 'समग्र विकास',
      description: 'शैक्षिक, खेलकुद, कला र व्यक्तित्व विकासका सबै पक्षहरूमा बराबर जोड दिइन्छ।'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-school-primary via-school-primary-light to-school-navy"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            श्री कृष्ण उच्च माध्यमिक विद्यालयको बारेमा
          </h1>
          <p className="text-xl text-school-accent">
            गुणस्तरीय शिक्षा प्रदान गर्ने हाम्रो परम्परा
          </p>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-school-primary mb-6">हाम्रो इतिहास</h2>
              <p className="text-gray-600 mb-4">
                सन् १९८५ मा स्थापना भएको श्री कृष्ण उच्च माध्यमिक विद्यालयले नेपालको शिक्षा क्षेत्रमा महत्वपूर्ण योगदान 
                पुर्याएको छ। तीन दशकभन्दा बढी समयदेखि हामीले हजारौं विद्यार्थीहरूलाई गुणस्तरीय शिक्षा प्रदान गर्दै 
                आएका छौं।
              </p>
              <p className="text-gray-600 mb-6">
                विद्यालयको स्थापनाकालदेखि नै "ज्ञानमा उत्कृष्टता" हाम्रो मूल उद्देश्य भएको छ। हामीले परम्परागत र 
                आधुनिक शिक्षण विधिलाई एकीकृत गरेर विद्यार्थीहरूको सर्वांगीण विकासमा योगदान पुर्याएका छौं।
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-school-accent rounded-full"></div>
                  <span className="text-school-primary font-medium">स्थापना: १९८५</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-school-accent rounded-full"></div>
                  <span className="text-school-primary font-medium">स्नातक विद्यार्थी: ५,००० भन्दा बढी</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-school-accent rounded-full"></div>
                  <span className="text-school-primary font-medium">शिक्षक संख्या: ५० भन्दा बढी</span>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-school-primary to-school-primary-light rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-primary mb-4">हाम्रो मिशन र भिजन</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-school-accent rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-school-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-school-primary">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-primary mb-4">नेतृत्व सन्देश</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="flex space-x-4">
                <div className="w-24 h-24 bg-gradient-to-br from-school-primary to-school-primary-light rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-school-primary mb-2">प्राचार्यको सन्देश</h3>
                  <p className="text-gray-600 mb-4">
                    "शिक्षा भनेको केवल पुस्तकीय ज्ञान मात्र होइन, यो जीवनको समग्र विकास हो। हामी प्रत्येक 
                    विद्यार्थीलाई उनीहरूको सम्भावनालाई पूर्ण रूपमा विकास गर्न मद्दत गर्छौं।"
                  </p>
                  <p className="font-medium text-school-primary">- डा. राम प्रसाद शर्मा</p>
                  <p className="text-sm text-gray-500">प्राचार्य</p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex space-x-4">
                <div className="w-24 h-24 bg-gradient-to-br from-school-primary to-school-primary-light rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-school-primary mb-2">अध्यक्षको सन्देश</h3>
                  <p className="text-gray-600 mb-4">
                    "हाम्रो लक्ष्य योग्य नागरिक तयार पार्नु हो जसले समाज र राष्ट्रको विकासमा योगदान 
                    पुर्याउन सक्छ। हामी गुणस्तरीय शिक्षाको साथै नैतिक मूल्यहरूमा जोड दिन्छौं।"
                  </p>
                  <p className="font-medium text-school-primary">- श्री गोपाल खनाल</p>
                  <p className="text-sm text-gray-500">व्यवस्थापन समितिका अध्यक्ष</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Faculty */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-primary mb-4">हाम्रा शिक्षकहरू</h2>
            <p className="text-gray-600">अनुभवी र योग्य शिक्षकहरूको टोली</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'डा. सीता देवी', subject: 'गणित विभाग', experience: '१५ वर्षको अनुभव' },
              { name: 'प्रा. राम बहादुर', subject: 'विज्ञान विभाग', experience: '१२ वर्षको अनुभव' },
              { name: 'श्रीमती गीता शर्मा', subject: 'नेपाली विभाग', experience: '१८ वर्षको अनुभव' },
              { name: 'श्री मोहन राई', subject: 'अङ्ग्रेजी विभाग', experience: '१० वर्षको अनुभव' }
            ].map((teacher, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-school-primary to-school-primary-light rounded-full mx-auto"></div>
                  <h3 className="font-semibold text-school-primary">{teacher.name}</h3>
                  <p className="text-sm text-gray-600">{teacher.subject}</p>
                  <p className="text-xs text-gray-500">{teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-school-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-school-primary">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-school-primary mb-6">हाम्रा उपलब्धिहरू</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-school-accent rounded-full"></div>
                    <span className="text-gray-600">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-school-primary mb-6">हाम्रो संकल्प</h3>
              <p className="text-gray-600 mb-4">
                हामी प्रत्येक विद्यार्थीको व्यक्तिगत आवश्यकता र क्षमताको पहिचान गरेर उनीहरूको 
                सम्भावनालाई पूर्ण रूपमा विकास गर्न प्रतिबद्ध छौं।
              </p>
              <p className="text-gray-600">
                आधुनिक शिक्षण विधि, प्रविधिको प्रयोग र व्यावहारिक ज्ञानलाई एकीकृत गरेर हामी 
                भविष्यका नेताहरू तयार पार्छौं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-school-primary to-school-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">हाम्रो समुदायमा सामेल हुन तयार हुनुहुन्छ?</h2>
          <p className="text-xl mb-8 text-school-accent">
            गुणस्तरीय शिक्षा र उज्ज्वल भविष्यको लागि आज नै सम्पर्क गर्नुहोस्
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-school-accent text-school-primary hover:bg-school-accent-light">
              भर्नाका लागि आवेदन दिनुहोस्
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-primary">
              थप जानकारीका लागि सम्पर्क गर्नुहोस्
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
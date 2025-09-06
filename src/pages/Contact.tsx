import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send,
  MessageCircle
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'ठेगाना',
      content: 'तर्केश्वर-०२, नुवाकोट नेपाल',
      details: ''
    },
    {
      icon: Phone,
      title: 'फोन',
      content: '+९७७ १ ४१२५४६',
      details: '+९७७ १ ४१२५४७'
    },
    {
      icon: Mail,
      title: 'इमेल',
      content: 'info@shreekrishnahss.edu.np',
      details: 'admission@shreekrishnahss.edu.np'
    },
    {
      icon: Clock,
      title: 'समय',
      content: 'सोम-शुक्र: ७:०० बिहान - ४:०० साँझ',
      details: 'शनिबार: ८:०० बिहान - १२:०० दिउँसो'
    }
  ];

  const departments = [
    {
      title: 'भर्ना कार्यालय',
      description: 'भर्ना सम्बन्धी सोधपुछका लागि',
      phone: '+९७७ १ ४१२५४६',
      email: 'admissions@shreekrishnahss.edu.np'
    },
    {
      title: 'शैक्षिक मामिला',
      description: 'पाठ्यक्रम र शैक्षिक सोधपुछका लागि',
      phone: '+९७७ १ ४१२५४७',
      email: 'academics@shreekrishnahss.edu.np'
    },
    {
      title: 'विद्यार्थी कार्य',
      description: 'विद्यार्थी कल्याण र गतिविधिका लागि',
      phone: '+९७७ १ ४१२५४८',
      email: 'students@shreekrishnahss.edu.np'
    },
    {
      title: 'खाता तथा वित्त',
      description: 'शुल्क भुक्तानी र वित्तीय मामिलाका लागि',
      phone: '+९७७ १ ४१२५४९',
      email: 'accounts@shreekrishnahss.edu.np'
    },
    {
      title: 'प्रशासन',
      description: 'सामान्य प्रशासनिक सोधपुछका लागि',
      phone: '+९७७ १ ४१२५५०',
      email: 'admin@shreekrishnahss.edu.np'
    },
    {
      title: 'पूर्व विद्यार्थी सम्बन्ध',
      description: 'पूर्व विद्यार्थी नेटवर्क र घटनाका लागि',
      phone: '+९७७ १ ४१२५५१',
      email: 'alumni@shreekrishnahss.edu.np'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-school-primary via-school-primary-light to-school-navy"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">हामीसँग सम्पर्क गर्नुहोस्</h1>
          <p className="text-xl text-school-accent">
            हामी तपाईंको सहायता गर्न र तपाईंले राख्नुभएका कुनै पनि प्रश्नको उत्तर दिन यहाँ छौं
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-school-primary mb-4">सम्पर्क गर्नुहोस्</h2>
                <p className="text-gray-600">
                  तपाईंसँग कुनै प्रश्न वा सुझाव छ भने कृपया यो फारम भर्नुहोस्।
                </p>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">पूरा नाम</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="तपाईंको नाम"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">इमेल ठेगाना</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="तपाईंको इमेल"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">फोन नम्बर</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="तपाईंको फोन नम्बर"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="department">विभाग</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="विभाग छनौट गर्नुहोस्" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admissions">भर्ना कार्यालय</SelectItem>
                            <SelectItem value="academics">शैक्षिक मामिला</SelectItem>
                            <SelectItem value="students">विद्यार्थी कार्य</SelectItem>
                            <SelectItem value="finance">खाता तथा वित्त</SelectItem>
                            <SelectItem value="admin">प्रशासन</SelectItem>
                            <SelectItem value="alumni">पूर्व विद्यार्थी</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">सन्देश</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="तपाईंको सन्देश"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-school-accent text-school-primary hover:bg-school-accent-light">
                      <Send className="w-4 h-4 mr-2" />
                      सन्देश पठाउनुहोस्
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-school-primary mb-4">सम्पर्क जानकारी</h2>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex space-x-4">
                          <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-school-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-school-primary mb-1">
                              {info.title}
                            </h3>
                            <p className="text-gray-700">{info.content}</p>
                            {info.details && (
                              <p className="text-gray-600 text-sm">{info.details}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-school-primary mb-4">हामीसँग जोडिनुहोस्</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-school-primary mb-2">न्यूजलेटर सब्सक्राइब गर्नुहोस्</h4>
                    <div className="flex space-x-2">
                      <Input placeholder="तपाईंको इमेल" className="flex-1" />
                      <Button size="sm" className="bg-school-primary text-white hover:bg-school-primary-light">
                        सब्सक्राइब
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-primary mb-4">विभागीय सम्पर्कहरू</h2>
            <p className="text-gray-600">विशिष्ट विभागका लागि प्रत्यक्ष सम्पर्क</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-school-primary mb-2">{dept.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-school-accent" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-school-accent" />
                      <span className="text-sm">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-primary mb-4">हामी यहाँ छौं</h2>
          </div>
          <Card className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-school-primary to-school-primary-light flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-school-accent" />
                <h3 className="text-2xl font-bold mb-2">तर्केश्वर-०२, नुवाकोट</h3>
                <p className="text-school-accent">Google Maps मा हेर्नुहोस्</p>
              </div>
            </div>
          </Card>
          
          {/* Directions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-school-primary" />
                </div>
                <h3 className="font-semibold text-school-primary mb-2">दिशा निर्देशन</h3>
                <p className="text-sm text-gray-600">
                  हाम्रो विद्यालय तर्केश्वर नगरपालिकामा अवस्थित छ, मुख्य सडकदेखि १५ मिनेट पैदल दूरीमा।
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-school-primary" />
                </div>
                <h3 className="font-semibold text-school-primary mb-2">निकटतम स्थानहरू</h3>
                <p className="text-sm text-gray-600">
                  तर्केश्वर मन्दिर (५ मिनेट), नुवाकोट जिल्ला अस्पताल (१० मिनेट), सामुदायिक केन्द्र (५ मिनेट)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-school-primary" />
                </div>
                <h3 className="font-semibold text-school-primary mb-2">सहायता आवश्यक?</h3>
                <p className="text-sm text-gray-600">
                  घटना दर्ता, डाटाबेस प्रश्न, वा अन्य जानकारीका लागि कृपया सम्पर्क गर्नुहोस्।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
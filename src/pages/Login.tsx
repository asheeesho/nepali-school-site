import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Users, 
  UserCheck, 
  GraduationCap, 
  Award,
  Lock,
  ArrowLeft,
  HelpCircle,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { ...formData, userType: activeTab });
    // Handle login logic here
  };

  const userTypes = [
    {
      id: 'student',
      title: 'विद्यार्थी',
      icon: GraduationCap,
      description: 'शिक्षण स्रोत, तालिका, र असाइनमेन्ट पहुँच गर्नुहोस्'
    },
    {
      id: 'parent',
      title: 'अभिभावक',
      icon: Users,
      description: 'आफ्ना बच्चाहरूको प्रगति र विद्यालयका गतिविधिहरूसँग अद्यावधिक रहनुहोस्'
    },
    {
      id: 'teacher',
      title: 'शिक्षक',
      icon: UserCheck,
      description: 'कक्षाहरू, ग्रेडहरू, र शैक्षिक स्रोतहरू व्यवस्थापन गर्नुहोस्'
    },
    {
      id: 'alumni',
      title: 'पूर्व विद्यार्थी',
      icon: Award,
      description: 'पूर्व सहपाठीहरूसँग जोडिनुहोस् र हाम्रो विद्यालयलाई समर्थन गर्नुहोस्'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
            {/* Left Side - Image */}
            <div className="hidden lg:block">
              <div className="h-full bg-gradient-to-br from-school-primary via-school-primary-light to-school-navy rounded-lg p-8 text-white flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-school-accent rounded-lg flex items-center justify-center">
                    <Shield className="w-8 h-8 text-school-primary" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4">सुरक्षित पोर्टल लगइन</h1>
                    <p className="text-school-accent text-lg">तपाईंको व्यक्तिगत ड्यासबोर्डमा पहुँच गर्नुहोस्</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-school-accent rounded-full"></div>
                      <span>सुरक्षित र एन्क्रिप्टेड लगइन</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-school-accent rounded-full"></div>
                      <span>२४/७ तकनिकी सहायता</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-school-accent rounded-full"></div>
                      <span>मोबाइल-फ्रेन्डली प्लेटफर्म</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-primary mb-2">सुरक्षित पोर्टल लगइन</h2>
                <p className="text-gray-600">तपाईंको व्यक्तिगत ड्यासबोर्डमा पहुँच गर्नुहोस्</p>
              </div>

              <Card className="w-full max-w-md mx-auto">
                <CardContent className="p-6">
                  {/* User Type Tabs */}
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                      {userTypes.map((type) => {
                        const IconComponent = type.icon;
                        return (
                          <TabsTrigger 
                            key={type.id} 
                            value={type.id}
                            className="flex flex-col items-center space-y-1 py-3"
                          >
                            <IconComponent className="w-4 h-4" />
                            <span className="text-xs">{type.title}</span>
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>

                    {userTypes.map((type) => (
                      <TabsContent key={type.id} value={type.id}>
                        <div className="text-center mb-6">
                          <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center mx-auto mb-2">
                            <type.icon className="w-6 h-6 text-school-primary" />
                          </div>
                          <h3 className="text-lg font-semibold text-school-primary">{type.title} लगइन</h3>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="username">
                              {type.id === 'student' ? 'प्रयोगकर्ता नाम वा विद्यार्थी ID' : 'प्रयोगकर्ता नाम'}
                            </Label>
                            <Input
                              id="username"
                              name="username"
                              placeholder={
                                type.id === 'student' 
                                  ? 'तपाईंको प्रयोगकर्ता नाम वा ID प्रविष्ट गर्नुहोस्'
                                  : 'तपाईंको प्रयोगकर्ता नाम प्रविष्ट गर्नुहोस्'
                              }
                              value={formData.username}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="password">पासवर्ड</Label>
                            <Input
                              id="password"
                              name="password"
                              type="password"
                              placeholder="तपाईंको पासवर्ड प्रविष्ट गर्नुहोस्"
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="rememberMe"
                                checked={formData.rememberMe}
                                onCheckedChange={(checked) => 
                                  setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                                }
                              />
                              <Label htmlFor="rememberMe" className="text-sm">मलाई सम्झनुहोस्</Label>
                            </div>
                            <Link to="/forgot-password" className="text-sm text-school-primary hover:underline">
                              पासवर्ड बिर्सनुभयो?
                            </Link>
                          </div>

                          <Button 
                            type="submit" 
                            className="w-full bg-school-primary text-white hover:bg-school-primary-light"
                          >
                            <Lock className="w-4 h-4 mr-2" />
                            साइन इन गर्नुहोस्
                          </Button>
                        </form>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              {/* Help Section */}
              <Card className="max-w-md mx-auto mt-6 bg-school-blue-light">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-school-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-school-primary mb-1">सहायता चाहिन्छ?</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        यदि तपाईंलाई लगइन गर्न समस्या आइरहेको छ भने, कृपया हाम्रो IT सहायता टोलीलाई सम्पर्क गर्नुहोस्:
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-school-accent" />
                          <span>support@shreekrishnahss.edu.np</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-school-accent" />
                          <span>+९७७ १ ४५६७८९० ext. १२३</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="text-center mt-6 space-y-2">
                <p className="text-sm text-gray-600">खाता छैन?</p>
                <Button variant="outline" className="mr-4">
                  <Link to="/contact">प्रशासनलाई सम्पर्क गर्नुहोस्</Link>
                </Button>
              </div>

              {/* Back to Homepage */}
              <div className="text-center mt-6">
                <Button variant="ghost" asChild>
                  <Link to="/" className="text-school-primary">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    गृहपृष्ठमा फर्कनुहोस्
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
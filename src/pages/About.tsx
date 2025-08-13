import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Target, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About TRADEPROFX</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your trusted partner in binary options and Deriv trading education
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                TRADEPROFX was founded with a simple yet powerful mission: to democratize professional trading education and help traders achieve consistent profitability while managing risk effectively.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a personal journey to master binary options trading has evolved into a comprehensive educational platform serving traders worldwide. We believe that with the right knowledge, strategy, and discipline, anyone can become a successful trader.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">Binary Options</Badge>
                <Badge variant="secondary">Deriv Trading</Badge>
                <Badge variant="secondary">Risk Management</Badge>
                <Badge variant="secondary">Market Analysis</Badge>
              </div>
            </div>
            <div className="bg-gradient-card p-8 rounded-lg shadow-medium">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Company Mission</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Educate</h4>
                    <p className="text-muted-foreground">Provide comprehensive trading education accessible to all skill levels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Empower</h4>
                    <p className="text-muted-foreground">Equip traders with proven strategies and risk management techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Support</h4>
                    <p className="text-muted-foreground">Build a community of successful, disciplined traders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet TonnieRich */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet TonnieRich</h2>
            <p className="text-xl text-muted-foreground">Founder & CEO of TRADEPROFX</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-soft">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Trading Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Over 5 years of professional binary options and Deriv trading experience with consistent profitability
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Education Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Successfully trained over 1,000 traders across Kenya and internationally through courses and mentorship
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>YouTube Channel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Regular live trading sessions and educational content helping traders worldwide improve their skills
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-medium">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">TonnieRich's Trading Journey</h3>
            <div className="prose max-w-none text-muted-foreground">
              <p className="mb-4">
                My journey into binary options trading began over 5 years ago when I discovered the potential of financial markets to create sustainable income. Like many traders, I started with losses and setbacks, but these experiences taught me the critical importance of proper risk management and disciplined trading.
              </p>
              <p className="mb-4">
                Through years of dedicated study, practice, and real-market experience, I developed a systematic approach to binary options trading that focuses on consistency over quick profits. My strategies emphasize risk management, technical analysis, and psychological discipline – the three pillars of successful trading.
              </p>
              <p className="mb-4">
                As my trading became consistently profitable, I felt compelled to share my knowledge with others. This led to the creation of TRADEPROFX, where I could formalize my teaching and reach traders globally through comprehensive courses, live sessions, and educational content.
              </p>
              <p>
                Today, I continue to trade actively while teaching and mentoring the next generation of professional traders. My goal is to help every trader I work with achieve the same level of consistency and profitability that took me years to develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Integrity</h3>
              <p className="text-muted-foreground">Honest, transparent education with realistic expectations and genuine support for our students</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Excellence</h3>
              <p className="text-muted-foreground">Continuous improvement in our strategies, teaching methods, and student outcomes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Community</h3>
              <p className="text-muted-foreground">Building a supportive network of traders who learn and grow together</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Discipline</h3>
              <p className="text-muted-foreground">Teaching the mental discipline required for long-term trading success</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Accessibility</h3>
              <p className="text-muted-foreground">Making professional trading education accessible to traders at all levels</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Results</h3>
              <p className="text-muted-foreground">Focus on practical, actionable strategies that deliver measurable results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to start your trading journey with TRADEPROFX? Contact us today
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="opacity-90">+254 745 339 951</p>
            </div>
            
            <div className="text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="opacity-90">support@tradeprofx.com</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="opacity-90">Kenya, East Africa</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-gold text-secondary font-semibold shadow-gold">
                Contact Us
              </Button>
            </Link>
            <a href="https://wa.me/254745339951" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                WhatsApp Chat
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
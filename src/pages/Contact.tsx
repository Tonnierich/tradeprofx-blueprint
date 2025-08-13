import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Get in touch with TRADEPROFX for trading support and inquiries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <a href="tel:+254745339951" className="text-primary hover:text-primary-gold transition-colors">
                    +254 745 339 951
                  </a>
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">Mon - Fri, 8AM - 6PM EAT</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <a href="mailto:support@tradeprofx.com" className="text-primary hover:text-primary-gold transition-colors">
                    support@tradeprofx.com
                  </a>
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">24-hour response time</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <a 
                    href="https://wa.me/254745339951" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-gold transition-colors"
                  >
                    Chat with us
                  </a>
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">Instant messaging</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Kenya, East Africa</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">Serving traders worldwide</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send us a Message</h2>
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">How Can We Help?</h2>
              
              <div className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      Trading Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Get help with trading strategies, platform navigation, risk management, and technical analysis questions.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-2" />
                      Course Inquiries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Learn about our comprehensive trading courses, mentorship programs, and educational resources.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-primary mr-2" />
                      General Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Questions about our services, partnership opportunities, or anything else related to TRADEPROFX.
                    </CardDescription>
                  </CardContent>
                </Card>

                <div className="bg-gradient-card p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM EAT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM EAT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * WhatsApp messages are monitored 24/7 for urgent trading support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Need Immediate Help?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://wa.me/254745339951" target="_blank" rel="noopener noreferrer">
              <Card className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-8">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">WhatsApp Chat</h3>
                  <p className="text-muted-foreground">Start an instant conversation for quick support</p>
                </CardContent>
              </Card>
            </a>
            
            <a href="tel:+254745339951">
              <Card className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Call Now</h3>
                  <p className="text-muted-foreground">Speak directly with our trading experts</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
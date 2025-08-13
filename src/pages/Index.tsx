import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, TrendingUp, Shield, Target, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { getLatestBlogPosts } from "@/data/blog-posts";

const Index = () => {
  const latestPosts = getLatestBlogPosts(3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-secondary-foreground"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-secondary-foreground">
            TRADEPROFX
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary font-semibold">
            Smart Trading, Smarter Profits
          </p>
          <p className="text-lg md:text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Master binary options and Deriv trading with professional strategies, expert analysis, and proven risk management techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-gold text-secondary font-semibold shadow-gold hover:shadow-lg transition-all">
              Start Trading Today
            </Button>
            <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Watch Trading Videos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Meet TonnieRich
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                CEO of TRADEPROFX and experienced binary options trader from Kenya. I've dedicated my career to mastering Deriv trading strategies and helping traders achieve consistent profits while managing risk effectively.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Trading</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Students Taught</div>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  Learn More About Me
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-card p-8 rounded-lg shadow-medium">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                TRADEPROFX is a trusted name in binary options and Deriv trading education. Our mission is simple: Help traders win consistently while managing risk effectively.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="h-4 w-4 mr-2" />
                Contact: +254 745 339 951 | support@tradeprofx.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose TRADEPROFX?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional trading education with proven strategies and expert guidance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Learn battle-tested trading strategies that have generated consistent profits in real market conditions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Master professional risk management techniques to protect your capital and ensure long-term success.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Get daily market analysis and live trading insights from experienced professionals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Latest Trading Insights</h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest strategies, analysis, and educational content
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Card key={post.id} className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="bg-gradient-gold text-secondary font-semibold shadow-gold">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Live Trading Education</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Watch live trading sessions and educational content on our YouTube channel
          </p>
          <div className="bg-background p-8 rounded-lg shadow-medium">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground">Latest Trading Video</p>
                <p className="text-muted-foreground">Live market analysis and trading strategies</p>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-gold text-secondary font-semibold shadow-gold">
              Watch on YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading Professionally?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of traders who have transformed their trading with TRADEPROFX strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-gold text-secondary font-semibold shadow-gold">
                Get Started Today
              </Button>
            </Link>
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                Explore Strategies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/tradeprofx-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <img src={logo} alt="TRADEPROFX" className="h-8 w-auto mb-4 filter brightness-0 invert" />
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Smart Trading, Smarter Profits. TRADEPROFX is your trusted partner in binary options and Deriv trading education.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+254745339951"
                className="flex items-center text-primary hover:text-primary-gold transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +254 745 339 951
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-secondary-foreground/80">
                <Mail className="h-4 w-4 mr-2" />
                support@tradeprofx.com
              </li>
              <li>
                <a
                  href="https://wa.me/254745339951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 TRADEPROFX. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
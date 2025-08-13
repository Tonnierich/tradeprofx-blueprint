import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, Youtube, Download, Music, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/tradeprofx-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
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

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.youtube.com/channel/UCMDzH0sYbNcohLnx4wihG8Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Youtube className="h-4 w-4 mr-2" />
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/drive/folders/1s5kqsS0fFgGE-4YJGrRwIA_gN9w_m5EH?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Free Bots
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/@tradeprofx.pro?_t=8pOtdGbyKbG&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Music className="h-4 w-4 mr-2" />
                  TikTok
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/TradeProFX9?t=hr_QLHVbx1LoUfcnVX7kjw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter/X
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/profile.php?id=61565308321001&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/Tradeprofx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Telegram
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
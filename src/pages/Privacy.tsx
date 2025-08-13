import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your privacy is important to us at TRADEPROFX
          </p>
          <p className="text-sm opacity-75">Last updated: August 13, 2024</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-6">
                  TRADEPROFX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
                <p className="text-muted-foreground mb-4">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Demographic information</li>
                  <li>Trading experience and financial information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-4">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>IP address and browser information</li>
                  <li>Device and operating system information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring websites</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>Providing and maintaining our services</li>
                  <li>Communicating with you about our services</li>
                  <li>Sending educational content and trading insights</li>
                  <li>Improving our website and services</li>
                  <li>Analyzing website usage and performance</li>
                  <li>Complying with legal obligations</li>
                  <li>Preventing fraud and ensuring security</li>
                </ul>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Third-Party Service Providers</h3>
                <p className="text-muted-foreground mb-6">
                  We may share your information with trusted third-party service providers who assist us in operating our website and providing our services, including email marketing platforms, analytics providers, and payment processors.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Legal Requirements</h3>
                <p className="text-muted-foreground mb-6">
                  We may disclose your information if required by law or in response to valid legal requests, such as court orders or government regulations.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Business Transfers</h3>
                <p className="text-muted-foreground mb-6">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve website functionality and performance</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  You can control cookie settings through your browser preferences, but disabling cookies may affect website functionality.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">6. Google AdSense and Analytics</h2>
                <p className="text-muted-foreground mb-6">
                  Our website uses Google AdSense to display advertisements and Google Analytics to analyze website traffic. These services may collect and use information about your visits to our website and other websites to provide targeted advertisements and analytics reports. For more information about Google's privacy practices, please visit Google's Privacy Policy.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Security</h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage method is 100% secure, and we cannot guarantee absolute security.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">8. Your Rights and Choices</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">9. Email Communications</h2>
                <p className="text-muted-foreground mb-6">
                  If you subscribe to our newsletter or educational content, you may receive periodic emails with trading insights, market analysis, and promotional content. You can unsubscribe from these communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
                <p className="text-muted-foreground mb-6">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">11. International Data Transfers</h2>
                <p className="text-muted-foreground mb-6">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We will take appropriate measures to ensure your information receives adequate protection.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-muted-foreground mb-2"><strong>TRADEPROFX</strong></p>
                  <p className="text-muted-foreground mb-2">Email: support@tradeprofx.com</p>
                  <p className="text-muted-foreground mb-2">Phone: +254 745 339 951</p>
                  <p className="text-muted-foreground">WhatsApp: +254 745 339 951</p>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This Privacy Policy is designed to comply with Google AdSense requirements and general data protection regulations. By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
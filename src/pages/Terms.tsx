import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Terms of use for TRADEPROFX services and website
          </p>
          <p className="text-sm opacity-75">Last updated: August 13, 2024</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-6">
                  By accessing and using the TRADEPROFX website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">2. Educational Purpose</h2>
                <p className="text-muted-foreground mb-6">
                  TRADEPROFX provides educational content and analysis related to binary options and Deriv trading. All content, including articles, videos, courses, and recommendations, is for educational purposes only and should not be considered as financial advice or investment recommendations.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">3. Trading Risks and Disclaimers</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">3.1 High-Risk Investment Warning</h3>
                <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-6">
                  <p className="text-destructive font-semibold mb-2">IMPORTANT RISK WARNING:</p>
                  <p className="text-muted-foreground">
                    Binary options trading involves substantial risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">3.2 No Guarantee of Profits</h3>
                <p className="text-muted-foreground mb-6">
                  Past performance does not guarantee future results. No trading strategy or educational content provided by TRADEPROFX guarantees profits or success in trading. All trading involves risk, and individual results may vary significantly.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Personal Responsibility</h3>
                <p className="text-muted-foreground mb-6">
                  You are solely responsible for your trading decisions and any resulting profits or losses. TRADEPROFX is not liable for any losses incurred as a result of using our educational content, strategies, or recommendations.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">4. Website Use and Content</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Permitted Use</h3>
                <p className="text-muted-foreground mb-4">
                  You may use our website and content for personal, non-commercial educational purposes. You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>Reproduce, distribute, or republish our content without permission</li>
                  <li>Use our content for commercial purposes without authorization</li>
                  <li>Attempt to reverse engineer or copy our trading strategies</li>
                  <li>Engage in any activity that disrupts or interferes with our website</li>
                  <li>Use automated systems to access our content</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Intellectual Property</h3>
                <p className="text-muted-foreground mb-6">
                  All content on the TRADEPROFX website, including text, graphics, logos, images, videos, and software, is the property of TRADEPROFX and is protected by copyright and other intellectual property laws.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">5. User Accounts and Conduct</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Account Responsibility</h3>
                <p className="text-muted-foreground mb-6">
                  If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Prohibited Conduct</h3>
                <p className="text-muted-foreground mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>Provide false or misleading information</li>
                  <li>Impersonate any person or entity</li>
                  <li>Engage in any unlawful or fraudulent activity</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Spam or send unsolicited communications</li>
                </ul>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Services and Links</h2>
                <p className="text-muted-foreground mb-6">
                  Our website may contain links to third-party websites or services, including brokers, trading platforms, and other financial services. We do not endorse, control, or assume responsibility for the content, policies, or practices of any third-party websites or services.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">7. Affiliate Relationships</h2>
                <p className="text-muted-foreground mb-6">
                  TRADEPROFX may participate in affiliate programs with brokers and other financial service providers. We may receive compensation when you sign up for services through our affiliate links. This relationship does not affect the price you pay and does not influence our educational content or recommendations.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">8. Google AdSense and Advertising</h2>
                <p className="text-muted-foreground mb-6">
                  Our website displays advertisements through Google AdSense and other advertising networks. We do not control the content of advertisements and are not responsible for the products or services advertised. Users interact with advertisements at their own risk.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  To the maximum extent permitted by applicable law, TRADEPROFX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
                <p className="text-muted-foreground mb-6">
                  You agree to defend, indemnify, and hold harmless TRADEPROFX and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of our services or violation of these terms.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">11. Age Restrictions</h2>
                <p className="text-muted-foreground mb-6">
                  Our services are intended for individuals who are 18 years of age or older. If you are under 18, you may not use our services without parental consent and supervision.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">12. Jurisdiction and Governing Law</h2>
                <p className="text-muted-foreground mb-6">
                  These terms shall be interpreted and governed in accordance with the laws of Kenya. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Kenya.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">13. Modifications to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  TRADEPROFX reserves the right to modify these terms at any time. We will notify users of significant changes by posting the updated terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">14. Termination</h2>
                <p className="text-muted-foreground mb-6">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach these terms.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">15. Severability</h2>
                <p className="text-muted-foreground mb-6">
                  If any provision of these terms is deemed invalid or unenforceable, the remaining provisions shall remain in effect to the fullest extent possible.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-bold text-foreground mb-4">16. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-muted-foreground mb-2"><strong>TRADEPROFX</strong></p>
                  <p className="text-muted-foreground mb-2">Email: support@tradeprofx.com</p>
                  <p className="text-muted-foreground mb-2">Phone: +254 745 339 951</p>
                  <p className="text-muted-foreground">WhatsApp: +254 745 339 951</p>
                </div>

                <div className="mt-8 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Final Disclaimer:</strong> Trading binary options and forex involves significant risk. Only trade with money you can afford to lose. Past performance is not indicative of future results. Seek independent financial advice if necessary.
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

export default Terms;
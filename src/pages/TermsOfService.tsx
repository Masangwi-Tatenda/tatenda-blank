
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { FileText, AlertTriangle, ShieldCheck, ScrollText, ThumbsUp, LinkIcon, Copyright, Info, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Terms of Service"
              subtitle="Last Updated: April 8, 2025"
              className="text-center mb-8"
            />

            <div className="space-y-8 mb-12">
              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <FileText className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Introduction</h2>
                      <p className="text-gray-700 mb-4">
                        Welcome to the Musha WeBetania Parish website. These Terms of Service ("Terms") govern your use of our website located at www.mushawabetania.org (the "Website") and any related services offered by Musha WeBetania Parish ("we", "us", or "our").
                      </p>
                      <p className="text-gray-700">
                        By accessing or using our Website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Website.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <ThumbsUp className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Acceptable Use</h2>
                      <p className="text-gray-700 mb-4">
                        You agree to use our Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behavior includes harassing or causing distress to other users, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our Website.
                      </p>
                      <p className="text-gray-700">
                        Our Website is intended to provide information about our parish, its services, and activities. We expect users to interact with respect, charity, and in accordance with the teachings of the Catholic Church.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <Copyright className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Intellectual Property</h2>
                      <p className="text-gray-700 mb-4">
                        The content on our Website, including without limitation the text, graphics, photos, sounds, music, videos, interactive features, and the like ("Content") and the trademarks, service marks, and logos contained therein are owned by or licensed to Musha WeBetania Parish, subject to copyright and other intellectual property rights under Zimbabwe and international laws and conventions.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Content on the Website is provided to you AS IS for your information and personal use only and may not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes without our prior written consent.
                      </p>
                      <p className="text-gray-700">
                        We respect the intellectual property rights of others. If you believe that any content on our Website infringes upon your copyright, please notify us by using the contact information provided at the end of these Terms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <LinkIcon className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Third-Party Links</h2>
                      <p className="text-gray-700 mb-4">
                        Our Website may contain links to third-party websites or services that are not owned or controlled by Musha WeBetania Parish.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Musha WeBetania Parish has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
                      </p>
                      <p className="text-gray-700">
                        You acknowledge and agree that Musha WeBetania Parish shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <ShieldCheck className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Privacy Policy</h2>
                      <p className="text-gray-700 mb-4">
                        Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and disclose information about you.
                      </p>
                      <p className="text-gray-700">
                        By using our Website, you consent to our collection, use, and disclosure of information as described in our Privacy Policy. You can access our Privacy Policy <Link to="/privacy-policy" className="text-church-burgundy hover:text-church-gold underline">here</Link>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <AlertTriangle className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Disclaimer of Warranties</h2>
                      <p className="text-gray-700 mb-4">
                        Our Website is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We do not warrant that our Website will be uninterrupted or error-free, that defects will be corrected, or that our Website or the servers that make it available are free of viruses or other harmful components.
                      </p>
                      <p className="text-gray-700">
                        While we strive to provide accurate and up-to-date information about parish events, activities, and services, we cannot guarantee the accuracy, completeness, or timeliness of this information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <HeartHandshake className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Limitation of Liability</h2>
                      <p className="text-gray-700 mb-4">
                        In no event shall Musha WeBetania Parish, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                        <li>Your access to or use of or inability to access or use the Website;</li>
                        <li>Any conduct or content of any third party on the Website;</li>
                        <li>Any content obtained from the Website; and</li>
                        <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                      </ul>
                      <p className="text-gray-700">
                        These limitations of liability apply whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <ScrollText className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Changes to These Terms</h2>
                      <p className="text-gray-700 mb-4">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                      </p>
                      <p className="text-gray-700">
                        By continuing to access or use our Website after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Website.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <Info className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Contact Us</h2>
                      <p className="text-gray-700 mb-4">
                        If you have any questions about these Terms, please contact us:
                      </p>
                      <ul className="list-none space-y-2 text-gray-700">
                        <li><strong>By email:</strong> info@mushawabetania.org</li>
                        <li><strong>By phone:</strong> +123 456 7890</li>
                        <li><strong>By mail:</strong> Musha WeBetania Parish, Tangwena Road, Opposite Jongwe Tarven, Chikonohono</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/" className="inline-flex items-center text-church-burgundy hover:text-church-gold transition-colors">
                <span className="mr-2">←</span> Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;

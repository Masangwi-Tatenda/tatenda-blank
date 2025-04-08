
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Shield, Clock, Mail, Eye, Lock, UserRound, Search, Download, Globe, ServerCrash } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
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
              title="Privacy Policy"
              subtitle="Last Updated: April 8, 2025"
              className="text-center mb-8"
            />

            <div className="space-y-8 mb-12">
              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <Eye className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Introduction</h2>
                      <p className="text-gray-700 mb-4">
                        Musha WeBetania Parish ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. 
                        This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                      </p>
                      <p className="text-gray-700">
                        We encourage you to read this policy carefully to understand our practices regarding your personal information and how we treat it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <UserRound className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Information We Collect</h2>
                      <p className="text-gray-700 mb-4">
                        We may collect several types of information from and about users of our website, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                        <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide when registering for events, signing up for our newsletter, or contacting us.</li>
                        <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system, and platform.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                        <li><strong>Sacramental Records:</strong> We maintain confidential records for sacraments such as Baptism, First Communion, Confirmation, and Marriage. These records are protected and handled according to Church law.</li>
                      </ul>
                      <p className="text-gray-700">
                        We do not collect any Special Categories of Personal Data (such as details about your race, ethnicity, religious or philosophical beliefs, political opinions, trade union membership, health, or sexual orientation) unless you voluntarily provide such information when necessary for specific pastoral care or sacramental purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <Search className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">How We Use Your Information</h2>
                      <p className="text-gray-700 mb-4">
                        We use the information we collect for various purposes, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                        <li>To provide and maintain our services</li>
                        <li>To notify you about changes to our services</li>
                        <li>To allow you to participate in interactive features of our website</li>
                        <li>To provide pastoral care and support</li>
                        <li>To manage and administer sacramental preparation and records</li>
                        <li>To send newsletters and other parish communications</li>
                        <li>To organize parish events and activities</li>
                        <li>To improve our website and services</li>
                        <li>To respond to your inquiries and questions</li>
                      </ul>
                      <p className="text-gray-700">
                        We will only use your personal information for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason compatible with the original purpose.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <Globe className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Cookies and Tracking Technologies</h2>
                      <p className="text-gray-700 mb-4">
                        We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                      </p>
                      <p className="text-gray-700 mb-4">
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                      </p>
                      <p className="text-gray-700">
                        We use the following types of cookies:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Essential Cookies:</strong> Required for the operation of our website.</li>
                        <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count visitors and see how visitors move around our website.</li>
                        <li><strong>Functionality Cookies:</strong> Enable us to personalize content and remember your preferences.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <Lock className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Data Security</h2>
                      <p className="text-gray-700 mb-4">
                        We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Additionally, we limit access to your personal data to those employees, volunteers, and third parties who have a need to know.
                      </p>
                      <p className="text-gray-700">
                        We have procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <Clock className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Data Retention</h2>
                      <p className="text-gray-700 mb-4">
                        We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including satisfying any legal, accounting, or reporting requirements.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Sacramental records are maintained permanently as required by Canon Law. Other information, such as registration for events or programs, may be kept for a shorter period, typically up to 7 years after your last interaction with us.
                      </p>
                      <p className="text-gray-700">
                        To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process the data, and whether we can achieve those purposes through other means.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <ServerCrash className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Your Data Protection Rights</h2>
                      <p className="text-gray-700 mb-4">
                        Depending on your location, you may have certain rights regarding your personal information, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                        <li><strong>Access:</strong> The right to request copies of your personal information.</li>
                        <li><strong>Rectification:</strong> The right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                        <li><strong>Erasure:</strong> The right to request that we erase your personal information, under certain conditions. This right may be limited for sacramental records which are maintained permanently according to Church law.</li>
                        <li><strong>Restriction of processing:</strong> The right to request that we restrict the processing of your personal information, under certain conditions.</li>
                        <li><strong>Object to processing:</strong> The right to object to our processing of your personal information, under certain conditions.</li>
                        <li><strong>Data portability:</strong> The right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
                      </ul>
                      <p className="text-gray-700">
                        If you wish to exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <Download className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Third-Party Websites</h2>
                      <p className="text-gray-700 mb-4">
                        Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                      </p>
                      <p className="text-gray-700">
                        We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/20 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-church-burgundy/10 p-3 rounded-full">
                      <Mail className="text-church-burgundy h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-church-burgundy">Contact Us</h2>
                      <p className="text-gray-700 mb-4">
                        If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;

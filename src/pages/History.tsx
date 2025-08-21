import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import SanityImage from '@/components/common/SanityImage';
import { Card, CardContent } from '@/components/ui/card';
import { useSanity } from '@/contexts/SanityContext';

const History = () => {
  const { aboutPage } = useSanity();
  
  // Mock historical data - this would come from Sanity in a real implementation
  const historyTimeline = [
    {
      year: "1875",
      title: "Foundation",
      description: "St. Michael's Parish was founded by Irish immigrants who settled in the area."
    },
    {
      year: "1890",
      title: "First Church Building",
      description: "The first permanent church building was constructed with donations from the growing Catholic community."
    },
    {
      year: "1925",
      title: "School Establishment",
      description: "St. Michael's Catholic School was established to provide education rooted in Catholic values."
    },
    {
      year: "1960",
      title: "Church Expansion",
      description: "The church was expanded to accommodate the growing parish community."
    },
    {
      year: "1985",
      title: "Modernization",
      description: "Major renovations brought modern amenities while preserving the historic character."
    },
    {
      year: "2010",
      title: "Community Center",
      description: "The new parish community center was built to serve various ministries and events."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="relative bg-gradient-to-r from-church-burgundy to-church-gold text-white py-16">
          <div className="container-custom mx-auto px-4">
            <SectionTitle 
              title="Our History"
              subtitle="A legacy of faith spanning generations"
              align="center"
              className="text-white"
            />
          </div>
        </div>

        <div className="container-custom mx-auto px-4 py-16">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-church-burgundy mb-6">
                  {aboutPage?.historyTitle || "Our Parish Story"}
                </h2>
                <div className="prose prose-lg text-gray-700">
                  {aboutPage?.historyContent ? (
                    // This would render Sanity portable text content
                    <p>
                      St. Michael's Parish has been a cornerstone of faith in our community for over 150 years. 
                      From humble beginnings as a small gathering of Catholic families to our vibrant parish community today, 
                      our history is one of dedication, growth, and unwavering faith.
                    </p>
                  ) : (
                    <p>
                      St. Michael's Parish has been a cornerstone of faith in our community for over 150 years. 
                      From humble beginnings as a small gathering of Catholic families to our vibrant parish community today, 
                      our history is one of dedication, growth, and unwavering faith.
                    </p>
                  )}
                </div>
              </div>
              <div className="relative">
                {aboutPage?.historyImage ? (
                  <SanityImage
                    image={aboutPage.historyImage}
                    alt="Historical church image"
                    className="rounded-lg shadow-lg"
                  />
                ) : (
                  <img
                    src="/api/placeholder/500/400"
                    alt="Historical church"
                    className="rounded-lg shadow-lg w-full"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-church-burgundy text-center mb-12">
              Parish Timeline
            </h2>
            
            <div className="space-y-8">
              {historyTimeline.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-church-burgundy text-white px-4 py-2 rounded-full text-xl font-bold">
                          {event.year}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-church-burgundy mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-700">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Heritage Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-r from-church-burgundy/5 to-church-gold/5">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-church-burgundy text-center mb-6">
                  Our Heritage
                </h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="text-center mb-6">
                    "Therefore, since we are surrounded by such a great cloud of witnesses, 
                    let us throw off everything that hinders and the sin that so easily entangles. 
                    And let us run with perseverance the race marked out for us."
                  </p>
                  <p className="text-center text-sm text-gray-600 italic">
                    - Hebrews 12:1
                  </p>
                  <p className="mt-6">
                    Our parish continues to build upon the strong foundation laid by generations before us. 
                    We honor their memory by maintaining the traditions they cherished while embracing 
                    new ways to serve our community and spread the Gospel message.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
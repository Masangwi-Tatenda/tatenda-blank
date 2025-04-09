
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Church, Book, Users, FileText, Heart, Calendar, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ParishExecutive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Parish Leadership"
            subtitle="Meet the team guiding our parish community and ministries"
          />

          <div className="flex items-center justify-center mb-8">
            <Button asChild variant="outline" className="mb-4">
              <Link to="/about" className="inline-flex items-center">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to About Page
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto mt-6">
            {/* Parish Priest */}
            <div className="text-center mb-16">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-church-burgundy shadow-lg">
                <img 
                  src="https://source.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="Fr. James Ndoro" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 -mt-10 mb-4 rounded-full bg-church-burgundy flex items-center justify-center mx-auto border-4 border-white shadow-md">
                <Church className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-church-burgundy mb-1">Fr. James Ndoro</h2>
              <p className="text-church-gold font-medium mb-3">Parish Priest</p>
              <p className="text-gray-600 max-w-md mx-auto">
                Leading our parish since 2018, Fr. James oversees all pastoral and administrative aspects of our community. He holds a Master's in Theology and is dedicated to strengthening our faith community.
              </p>
            </div>

            {/* Assistant Priest Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Assistant Priest */}
              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-church-burgundy shadow-md">
                  <img 
                    src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9"
                    alt="Fr. Thomas Matonga" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 -mt-8 mb-4 rounded-full bg-church-gold flex items-center justify-center mx-auto border-3 border-white shadow-md">
                  <Church className="h-6 w-6 text-church-navy" />
                </div>
                <h2 className="text-lg font-bold text-church-burgundy mb-1">Fr. Thomas Matonga</h2>
                <p className="text-church-gold font-medium mb-2">Assistant Priest</p>
                <p className="text-gray-600 text-sm">
                  Working alongside Fr. James in providing pastoral care and sacramental ministries to our parish. Fr. Thomas has a special focus on youth and family ministries.
                </p>
              </div>

              {/* Deacon */}
              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-church-burgundy shadow-md">
                  <img 
                    src="https://source.unsplash.com/photo-1582562124811-c09040d0a901"
                    alt="Deacon Peter Moyo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 -mt-8 mb-4 rounded-full bg-church-gold flex items-center justify-center mx-auto border-3 border-white shadow-md">
                  <Book className="h-6 w-6 text-church-navy" />
                </div>
                <h2 className="text-lg font-bold text-church-burgundy mb-1">Dcn. Peter Moyo</h2>
                <p className="text-church-gold font-medium mb-2">Deacon</p>
                <p className="text-gray-600 text-sm">
                  Assisting in liturgical celebrations and leading community outreach initiatives. Deacon Peter also coordinates our Sacramental preparation programs.
                </p>
              </div>
            </div>

            {/* Parish Council Leadership */}
            <Card className="mb-12 bg-church-cream/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-6 text-center">Parish Pastoral Council</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Chairperson */}
                  <div className="text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-church-burgundy/70 shadow-md">
                      <img 
                        src="https://source.unsplash.com/photo-1582562124811-c09040d0a901"
                        alt="Mr. Joseph Takawira" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 -mt-6 mb-2 rounded-full bg-church-burgundy/90 flex items-center justify-center mx-auto border-2 border-white shadow-md">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-base font-bold text-church-burgundy mb-1">Mr. Joseph Takawira</h2>
                    <p className="text-church-gold font-medium mb-2">Council Chair</p>
                    <p className="text-gray-600 text-sm">
                      Leads the Parish Council and works closely with the clergy to guide parish initiatives.
                    </p>
                  </div>

                  {/* Vice Chair */}
                  <div className="text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-church-burgundy/70 shadow-md">
                      <img 
                        src="https://source.unsplash.com/photo-1515733782105-84a8df52751d"
                        alt="Mrs. Grace Mutema" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 -mt-6 mb-2 rounded-full bg-church-burgundy/90 flex items-center justify-center mx-auto border-2 border-white shadow-md">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-base font-bold text-church-burgundy mb-1">Mrs. Grace Mutema</h2>
                    <p className="text-church-gold font-medium mb-2">Vice Chair</p>
                    <p className="text-gray-600 text-sm">
                      Assists the chairperson and oversees parish communications and events.
                    </p>
                  </div>

                  {/* Secretary */}
                  <div className="text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-church-burgundy/70 shadow-md">
                      <img 
                        src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9"
                        alt="Mr. Francis Chideme" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 -mt-6 mb-2 rounded-full bg-church-burgundy/90 flex items-center justify-center mx-auto border-2 border-white shadow-md">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-base font-bold text-church-burgundy mb-1">Mr. Francis Chideme</h2>
                    <p className="text-church-gold font-medium mb-2">Secretary</p>
                    <p className="text-gray-600 text-sm">
                      Maintains records of council meetings and parish communication.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Committee Leaders */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-center text-church-burgundy mb-8">Committee Leaders</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {/* Finance Chair */}
                  <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-church-burgundy/50 shadow-md">
                      <img 
                        src="https://source.unsplash.com/photo-1582562124811-c09040d0a901"
                        alt="Mr. Farai Mukonoweshuro" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-bold text-church-burgundy mb-1">Mr. Farai Mukonoweshuro</h2>
                    <p className="text-church-gold font-medium mb-1 text-xs">Finance Committee</p>
                  </div>

                  {/* Liturgy Chair */}
                  <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-church-burgundy/50 shadow-md">
                      <img 
                        src="https://source.unsplash.com/photo-1515733782105-84a8df52751d"
                        alt="Mrs. Patricia Zambezi" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-bold text-church-burgundy mb-1">Mrs. Patricia Zambezi</h2>
                    <p className="text-church-gold font-medium mb-1 text-xs">Liturgy Committee</p>
                  </div>

                  {/* Formation Chair */}
                  <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-church-burgundy/50 shadow-md">
                      <img 
                        src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9"
                        alt="Mr. Richard Madzima" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-bold text-church-burgundy mb-1">Mr. Richard Madzima</h2>
                    <p className="text-church-gold font-medium mb-1 text-xs">Catechesis</p>
                  </div>

                  {/* Outreach Chair */}
                  <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-church-burgundy/50 shadow-md">
                      <img 
                        src="https://source.unsplash.com/photo-1515733782105-84a8df52751d"
                        alt="Mrs. Christine Gono" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-bold text-church-burgundy mb-1">Mrs. Christine Gono</h2>
                    <p className="text-church-gold font-medium mb-1 text-xs">Outreach</p>
                  </div>
                  
                  {/* Youth Chair */}
                  <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-church-burgundy/50 shadow-md">
                      <img 
                        src="https://source.unsplash.com/photo-1500648767791-00dcc994a43e"
                        alt="Mr. Maxwell Chadzuka" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-bold text-church-burgundy mb-1">Mr. Maxwell Chadzuka</h2>
                    <p className="text-church-gold font-medium mb-1 text-xs">Youth Ministry</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parish Structure Info */}
            <Card className="bg-church-light-gold/30 mb-12">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-church-burgundy mb-4">Parish Governance</h3>
                <p className="text-gray-700 mb-4">
                  Our parish governance follows the structure established by Canon Law and diocesan norms. The Bishop appoints the Parish Priest, who has primary responsibility for the pastoral and administrative care of the parish.
                </p>
                <p className="text-gray-700">
                  The Parish Pastoral Council advises the priest and helps implement the parish vision. Various committees focus on specific aspects of parish life: the Finance Committee manages parish resources; the Liturgy Committee plans and coordinates liturgical celebrations; the Catechesis Committee oversees faith formation programs; the Outreach Committee coordinates charitable initiatives; and the Youth Ministry Committee coordinates programs for young people.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-gray-700 mb-4">
                If you have questions or would like to get involved with parish leadership, please contact the parish office.
              </p>
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParishExecutive;

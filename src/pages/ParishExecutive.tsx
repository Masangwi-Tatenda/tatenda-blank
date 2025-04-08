
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

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
            title="Parish Executive Committee"
            subtitle="Meet the leadership team guiding our parish community"
          />

          <div className="max-w-4xl mx-auto mt-12">
            {/* Parish Priest */}
            <div className="text-center mb-16">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-church-burgundy shadow-lg">
                <img 
                  src="https://source.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="Fr. James Ndoro" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-church-burgundy mb-1">Fr. James Ndoro</h2>
              <p className="text-church-gold font-medium mb-3">Parish Priest</p>
              <p className="text-gray-600 max-w-md mx-auto">
                Leading our parish since 2018, Fr. James oversees all pastoral and administrative aspects of our community.
              </p>
            </div>

            {/* Assistant Priest Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Assistant Priest */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-church-burgundy shadow-md">
                  <img 
                    src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9"
                    alt="Fr. Thomas Matonga" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-bold text-church-burgundy mb-1">Fr. Thomas Matonga</h2>
                <p className="text-church-gold font-medium mb-2">Assistant Priest</p>
                <p className="text-gray-600 text-sm">
                  Working alongside Fr. James in providing pastoral care and sacramental ministries to our parish.
                </p>
              </div>

              {/* Deacon */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-church-burgundy shadow-md">
                  <img 
                    src="https://source.unsplash.com/photo-1582562124811-c09040d0a901"
                    alt="Deacon Peter Moyo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-bold text-church-burgundy mb-1">Dcn. Peter Moyo</h2>
                <p className="text-church-gold font-medium mb-2">Deacon</p>
                <p className="text-gray-600 text-sm">
                  Assisting in liturgical celebrations and leading community outreach initiatives.
                </p>
              </div>
            </div>

            {/* Parish Council Leadership */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Chairperson */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-church-burgundy/70 shadow-md">
                  <img 
                    src="https://source.unsplash.com/photo-1582562124811-c09040d0a901"
                    alt="Mr. Joseph Takawira" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-base font-bold text-church-burgundy mb-1">Mr. Joseph Takawira</h2>
                <p className="text-church-gold font-medium mb-2">Parish Council Chair</p>
                <p className="text-gray-600 text-sm">
                  Leads the Parish Council and works closely with the clergy to guide parish initiatives.
                </p>
              </div>

              {/* Vice Chair */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-church-burgundy/70 shadow-md">
                  <img 
                    src="https://source.unsplash.com/photo-1515733782105-84a8df52751d"
                    alt="Mrs. Grace Mutema" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-base font-bold text-church-burgundy mb-1">Mrs. Grace Mutema</h2>
                <p className="text-church-gold font-medium mb-2">Vice Chair</p>
                <p className="text-gray-600 text-sm">
                  Assists the chairperson and oversees parish communications and events.
                </p>
              </div>

              {/* Secretary */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-church-burgundy/70 shadow-md">
                  <img 
                    src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9"
                    alt="Mr. Francis Chideme" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-base font-bold text-church-burgundy mb-1">Mr. Francis Chideme</h2>
                <p className="text-church-gold font-medium mb-2">Secretary</p>
                <p className="text-gray-600 text-sm">
                  Maintains records of council meetings and parish communication.
                </p>
              </div>
            </div>

            {/* Committee Leaders */}
            <h3 className="text-xl font-bold text-center text-church-burgundy mb-8">Committee Leaders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Finance Chair */}
              <div className="text-center">
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
              <div className="text-center">
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
              <div className="text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-church-burgundy/50 shadow-md">
                  <img 
                    src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9"
                    alt="Mr. Richard Madzima" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-sm font-bold text-church-burgundy mb-1">Mr. Richard Madzima</h2>
                <p className="text-church-gold font-medium mb-1 text-xs">Formation Committee</p>
              </div>

              {/* Outreach Chair */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-church-burgundy/50 shadow-md">
                  <img 
                    src="https://source.unsplash.com/photo-1515733782105-84a8df52751d"
                    alt="Mrs. Christine Gono" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-sm font-bold text-church-burgundy mb-1">Mrs. Christine Gono</h2>
                <p className="text-church-gold font-medium mb-1 text-xs">Outreach Committee</p>
              </div>
            </div>

            {/* Parish Structure Info */}
            <Card className="bg-church-light-gold/30 mb-12">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-church-burgundy mb-4">Parish Structure</h3>
                <p className="text-gray-700 mb-4">
                  Our parish is led by the Parish Priest, assisted by the Assistant Priest and Deacon. The Parish Council, comprised of elected lay representatives, works with the clergy to oversee parish life and activities.
                </p>
                <p className="text-gray-700">
                  Various committees focus on specific aspects of parish life: the Finance Committee manages parish resources; the Liturgy Committee plans and coordinates liturgical celebrations; the Formation Committee oversees faith formation programs; and the Outreach Committee coordinates charitable and community service initiatives.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-gray-700 mb-4">
                If you have questions or would like to get involved with parish leadership, please contact the parish office.
              </p>
              <Link to="/contact" className="inline-block px-6 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParishExecutive;

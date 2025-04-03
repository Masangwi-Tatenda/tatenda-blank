
import React, { useEffect } from 'react';
import SacramentLayout from '@/components/sacraments/SacramentLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, FileText, HelpCircle, User } from 'lucide-react';

const Baptism = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SacramentLayout
      title="Baptism"
      subtitle="The Sacrament of New Life in Christ"
      heroImage="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className='text-church-burgundy'>What is Baptism?</h2>
        <p>
          Baptism is the first of the seven sacraments and the "door" which gives access to the other sacraments. 
          Baptism is the first and chief sacrament of forgiveness of sins because it unites us with Christ, who 
          died for our sins and rose for our justification. Baptism, Confirmation, and Eucharist constitute the 
          "sacraments of initiation" by which a believer receives the fullness of grace needed for living the 
          Christian life.
        </p><br></br>
        
        <blockquote>
          "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the 
          Son and of the Holy Spirit, teaching them to observe all that I have commanded you." 
          <footer className='text-church-burgundy'>— Matthew 28:19-20</footer><br></br>
        </blockquote>
        
        <p>
          Through Baptism we are freed from sin and reborn as children of God; we become members of Christ, 
          are incorporated into the Church and made sharers in her mission.
        </p>
        
        <Tabs defaultValue="requirements" className="mt-8">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="preparation">Preparation</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="requirements" className="mt-0">
            <h3 className='text-church-burgundy'>Requirements for Infant Baptism</h3><br></br>
            <ul>
              <li><strong>Parental Request:</strong> At least one parent must request the Baptism and consent to the child being raised in the Catholic faith.</li>
              <li><strong>Godparents:</strong> At least one godparent who is a practicing Catholic, has received Confirmation, and is at least 16 years old.</li>
              <li><strong>Documentation:</strong> Birth certificate of the child and baptismal certificates of the godparents.</li>
              <li><strong>Preparation:</strong> Parents and godparents must attend a baptismal preparation class.</li>
            </ul><br></br>
            
            <h3 className='text-church-burgundy'>Requirements for Adult Baptism</h3><br></br>
            <p><strong>Adults seeking Baptism must:</strong></p>
            <ul>
              <li>Participate in the Rite of Christian Initiation of Adults (RCIA) program.</li>
              <li>Have a sponsor who is a practicing Catholic.</li>
              <li>Show understanding of and commitment to the Catholic faith.</li>
              <li>Provide necessary documentation, including birth certificate.</li>
            </ul>
          </TabsContent>
          
          <TabsContent value="preparation" className="mt-0">
            <h3>Preparation Process</h3>
            <p>Preparing for Baptism involves spiritual, educational, and practical steps:</p>
            
            <h4>For Infant Baptism:</h4>
            <ol>
              <li><strong>Initial Contact:</strong> Parents should contact the parish office at least three months before the desired Baptism date.</li>
              <li><strong>Meeting with Priest:</strong> A meeting with our parish priest to discuss the sacrament and the responsibilities of raising a child in the faith.</li>
              <li><strong>Baptismal Preparation Class:</strong> Parents and godparents must attend a preparation class that explains the theology and ritual of Baptism.</li>
              <li><strong>Selection of Godparents:</strong> Choose godparents who meet the requirements and will be supportive in the child's faith journey.</li>
              <li><strong>Documentation:</strong> Submit all required documents to the parish office.</li>
            </ol>
            
            <h4>For Adult Baptism:</h4>
            <p>Adults prepare for Baptism through the Rite of Christian Initiation of Adults (RCIA) process, which includes:</p>
            <ol>
              <li><strong>Period of Inquiry:</strong> Learning about the Catholic faith.</li>
              <li><strong>Catechumenate:</strong> Deeper study of Catholic teachings and practices.</li>
              <li><strong>Purification and Enlightenment:</strong> Spiritual preparation during Lent.</li>
              <li><strong>Sacraments of Initiation:</strong> Receiving Baptism, Confirmation, and First Eucharist at the Easter Vigil.</li>
              <li><strong>Mystagogy:</strong> Continued reflection on the sacraments and Catholic life.</li>
            </ol>
          </TabsContent>
          
          <TabsContent value="schedule" className="mt-0">
            <h3>Baptism Schedule</h3>
            <p>At Musha WeBetania Parish, Baptisms are regularly scheduled as follows:</p>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-church-burgundy flex items-center mb-4">
                    <CalendarDays className="mr-2 text-church-gold" />
                    Infant Baptisms
                  </h4>
                  <ul className="space-y-2">
                    <li><strong>2nd Sunday:</strong> During the 9:00 AM Mass</li>
                    <li><strong>4th Sunday:</strong> After the 11:00 AM Mass</li>
                    <li><strong>Individual Arrangements:</strong> Special circumstances can be discussed with the parish priest</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Note: During Lent, Baptisms are typically not celebrated except in cases of emergency.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-church-burgundy flex items-center mb-4">
                    <CalendarDays className="mr-2 text-church-gold" />
                    Adult Baptisms
                  </h4>
                  <p>Adult Baptisms are celebrated at the Easter Vigil as part of the RCIA process.</p>
                  <p className="mt-2">The RCIA program typically begins in September and continues through the Easter season.</p>
                  <p className="mt-4 text-sm text-gray-600">
                    For urgent situations or special circumstances, please contact the parish office.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 bg-church-burgundy/10 p-6 rounded-lg border border-church-burgundy/20">
              <h4 className="text-xl font-bold text-church-burgundy mb-3">Ready to Schedule a Baptism?</h4>
              <p className="mb-4">To begin the process or request more information, please contact our parish office or fill out our baptism request form.</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Contact Parish Office</Link>
                </Button>
                <Button variant="outline" className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                  Download Baptism Form
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-0">
            <h3 className="flex items-center">
              <HelpCircle className="mr-2 text-church-gold" />
              Frequently Asked Questions
            </h3>
            
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">How old should my child be for Baptism?</h4>
                <p>In the Catholic Church, infants are typically baptized within the first few months of life. However, there is no age limit, and children of any age can be baptized.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">Can we choose any name for our child's Baptism?</h4>
                <p>While parents have freedom in choosing names, the Church encourages including a saint's name or a Christian virtue as part of the child's name to provide a model of Christian life.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">What if one parent is not Catholic?</h4>
                <p>A child can be baptized if at least one parent is Catholic and intends to raise the child in the Catholic faith. The non-Catholic parent should be informed and not object to the child's Catholic upbringing.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">How many godparents should a child have?</h4>
                <p>A child must have at least one godparent (sponsor) who is a practicing Catholic. Traditionally, children have two godparents – one male and one female – but this is not required.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">What if a potential godparent cannot attend the Baptism?</h4>
                <p>If a godparent cannot be physically present at the Baptism, they can be represented by a proxy. The godparent's name will still appear in the baptismal record.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">Is there a fee for Baptism?</h4>
                <p>Sacraments are gifts from God and are not "sold." However, it is customary to make an offering to the Church. This offering supports the parish's ministry and is not a payment for the sacrament.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SacramentLayout>
  );
};

export default Baptism;

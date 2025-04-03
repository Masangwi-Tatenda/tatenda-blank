
import React, { useEffect } from 'react';
import SacramentLayout from '@/components/sacraments/SacramentLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, FileText, HelpCircle, User } from 'lucide-react';

const Communion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SacramentLayout
      title="First Holy Communion"
      subtitle="Receiving the Eucharist for the first time"
      heroImage="https://images.unsplash.com/photo-1515126610754-40f9c9fad774?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="prose prose-lg max-w-none">
        <h2>First Holy Communion</h2>
        <p>
          First Holy Communion is a sacred event in the life of a Catholic child when they receive the 
          Eucharist for the first time. The Eucharist is the sacrament in which Catholics receive the Body 
          and Blood of Jesus Christ. Catholics believe that through the consecration of the bread and wine, 
          these elements truly become the Body and Blood of Christ, while retaining the appearance of bread and wine.
        </p>
        
        <blockquote>
          "I am the living bread that came down from heaven. Whoever eats this bread will live forever. 
          This bread is my flesh, which I will give for the life of the world." 
          <footer>— John 6:51</footer>
        </blockquote>
        
        <p>
          First Communion is an important milestone in a child's spiritual journey and a significant step in their 
          initiation into the Catholic Church, following Baptism and preceding Confirmation.
        </p>
        
        <Tabs defaultValue="preparation" className="mt-8">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="preparation">Preparation</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="preparation" className="mt-0">
            <h3>Preparation for First Holy Communion</h3>
            <p>
              Preparation for First Holy Communion is a journey of faith that involves the child, their family, 
              and the parish community. At Musha WeBetania Parish, we take this preparation very seriously, 
              ensuring that children understand the significance of the sacrament they are about to receive.
            </p>
            
            <h4>Our Preparation Program Includes:</h4>
            <ul>
              <li><strong>Religious Education Classes:</strong> Children attend weekly classes that cover the basics of Catholic faith, with special emphasis on the Eucharist.</li>
              <li><strong>Parent Meetings:</strong> Parents participate in meetings to help them support their child's preparation at home.</li>
              <li><strong>First Reconciliation:</strong> Before receiving First Communion, children prepare for and receive the Sacrament of Reconciliation (Confession).</li>
              <li><strong>Retreat Day:</strong> A special day of reflection and activities focused on the Eucharist.</li>
              <li><strong>Practice Sessions:</strong> To familiarize children with the Mass and the process of receiving Communion.</li>
            </ul>
            
            <h4>What Children Learn:</h4>
            <ul>
              <li>The story of the Last Supper and how Jesus instituted the Eucharist</li>
              <li>The parts of the Mass and their significance</li>
              <li>How to receive Communion reverently</li>
              <li>Basic prayers, including the Our Father, Hail Mary, and the Act of Contrition</li>
              <li>The Ten Commandments and how to live a Christian life</li>
            </ul>
            
            <div className="bg-church-gold/10 p-6 rounded-lg border border-church-gold/30 mt-6">
              <h4 className="text-xl font-bold text-church-burgundy mb-2">Register for First Communion Preparation</h4>
              <p className="mb-4">
                If your child is ready to begin preparation for First Holy Communion, please contact our Faith Formation Office to register for the next program.
              </p>
              <Button asChild>
                <Link to="/contact">Contact Faith Formation Office</Link>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="requirements" className="mt-0">
            <h3>Requirements for First Holy Communion</h3>
            
            <h4>For the Child:</h4>
            <ul>
              <li><strong>Age:</strong> Typically, children receive First Communion in second grade (around age 7-8), which is considered the age of reason when children can distinguish right from wrong and understand the significance of the sacrament.</li>
              <li><strong>Baptism:</strong> The child must be baptized in the Catholic Church. If baptized in another parish, a baptismal certificate must be provided.</li>
              <li><strong>Preparation:</strong> Completion of the parish's First Communion preparation program, including regular attendance at religious education classes.</li>
              <li><strong>First Reconciliation:</strong> The child must receive the Sacrament of Reconciliation before First Communion.</li>
              <li><strong>Understanding:</strong> The child should demonstrate a basic understanding of the Eucharist appropriate to their age.</li>
            </ul>
            
            <h4>For Parents:</h4>
            <ul>
              <li><strong>Support:</strong> Parents are expected to support their child's preparation by attending parent meetings, helping with homework, and reinforcing what is learned in class.</li>
              <li><strong>Mass Attendance:</strong> Families should attend Mass regularly to help the child understand the importance of the Eucharist in Catholic life.</li>
              <li><strong>Prayer Life:</strong> Parents should help develop their child's prayer life at home.</li>
            </ul>
            
            <h4>Documentation Required:</h4>
            <ul>
              <li>Child's Baptismal Certificate (if baptized outside our parish)</li>
              <li>Registration Form</li>
              <li>Fee for materials (financial assistance available if needed)</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-xl font-bold text-church-burgundy mb-4">Special Circumstances</h4>
              <p>
                We welcome children with special needs and will adapt our program to accommodate them. 
                Please contact our Faith Formation Office to discuss your child's specific needs.
              </p>
              <p className="mt-2">
                For children who are older than the typical First Communion age, we offer adapted programs. 
                These children may participate in the Rite of Christian Initiation adapted for Children (RCIC).
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="schedule" className="mt-0">
            <h3>First Communion Schedule</h3>
            <p>
              At Musha WeBetania Parish, First Holy Communion is typically celebrated in the Easter season. 
              The preparation program begins in the fall and continues throughout the school year.
            </p>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-church-burgundy flex items-center mb-4">
                    <CalendarDays className="mr-2 text-church-gold" />
                    Current Year Schedule (2024-2025)
                  </h4>
                  <ul className="space-y-3">
                    <li><strong>Registration Deadline:</strong> August 31, 2024</li>
                    <li><strong>Parent Orientation:</strong> September 12, 2024</li>
                    <li><strong>Classes Begin:</strong> September 18, 2024</li>
                    <li><strong>First Reconciliation Retreat:</strong> January 18, 2025</li>
                    <li><strong>First Reconciliation:</strong> January 25, 2025</li>
                    <li><strong>First Communion Retreat:</strong> April 26, 2025</li>
                    <li><strong>First Communion Mass:</strong> May 3, 2025 at 10:00 AM</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Classes are held every Wednesday from 4:30 PM to 5:45 PM.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-church-burgundy flex items-center mb-4">
                    <FileText className="mr-2 text-church-gold" />
                    Important Information
                  </h4>
                  <p className="mb-4">
                    First Communion is typically celebrated as a special Mass dedicated to the First Communicants. 
                    Children wear special attire and are seated together with their families.
                  </p>
                  <h5 className="font-bold mb-2">What to Bring on First Communion Day:</h5>
                  <ul className="space-y-1">
                    <li>First Communion certificate (provided by the parish)</li>
                    <li>Prayer book (optional)</li>
                    <li>Rosary (optional)</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Photography guidelines will be provided at the parent meeting before First Communion.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 bg-church-burgundy/10 p-6 rounded-lg border border-church-burgundy/20">
              <h4 className="text-xl font-bold text-church-burgundy mb-3">Registration Information</h4>
              <p className="mb-4">
                To register your child for First Communion preparation, please complete the registration form 
                and return it to the parish office with the required documentation and fee.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Contact Faith Formation Office</Link>
                </Button>
                <Button variant="outline" className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                  Download Registration Form
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-0">
            <h3 className="flex items-center mb-6">
              <HelpCircle className="mr-2 text-church-gold" />
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">What is the appropriate age for First Communion?</h4>
                <p>
                  In our parish, children typically receive First Communion in second grade (around age 7-8), 
                  which is considered the age of reason. However, we accommodate children of various ages and 
                  special circumstances.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">What should my child wear for First Communion?</h4>
                <p>
                  First Communion is a special occasion, and children traditionally dress in their best attire. 
                  Girls typically wear white dresses symbolizing purity, often with veils. Boys typically wear 
                  suits or dress shirts with ties. The focus should be on modest, respectful clothing that helps 
                  the child understand the sacredness of the occasion.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">What if my child was baptized in another parish or denomination?</h4>
                <p>
                  If your child was baptized in another Catholic parish, you will need to provide a copy of their 
                  baptismal certificate. If your child was baptized in another Christian denomination with a valid 
                  baptism (using water and the Trinitarian formula), they will need to make a Profession of Faith 
                  before First Communion. Please discuss this with our Faith Formation Office.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">What if we miss some classes?</h4>
                <p>
                  Regular attendance is important for proper preparation. If classes are missed, parents should 
                  contact the Faith Formation Office to arrange for make-up work. Excessive absences may require 
                  additional preparation or delay in receiving the sacrament.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">How can parents help prepare their child at home?</h4>
                <p>
                  Parents play a crucial role in sacramental preparation by:
                </p>
                <ul className="mt-2">
                  <li>Attending Mass regularly with their child</li>
                  <li>Praying together as a family</li>
                  <li>Discussing what is learned in preparation classes</li>
                  <li>Reading Bible stories about Jesus and the Last Supper</li>
                  <li>Setting a good example of living the Catholic faith</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-church-burgundy">What if my child has special needs?</h4>
                <p>
                  We are committed to making sacramental preparation accessible to all children. 
                  Our Faith Formation Office will work with you to adapt the program to accommodate your child's 
                  specific needs. Please contact us to discuss the best approach for your child.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="mb-4">
                Have additional questions about First Communion at our parish?
              </p>
              <Button asChild>
                <Link to="/contact">Contact Faith Formation Office</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SacramentLayout>
  );
};

export default Communion;


import React, { useEffect } from 'react';
import SacramentLayout from '@/components/sacraments/SacramentLayout';

const Confirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SacramentLayout
      title="Confirmation"
      subtitle="Strengthening the gifts of the Holy Spirit"
      heroImage="https://images.unsplash.com/photo-1592562746476-cd6252623810?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="prose prose-lg max-w-none">
        <h2>The Sacrament of Confirmation</h2>
        <p>
          Confirmation is one of the seven sacraments of the Catholic Church. It is the sacrament that completes Baptism and is received after thorough preparation. In Confirmation, the Holy Spirit strengthens the baptized person for their role in building up the Church and living out the faith in today's world.
        </p>
        
        <blockquote>
          "When the day of Pentecost had come, they were all together in one place. And suddenly a sound came from heaven like the rush of a mighty wind, and it filled all the house where they were sitting. And there appeared to them tongues as of fire, distributed and resting on each one of them. And they were all filled with the Holy Spirit." 
          <footer>— Acts 2:1-4</footer>
        </blockquote>
        
        <p>
          The outpouring of the Holy Spirit at Pentecost is mirrored in the Sacrament of Confirmation, where the confirmed receive the gifts of the Holy Spirit: wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord.
        </p>
        
        <h3>Who Can Receive Confirmation?</h3>
        <p>
          In our parish, Confirmation is typically received:
        </p>
        <ul>
          <li>By youth in grades 8-12 who have been baptized and received First Communion</li>
          <li>By adults who were baptized Catholic but never confirmed</li>
          <li>By adults entering the Catholic Church through the RCIA process, who receive Confirmation along with Baptism and First Communion at the Easter Vigil</li>
        </ul>
        
        <h3>Preparation Program</h3>
        <p>
          Preparation for Confirmation is a journey of faith that involves:
        </p>
        <ul>
          <li><strong>Faith Formation Classes:</strong> Weekly or bi-weekly sessions that explore the Catholic faith, the meaning of Confirmation, and the role of the Holy Spirit in Christian life.</li>
          <li><strong>Retreats:</strong> Opportunities for prayer, reflection, and community building.</li>
          <li><strong>Service Projects:</strong> Hands-on experiences of putting faith into action through service to others.</li>
          <li><strong>Sponsor Meetings:</strong> Sessions with Confirmation sponsors who serve as spiritual mentors and witnesses of faith.</li>
          <li><strong>Interviews:</strong> Personal conversations with the pastor or Confirmation coordinator to discuss readiness for the sacrament.</li>
        </ul>
        
        <h3>Choosing a Confirmation Name</h3>
        <p>
          As part of the Confirmation preparation, candidates are encouraged to choose a saint's name as their Confirmation name. This saint becomes a personal patron and model of holiness for the confirmed. Candidates research different saints and select one whose life and virtues they admire and hope to emulate.
        </p>
        
        <h3>The Role of the Sponsor</h3>
        <p>
          Each Confirmation candidate selects a sponsor who:
        </p>
        <ul>
          <li>Is a confirmed, practicing Catholic at least 16 years old</li>
          <li>Is not the candidate's parent (though they may be a godparent)</li>
          <li>Lives a life of faith consistent with the role they are undertaking</li>
          <li>Supports the candidate in preparation for and living out the sacrament</li>
          <li>Presents the candidate to the bishop at the Confirmation ceremony</li>
        </ul>
        
        <h3>The Confirmation Ceremony</h3>
        <p>
          During the Confirmation Mass:
        </p>
        <ul>
          <li>Candidates renew their baptismal promises</li>
          <li>The bishop extends his hands over all the candidates, praying for the outpouring of the Holy Spirit</li>
          <li>Each candidate, accompanied by their sponsor, approaches the bishop</li>
          <li>The bishop anoints each candidate with sacred chrism oil on the forehead, saying, "Be sealed with the Gift of the Holy Spirit"</li>
          <li>The candidate responds, "Amen"</li>
          <li>The bishop then says, "Peace be with you," and the newly confirmed responds, "And with your spirit"</li>
        </ul>
        
        <h3>After Confirmation</h3>
        <p>
          Confirmation is not the end but rather a milestone in the ongoing journey of faith. The newly confirmed are encouraged to:
        </p>
        <ul>
          <li>Continue to grow in their relationship with God through prayer and the sacraments</li>
          <li>Participate actively in the life of the parish</li>
          <li>Join ministry opportunities suited to their gifts and interests</li>
          <li>Continue learning about their faith</li>
          <li>Live as witnesses to Christ in the world</li>
        </ul>
        
        <div className="bg-church-burgundy/10 p-6 rounded-lg border border-church-burgundy/20 mt-6">
          <h4 className="text-xl font-bold text-church-burgundy mb-2">Ready to Begin Preparation for Confirmation?</h4>
          <p className="mb-4">
            For more information about our Confirmation program or to register, please contact our Faith Formation Office.
          </p>
          <p>
            <strong>Next Confirmation Preparation Program:</strong> Beginning September 2024<br />
            <strong>Registration Deadline:</strong> August 15, 2024
          </p>
        </div>
      </div>
    </SacramentLayout>
  );
};

export default Confirmation;

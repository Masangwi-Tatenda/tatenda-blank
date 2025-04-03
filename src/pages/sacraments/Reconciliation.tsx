
import React, { useEffect } from 'react';
import SacramentLayout from '@/components/sacraments/SacramentLayout';

const Reconciliation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SacramentLayout
      title="Reconciliation"
      subtitle="The sacrament of God's mercy and forgiveness"
      heroImage="https://images.unsplash.com/photo-1528828335097-8671441f8a2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="prose prose-lg max-w-none">
        <h2>The Sacrament of Reconciliation</h2>
        <p>
          The Sacrament of Reconciliation (also known as Confession or Penance) is a beautiful opportunity to experience God's mercy and forgiveness. Through this sacrament, we acknowledge our sins, express our sorrow, receive absolution, and are reconciled with God and the Church.
        </p>
        
        <blockquote>
          "Jesus said to them again, 'Peace be with you. As the Father has sent me, even so I send you.' And when he had said this, he breathed on them, and said to them, 'Receive the Holy Spirit. If you forgive the sins of any, they are forgiven; if you retain the sins of any, they are retained.'" 
          <footer>— John 20:21-23</footer>
        </blockquote>
        
        <p>
          In this sacrament, Christ, working through the priest, forgives the sins committed after Baptism, restores or strengthens our relationship with God, and gives us the grace to avoid sin in the future.
        </p>
        
        <h3>Regular Confession Schedule</h3>
        <p>
          At Musha WeBetania Parish, the Sacrament of Reconciliation is regularly available at these times:
        </p>
        <ul>
          <li><strong>Saturdays:</strong> 3:30 PM - 4:30 PM</li>
          <li><strong>Thursdays:</strong> 5:30 PM - 6:30 PM</li>
          <li><strong>By Appointment:</strong> Contact the parish office to schedule a time with the priest</li>
        </ul>
        <p>
          Additional confession times are often available during Advent and Lent, and communal penance services are held seasonally.
        </p>
        
        <h3>How to Make a Good Confession</h3>
        <h4>Before Confession:</h4>
        <ol>
          <li><strong>Examination of Conscience:</strong> Prayerfully review your life since your last confession, identifying sins and patterns of behavior that separate you from God.</li>
          <li><strong>Contrition:</strong> Feel genuine sorrow for your sins and a firm resolution to avoid sin in the future.</li>
          <li><strong>Preparation:</strong> Plan how you will confess your sins clearly and concisely.</li>
        </ol>
        
        <h4>During Confession:</h4>
        <ol>
          <li>Begin with the Sign of the Cross and say, "Bless me, Father, for I have sinned. It has been [length of time] since my last confession."</li>
          <li>Confess your sins honestly and specifically, including the kind and number of serious sins.</li>
          <li>Listen to the priest's counsel and accept the penance he gives you.</li>
          <li>Pray an Act of Contrition expressing your sorrow for sin.</li>
          <li>Receive absolution from the priest, who acts in the person of Christ.</li>
        </ol>
        
        <h4>After Confession:</h4>
        <ol>
          <li>Complete the penance given by the priest as soon as possible.</li>
          <li>Reflect on God's mercy and forgiveness.</li>
          <li>Make a firm resolution to avoid sin and grow in virtue.</li>
        </ol>
        
        <h3>Act of Contrition</h3>
        <p>
          There are many forms of the Act of Contrition. Here is one traditional version:
        </p>
        <div className="p-4 bg-gray-50 rounded-md">
          <p className="italic">
            "O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen."
          </p>
        </div>
        
        <h3>Common Questions About Confession</h3>
        <h4>Why confess to a priest?</h4>
        <p>
          Christ gave the authority to forgive sins to his apostles, and through them to their successors, the bishops and priests of the Church. The priest acts in the person of Christ and as a representative of the Church community that is wounded by sin. While we should directly ask God for forgiveness in our daily prayers, sacramental confession provides the certainty of God's forgiveness through the ministry of the Church.
        </p>
        
        <h4>How often should I go to confession?</h4>
        <p>
          Catholics are obliged to confess serious (mortal) sins at least once a year, but more frequent confession is encouraged as a means of growing in holiness. Many Catholics find that monthly confession helps them to be more aware of God's grace in their lives and to progress in eliminating sinful patterns.
        </p>
        
        <h4>What if I'm nervous or it's been a long time?</h4>
        <p>
          Many people feel nervous about confession, especially if it has been a long time. The priest is there to represent God's mercy, not to judge or criticize. If you're nervous or unsure what to do, simply tell the priest, and he will guide you through the process. Remember that there is great joy in heaven over one sinner who repents!
        </p>
        
        <h3>First Reconciliation for Children</h3>
        <p>
          In our parish, children typically prepare for and receive their First Reconciliation in the second grade, before their First Communion. The preparation program includes:
        </p>
        <ul>
          <li>Age-appropriate religious education</li>
          <li>Parent involvement in the preparation process</li>
          <li>A First Reconciliation retreat</li>
          <li>The celebration of the sacrament in a supportive, child-friendly setting</li>
        </ul>
        <p>
          For information about enrolling your child in First Reconciliation preparation, please contact our Faith Formation Office.
        </p>
        
        <div className="bg-church-burgundy/10 p-6 rounded-lg border border-church-burgundy/20 mt-6">
          <h4 className="text-xl font-bold text-church-burgundy mb-2">The Gift of God's Mercy</h4>
          <p className="mb-4">
            The Sacrament of Reconciliation is a beautiful gift that allows us to experience God's mercy and begin anew. No matter how long it has been or what sins you have committed, God's mercy is greater than any sin. We encourage you to take advantage of this sacrament regularly as part of your spiritual life.
          </p>
        </div>
      </div>
    </SacramentLayout>
  );
};

export default Reconciliation;


import React, { useEffect } from 'react';
import SacramentLayout from '@/components/sacraments/SacramentLayout';

const Marriage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SacramentLayout
      title="Marriage"
      subtitle="The sacred union between man and woman"
      heroImage="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="prose prose-lg max-w-none">
        <h2>The Sacrament of Marriage</h2>
        <p>
          In the Catholic Church, marriage is a sacred covenant by which a man and a woman establish a partnership for the whole of life. Marriage is not merely a private relationship but a public commitment that is ordered toward the good of the spouses and the procreation and education of children.
        </p>
        
        <blockquote>
          "For this reason a man shall leave his father and mother and be joined to his wife, and the two shall become one flesh." 
          <footer>— Ephesians 5:31</footer>
        </blockquote>
        
        <p>
          The Sacrament of Marriage reflects the covenant between Christ and His Church. Through this sacrament, spouses receive grace to help them grow in holiness and to raise their children in the faith.
        </p>
        
        <h3>Planning Your Catholic Wedding</h3>
        <p>
          If you are considering marriage at Musha WeBetania Parish, please note the following guidelines:
        </p>
        <ul>
          <li>Contact the parish at least six months before your desired wedding date.</li>
          <li>An initial meeting with the priest will be scheduled to discuss your plans and begin the preparation process.</li>
          <li>Marriage preparation includes a series of meetings with the priest and participation in a marriage preparation program.</li>
          <li>Both parties must be free to marry in the Catholic Church, meaning neither has a previous marriage that would prevent a Catholic wedding.</li>
        </ul>
        
        <h3>Marriage Preparation Program</h3>
        <p>
          Our marriage preparation program includes:
        </p>
        <ul>
          <li><strong>Pre-Marital Inventory:</strong> A questionnaire that helps couples identify areas of agreement and potential conflicts.</li>
          <li><strong>Marriage Preparation Classes:</strong> Sessions covering communication, conflict resolution, finances, intimacy, and the theology of marriage.</li>
          <li><strong>Natural Family Planning Instruction:</strong> Education about Church-approved methods of family planning.</li>
          <li><strong>Individual Meetings with the Priest:</strong> Discussions about the couple's relationship, faith life, and planning for the wedding ceremony.</li>
          <li><strong>Liturgical Planning:</strong> Assistance in selecting readings, music, and other elements of the wedding ceremony.</li>
        </ul>
        
        <h3>Required Documentation</h3>
        <p>
          The following documents are needed for marriage in the Catholic Church:
        </p>
        <ul>
          <li>Recent (within 6 months) baptismal certificates for Catholic parties</li>
          <li>Confirmation certificates for Catholic parties</li>
          <li>Affidavits of Freedom to Marry (statements from witnesses attesting that each party is free to marry)</li>
          <li>Marriage license from the civil authority (to be obtained closer to the wedding date)</li>
          <li>Documentation related to any previous marriages (if applicable)</li>
          <li>Other documents as requested by the priest</li>
        </ul>
        
        <h3>Wedding Ceremony Options</h3>
        <p>
          Catholic weddings may take place in one of two forms:
        </p>
        <ul>
          <li><strong>Wedding Mass:</strong> The full celebration of the Eucharist with the marriage rite included. This is the usual form when both parties are Catholic.</li>
          <li><strong>Wedding Service:</strong> A Liturgy of the Word followed by the marriage rite, without the celebration of the Eucharist. This is common when one party is not Catholic.</li>
        </ul>
        
        <h3>Music for Your Wedding</h3>
        <p>
          Music is an important part of the wedding liturgy and should reflect the sacred nature of the occasion. Our parish music director can assist you in selecting appropriate music and arranging for musicians and vocalists.
        </p>
        <ul>
          <li>All music must be approved by the parish music director.</li>
          <li>Secular music is generally not appropriate for the wedding liturgy.</li>
          <li>Outside musicians must coordinate with our music director.</li>
        </ul>
        
        <h3>Photography and Videography</h3>
        <p>
          Photography and videography are permitted during the ceremony with the following guidelines:
        </p>
        <ul>
          <li>Photographers and videographers should be unobtrusive and respectful of the sacred nature of the event.</li>
          <li>They should not enter the sanctuary area or disrupt the ceremony.</li>
          <li>Flash photography is limited during the ceremony.</li>
          <li>A detailed list of guidelines will be provided during the planning process.</li>
        </ul>
        
        <h3>Fees and Offerings</h3>
        <p>
          The following fees are customary for weddings at our parish:
        </p>
        <ul>
          <li>Church offering: Please contact the parish office for current rates</li>
          <li>Music director and vocalist fees: Varies depending on arrangements</li>
          <li>Marriage preparation program fee: Covers materials and facilitator costs</li>
        </ul>
        <p>
          Please note that financial constraints should never prevent a couple from celebrating the Sacrament of Marriage. If you have concerns about fees, please discuss them with the priest.
        </p>
        
        <h3>Special Circumstances</h3>
        <p>
          We understand that couples come from diverse backgrounds and situations. Please discuss with the priest any special circumstances, such as:
        </p>
        <ul>
          <li>Interfaith marriages</li>
          <li>Previous marriages</li>
          <li>Cultural traditions you wish to incorporate</li>
          <li>Pregnancy</li>
          <li>Military deployment or other timing constraints</li>
        </ul>
        
        <div className="bg-church-burgundy/10 p-6 rounded-lg border border-church-burgundy/20 mt-6">
          <h4 className="text-xl font-bold text-church-burgundy mb-2">Ready to Begin Planning Your Wedding?</h4>
          <p className="mb-4">
            We are honored that you are considering Musha WeBetania Parish for your wedding. To begin the process, please contact our parish office to schedule an initial meeting with the priest.
          </p>
          <p>
            <strong>Parish Office:</strong> +123 456 7890<br />
            <strong>Email:</strong> weddings@mushwebetania.org
          </p>
        </div>
      </div>
    </SacramentLayout>
  );
};

export default Marriage;


import React, { useEffect } from 'react';
import SacramentLayout from '@/components/sacraments/SacramentLayout';

const Anointing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SacramentLayout
      title="Anointing of the Sick"
      subtitle="Spiritual healing and comfort"
      heroImage="https://images.unsplash.com/photo-1530216700772-ece9c99010b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="prose prose-lg max-w-none">
        <h2>Anointing of the Sick</h2>
        <p>
          The Sacrament of Anointing of the Sick is administered to bring spiritual and even physical strength during an illness, especially near the time of death. This sacrament was previously referred to as "Last Rites" or "Extreme Unction" but is now more commonly called the Anointing of the Sick, highlighting that it is not limited to those who are dying.
        </p>
        
        <p>
          In this sacrament, the Church prays for healing and forgiveness. The priest anoints the sick person with blessed oil and prays, asking God to give strength and comfort to the person suffering from illness.
        </p>
        
        <blockquote>
          "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord." 
          <footer>— James 5:14-15</footer>
        </blockquote>
        
        <h3>Who Can Receive This Sacrament?</h3>
        <p>
          The Anointing of the Sick is available to any Catholic who:
        </p>
        <ul>
          <li>Is suffering from a serious illness</li>
          <li>Is facing surgery for a serious condition</li>
          <li>Is elderly and notably weakened, even if not seriously ill</li>
          <li>Is in danger of death from sickness or old age</li>
        </ul>
        
        <p>
          A person may receive this sacrament multiple times if their condition worsens or during different illnesses.
        </p>
        
        <h3>How to Request Anointing of the Sick</h3>
        <p>
          If you or a loved one needs to receive the Sacrament of Anointing, please contact our parish office as soon as possible. In emergency situations, a priest is available 24 hours a day.
        </p>
        
        <div className="bg-church-burgundy/10 p-6 rounded-lg border border-church-burgundy/20 mt-6">
          <h4 className="text-xl font-bold text-church-burgundy mb-2">Contact Information</h4>
          <p>
            Parish Office: +123 456 7890<br />
            After Hours Emergency: +123 456 7899
          </p>
          <p className="mt-4">
            Please do not wait until the last moment to request this sacrament. It is meant to bring comfort and peace to those who are ill, and it is best administered when the person is conscious and able to participate.
          </p>
        </div>
        
        <h3>What to Expect During the Sacrament</h3>
        <p>
          The Rite of Anointing includes:
        </p>
        <ul>
          <li>Prayers</li>
          <li>Reading from Scripture</li>
          <li>Laying on of hands</li>
          <li>Anointing with blessed oil on the forehead and hands</li>
          <li>The opportunity for Confession</li>
          <li>Reception of Holy Communion if possible (called Viaticum when given to the dying)</li>
        </ul>
        
        <p>
          Family members are encouraged to be present and to participate in the prayers.
        </p>
        
        <h3>Effects of the Sacrament</h3>
        <p>
          The Anointing of the Sick provides:
        </p>
        <ul>
          <li>Spiritual comfort and peace</li>
          <li>Strength to endure suffering</li>
          <li>Union with Christ's suffering</li>
          <li>Forgiveness of sins</li>
          <li>Preparation for passing over to eternal life</li>
          <li>Sometimes, physical healing according to God's will</li>
        </ul>
        
        <h3>Community Support</h3>
        <p>
          Our parish community offers support to the sick and their families through:
        </p>
        <ul>
          <li>Home and hospital visits by our ministry team</li>
          <li>Regular Communion for those who cannot attend Mass</li>
          <li>Prayer support through our parish prayer chain</li>
          <li>Practical assistance as needed</li>
        </ul>
        
        <p>
          If you or a loved one is ill and would like to receive this sacrament or other support, please contact our parish office.
        </p>
      </div>
    </SacramentLayout>
  );
};

export default Anointing;

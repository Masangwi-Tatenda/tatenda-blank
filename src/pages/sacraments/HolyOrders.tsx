
import React, { useEffect } from 'react';
import SacramentLayout from '@/components/sacraments/SacramentLayout';

const HolyOrders = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SacramentLayout 
      title="Holy Orders"
      subtitle="The sacrament through which the mission entrusted by Christ to his apostles continues to be exercised in the Church"
      heroImage="https://images.unsplash.com/photo-1569240651738-3d9a7c3986d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <section className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-church-burgundy mb-4">What is the Sacrament of Holy Orders?</h3>
          <p>
            Holy Orders is the sacrament through which the mission entrusted by Christ to his apostles continues to be exercised in the Church until the end of time. It is the sacrament of apostolic ministry, which includes three degrees: episcopate (bishops), presbyterate (priests), and diaconate (deacons).
          </p>
          <p className="mt-3">
            Through this sacrament, men are configured to Christ by a special grace of the Holy Spirit to serve as Christ's instruments for his Church. Holy Orders empowers them to act in the person of Christ, the Head, for the service of all members of the Church.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-church-burgundy mb-4">The Three Degrees of Holy Orders</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-xl font-semibold text-church-burgundy mb-2">1. Bishops (Episcopate)</h4>
              <p>
                Bishops receive the fullness of the sacrament of Holy Orders. They are the successors of the apostles and members of the episcopal college. They are the chief teachers, priests, and pastors of the Church. The bishop is the ordinary minister of Confirmation and is the only minister of Holy Orders.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-xl font-semibold text-church-burgundy mb-2">2. Priests (Presbyterate)</h4>
              <p>
                Priests are united with the bishops in sacerdotal dignity. They are consecrated to preach the Gospel, shepherd the faithful, and celebrate divine worship, especially the Eucharist. Priests serve as co-workers of the bishops, serving the people of God in the local parish communities.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-xl font-semibold text-church-burgundy mb-2">3. Deacons (Diaconate)</h4>
              <p>
                Deacons are ordained for the service of the Church, not for priesthood but for ministry. They serve the Church in the ministry of the liturgy, word, and charity under the authority of the bishop. Deacons can baptize, witness marriages, proclaim the Gospel, preach, and assist at funerals.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-church-burgundy mb-4">Effects of the Sacrament</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Indelible Spiritual Character:</strong> Like Baptism and Confirmation, Holy Orders confers an indelible spiritual character that cannot be repeated or removed.
            </li>
            <li>
              <strong>Configuration to Christ:</strong> The ordained are configured to Christ in various ways according to their degree of ordination.
            </li>
            <li>
              <strong>Grace of the Holy Spirit:</strong> The ordained receive the grace of the Holy Spirit proper to their ministry.
            </li>
            <li>
              <strong>Authority to Act in Persona Christi:</strong> Bishops and priests especially receive the authority to act in the person of Christ, the Head, for the Church.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-church-burgundy mb-4">Who Can Receive Holy Orders?</h3>
          <p>
            In the Catholic Church, only baptized men can receive the sacrament of Holy Orders. This is consistent with the example of Christ choosing men as his apostles and the Church's constant tradition. The Church's teaching on this matter is definitive and considered part of the deposit of faith.
          </p>
          <p className="mt-3">
            Candidates for Holy Orders are called by God through the Church and freely respond to that call. They must undergo a period of formation and preparation in a seminary or house of formation, where they receive spiritual, theological, pastoral, and human formation.
          </p>
          <p className="mt-3">
            In the Latin (Western) Church, bishops and priests are normally chosen from among men who live as celibates. In the Eastern Catholic Churches, married men can be ordained as priests, but not as bishops. Permanent deacons can be married men in both the Western and Eastern Churches.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-church-burgundy mb-4">Celebration of the Sacrament</h3>
          <p>
            The essential rite of the sacrament consists in the bishop's imposition of hands on the head of the ordained and in the specific consecratory prayer that asks God for the outpouring of the Holy Spirit and his gifts appropriate for the ministry to which the candidate is being ordained.
          </p>
          <p className="mt-3">
            Other elements of the liturgy of ordination include: the presentation and election of the ordinand, the instruction by the bishop, the examination of the candidate, the litany of the saints, the anointing with sacred chrism (for bishops and priests), the presentation of the instruments of ministry, and the kiss of peace.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-church-burgundy mb-4">Holy Orders in Sacred Scripture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="italic">
                "And he went up on the mountain and called to him those whom he desired, and they came to him. And he appointed twelve (whom he also named apostles) so that they might be with him and he might send them out to preach and have authority to cast out demons."
              </p>
              <p className="text-right font-medium mt-2">— Mark 3:13-15</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="italic">
                "Now in these days when the disciples were increasing in number, a complaint by the Hellenists arose against the Hebrews because their widows were being neglected in the daily distribution. And the twelve summoned the full number of the disciples and said... 'Therefore, brothers, pick out from among you seven men of good repute, full of the Spirit and of wisdom, whom we will appoint to this duty'... These they set before the apostles, and they prayed and laid their hands on them."
              </p>
              <p className="text-right font-medium mt-2">— Acts 6:1-3, 6</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-church-burgundy mb-4">Holy Orders at Musha WeBetania Parish</h3>
          
          <div className="bg-church-light-gold p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-church-burgundy mb-4">Discerning a Vocation to Holy Orders</h4>
            <p>
              If you feel called to the priesthood or diaconate, we encourage you to speak with our parish priest about your vocation. Discernment is an important process that requires prayer, reflection, and guidance.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Regular participation in the sacraments, especially the Eucharist and Reconciliation</li>
              <li>Daily prayer and meditation on Sacred Scripture</li>
              <li>Spiritual direction from a priest or qualified spiritual director</li>
              <li>Involvement in parish ministries and service</li>
              <li>Contact with the diocesan vocation director</li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold text-church-burgundy mb-2">Contact Information</h5>
              <p>
                To discuss a possible vocation to Holy Orders, please contact:
              </p>
              <p className="mt-2">
                <strong>Parish Office:</strong> [Your Parish Contact Information]<br />
                <strong>Diocesan Vocations Office:</strong> [Diocesan Vocations Office Contact Information]
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-church-burgundy mb-4">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-church-burgundy">What is the difference between a religious priest and a diocesan priest?</h4>
              <p className="mt-1">
                A diocesan priest serves within a particular diocese under the authority of the local bishop and typically ministers in parishes. A religious priest belongs to a religious order or congregation (such as Franciscans, Dominicans, or Jesuits) and lives according to the specific charism and rule of that community, taking vows of poverty, chastity, and obedience.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-church-burgundy">Can married men become deacons?</h4>
              <p className="mt-1">
                Yes, in both the Western and Eastern Catholic Churches, married men can be ordained to the permanent diaconate. However, if a permanent deacon's wife dies, he normally cannot remarry. Men who are already ordained deacons cannot marry.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-church-burgundy">Why can't women be ordained to the priesthood?</h4>
              <p className="mt-1">
                The Catholic Church teaches that it is bound by Jesus' choice of men as his apostles. The Church does not consider itself authorized to change this tradition, as declared definitively by Pope St. John Paul II in the apostolic letter "Ordinatio Sacerdotalis" (1994). The Church emphasizes that this does not diminish the role and dignity of women in the Church, who serve in many essential ministries.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-church-burgundy">What is the role of the laity in relation to the ordained ministers?</h4>
              <p className="mt-1">
                The laity are called to participate actively in the priestly, prophetic, and kingly functions of Christ in their own way. While ordained ministers serve the Church in a particular capacity through sacramental ministry, the laity are called to sanctify the world from within through their baptismal priesthood, witnessing to Christ in family, professional, and social life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SacramentLayout>
  );
};

export default HolyOrders;

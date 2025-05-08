import React, { useState, useEffect } from 'react';
import { BookOpen, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { format, addDays, subDays } from 'date-fns';
import { Link } from 'react-router-dom';

// Sample data for readings
const getSampleReadings = (date: Date) => {
  // This would ideally come from an API or Sanity in production
  const dateStr = format(date, 'yyyy-MM-dd');
  const dayOfWeek = format(date, 'EEEE');
  
  // Get the day of the year to seed different readings
  const getDayOfYear = () => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };
  
  // Sample readings - in production, these would come from a real source
  const readingOptions = [
    {
      title: 'First Reading',
      citation: 'Isaiah 55:10-11',
      text: 'Thus says the LORD: Just as from the heavens the rain and snow come down and do not return there till they have watered the earth, making it fertile and fruitful, giving seed to the one who sows and bread to the one who eats, so shall my word be that goes forth from my mouth; it shall not return to me void, but shall do my will, achieving the end for which I sent it.',
    },
    {
      title: 'First Reading',
      citation: 'Acts 2:1-11',
      text: 'When the time for Pentecost was fulfilled, they were all in one place together. And suddenly there came from the sky a noise like a strong driving wind, and it filled the entire house in which they were. Then there appeared to them tongues as of fire, which parted and came to rest on each one of them. And they were all filled with the Holy Spirit and began to speak in different tongues, as the Spirit enabled them to proclaim.',
    },
    {
      title: 'First Reading',
      citation: 'Genesis 1:1-5',
      text: 'In the beginning, when God created the heavens and the earth—and the earth was without form or shape, with darkness over the abyss and a mighty wind sweeping over the waters—Then God said: Let there be light, and there was light. God saw that the light was good. God then separated the light from the darkness. God called the light "day," and the darkness he called "night." Evening came, and morning followed—the first day.',
    },
  ];
  
  const responsorialOptions = [
    {
      title: 'Responsorial Psalm',
      citation: 'Psalm 34:4-5, 6-7, 16-17, 18-19',
      text: 'R. (18b) From all their distress God rescues the just.\nGlorify the LORD with me,\nlet us together extol his name.\nI sought the LORD, and he answered me\nand delivered me from all my fears.\n\nR. From all their distress God rescues the just.\nLook to him that you may be radiant with joy,\nand your faces may not blush with shame.\nWhen the poor one called out, the LORD heard,\nand from all his distress he saved him.',
    },
    {
      title: 'Responsorial Psalm',
      citation: 'Psalm 23:1-3, 4, 5, 6',
      text: 'R. (1) The Lord is my shepherd; there is nothing I shall want.\nThe LORD is my shepherd; I shall not want.\nIn verdant pastures he gives me repose;\nBeside restful waters he leads me;\nhe refreshes my soul.\n\nR. The Lord is my shepherd; there is nothing I shall want.\nEven though I walk in the dark valley\nI fear no evil; for you are at my side\nWith your rod and your staff\nthat give me courage.',
    },
    {
      title: 'Responsorial Psalm',
      citation: 'Psalm 19:8, 9, 10, 11',
      text: 'R. (John 6:63c) Your words, Lord, are Spirit and life.\nThe law of the LORD is perfect,\nrefreshing the soul;\nThe decree of the LORD is trustworthy,\ngiving wisdom to the simple.\n\nR. Your words, Lord, are Spirit and life.\nThe precepts of the LORD are right,\nrejoicing the heart;\nThe command of the LORD is clear,\nenlightening the eye.',
    },
  ];
  
  const secondReadingOptions = [
    {
      title: 'Second Reading',
      citation: '1 Corinthians 9:16-19, 22-23',
      text: 'Brothers and sisters: If I preach the gospel, this is no reason for me to boast, for an obligation has been imposed on me, and woe to me if I do not preach it! If I do so willingly, I have a recompense, but if unwillingly, then I have been entrusted with a stewardship. What then is my recompense? That, when I preach, I offer the gospel free of charge so as not to make full use of my right in the gospel.',
    },
    {
      title: 'Second Reading',
      citation: 'Romans 8:14-17',
      text: 'Brothers and sisters: For those who are led by the Spirit of God are sons of God. For you did not receive a spirit of slavery to fall back into fear, but you received a Spirit of adoption, through whom we cry, "Abba, Father!" The Spirit himself bears witness with our spirit that we are children of God, and if children, then heirs, heirs of God and joint heirs with Christ, if only we suffer with him so that we may also be glorified with him.',
    },
    {
      title: 'Second Reading',
      citation: 'Colossians 3:12-17',
      text: "Brothers and sisters: Put on, as God's chosen ones, holy and beloved, heartfelt compassion, kindness, humility, gentleness, and patience, bearing with one another and forgiving one another, if one has a grievance against another; as the Lord has forgiven you, so must you also do. And over all these put on love, that is, the bond of perfection. And let the peace of Christ control your hearts, the peace into which you were also called in one body. And be thankful.",
    },
  ];
  
  const gospelOptions = [
    {
      title: 'Gospel',
      citation: 'Mark 1:29-39',
      text: "On leaving the synagogue Jesus entered the house of Simon and Andrew with James and John. Simon's mother-in-law lay sick with a fever. They immediately told him about her. He approached, grasped her hand, and helped her up. Then the fever left her and she waited on them.\n\nWhen it was evening, after sunset, they brought to him all who were ill or possessed by demons. The whole town was gathered at the door. He cured many who were sick with various diseases, and he drove out many demons, not permitting them to speak because they knew him.",
    },
    {
      title: 'Gospel',
      citation: 'John 20:19-23',
      text: "On the evening of that first day of the week, when the doors were locked, where the disciples were, for fear of the Jews, Jesus came and stood in their midst and said to them, \"Peace be with you.\" When he had said this, he showed them his hands and his side. The disciples rejoiced when they saw the Lord. Jesus said to them again, \"Peace be with you. As the Father has sent me, so I send you.\" And when he had said this, he breathed on them and said to them, \"Receive the Holy Spirit. Whose sins you forgive are forgiven them, and whose sins you retain are retained.\"",
    },
    {
      title: 'Gospel',
      citation: 'Matthew 5:13-16',
      text: "Jesus said to his disciples: \"You are the salt of the earth. But if salt loses its taste, with what can it be seasoned? It is no longer good for anything but to be thrown out and trampled underfoot. You are the light of the world. A city set on a mountain cannot be hidden. Nor do they light a lamp and then put it under a bushel basket; it is set on a lampstand, where it gives light to all in the house. Just so, your light must shine before others, that they may see your good deeds and glorify your heavenly Father.\"",
    },
  ];
  
  const reflectionOptions = [
    "Today's readings remind us of the transformative power of God's word in our lives. Just as rain and snow nourish the earth, God's word nourishes our souls and accomplishes His divine purpose within us. How might we be more attentive to God's word today?",
    "The Holy Spirit empowers us to live as witnesses of Christ. Today's readings remind us that we are called not only to receive the Spirit but to allow the Spirit to work through us in bringing Christ's peace and forgiveness to others.",
    "Jesus calls us to be salt of the earth and light of the world. This invitation is both a privilege and a responsibility. Our good deeds should not draw attention to ourselves but rather direct others to glorify our heavenly Father.",
    "God's love is transformative. When we encounter Jesus, He heals us and enables us to serve others. Like Simon's mother-in-law, our response to being healed should be service and gratitude.",
    "As children of God, we are called to cultivate virtues like compassion, kindness, humility, gentleness, and patience. These qualities build up the Body of Christ and create a community of love and peace."
  ];
  
  // Use day of year to select different readings for different days
  const dayOfYear = getDayOfYear();
  
  // Create readings based on date
  return {
    date: dateStr,
    dayOfWeek,
    liturgicalSeason: 'Ordinary Time',
    liturgicalColor: 'Green',
    readings: [
      readingOptions[dayOfYear % readingOptions.length],
      responsorialOptions[dayOfYear % responsorialOptions.length],
      secondReadingOptions[dayOfYear % secondReadingOptions.length],
      gospelOptions[dayOfYear % gospelOptions.length],
    ],
    reflection: reflectionOptions[dayOfYear % reflectionOptions.length],
    saint: {
      name: 'St. Catherine of Siena',
      feast: dateStr === '2025-04-29',
      description: 'St. Catherine of Siena (1347-1380) was a Dominican tertiary, mystic, and Doctor of the Church. She worked to bring the papacy back to Rome from Avignon and to establish peace among Italian city-states.',
    }
  };
};

type DailyReadingBlockProps = {
  simplified?: boolean;
  className?: string;
  showControls?: boolean;
};

const DailyReadingBlock: React.FC<DailyReadingBlockProps> = ({ 
  simplified = false,
  className = '',
  showControls = false
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [readings, setReadings] = useState(getSampleReadings(currentDate));

  useEffect(() => {
    // Update readings when date changes
    setReadings(getSampleReadings(currentDate));
  }, [currentDate]);

  const goToPreviousDay = () => {
    setCurrentDate(prevDate => subDays(prevDate, 1));
  };

  const goToNextDay = () => {
    setCurrentDate(prevDate => addDays(prevDate, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // For simplified view, show just the gospel
  const displayReadings = simplified 
    ? [readings.readings.find(reading => reading.title === 'Gospel') || readings.readings[readings.readings.length - 1]]
    : readings.readings;

  return (
    <Card className={`border-church-gold/30 shadow-lg overflow-hidden ${className}`}>
      <CardHeader className="bg-church-burgundy text-white pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-church-gold" />
            <CardTitle className="text-xl font-medium text-white">
              {simplified ? 'Daily Reading' : 'Today\'s Readings'}
            </CardTitle>
          </div>
          {showControls && (
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={goToPreviousDay}
                className="h-8 w-8 p-0 text-white hover:text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost"
                size="sm"
                onClick={goToToday}
                className="h-8 text-white hover:text-white hover:bg-white/20"
              >
                Today
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={goToNextDay}
                className="h-8 w-8 p-0 text-white hover:text-white hover:bg-white/20"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        <p className="text-sm font-medium text-church-gold mt-2">
          {format(currentDate, 'EEEE, MMMM d, yyyy')}
        </p>
      </CardHeader>
      
      <Tabs defaultValue={simplified ? "gospel" : "readings"}>
        <TabsList className="bg-church-burgundy/5 px-6 pt-4 w-full justify-start gap-4">
          {!simplified && (
            <TabsTrigger value="readings" className="data-[state=active]:text-church-burgundy">
              Readings
            </TabsTrigger>
          )}
          <TabsTrigger value="gospel" className="data-[state=active]:text-church-burgundy">
            {simplified ? "Gospel" : "Gospel Reading"}
          </TabsTrigger>
          <TabsTrigger value="reflection" className="data-[state=active]:text-church-burgundy">
            Reflection
          </TabsTrigger>
        </TabsList>
        
        {!simplified && (
          <TabsContent value="readings" className="p-0">
            <CardContent className="p-6">
              <div className="space-y-6">
                {displayReadings.map((reading, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-medium mb-2 text-church-burgundy">{reading.citation}</h3>
                    <div className="flex items-start">
                      <Quote className="w-6 h-6 text-church-gold shrink-0 mt-1 mr-2" />
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{reading.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </TabsContent>
        )}
        
        <TabsContent value="gospel" className="p-0">
          <CardContent className="p-6">
            <div className="mb-4">
              {displayReadings.map((reading, index) => (
                reading.title === 'Gospel' && (
                  <div key={index}>
                    <h3 className="text-lg font-medium mb-2 text-church-burgundy">{reading.citation}</h3>
                    <div className="flex items-start">
                      <Quote className="w-6 h-6 text-church-gold shrink-0 mt-1 mr-2" />
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{reading.text}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </CardContent>
        </TabsContent>
        
        <TabsContent value="reflection" className="p-0">
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-church-burgundy">Today's Reflection</h3>
              <p className="text-gray-700 leading-relaxed">{readings.reflection}</p>
            </div>
          </CardContent>
        </TabsContent>
        
        <CardFooter className="px-6 py-4 bg-gray-50 flex justify-between items-center">
          <p className="text-sm text-gray-500">Readings change daily</p>
          <Button
            asChild
            variant="outline"
            className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
          >
            <Link to="/spiritual-growth/daily-readings">
              View All Readings
            </Link>
          </Button>
        </CardFooter>
      </Tabs>
    </Card>
  );
};

export default DailyReadingBlock;

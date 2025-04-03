
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Tag, User, Share2, ChevronLeft, BookOpen, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { fetchCatholicArticles, ScrapedArticle, calculateReadingTime } from '@/utils/webScraper';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ScrapedArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<ScrapedArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const loadArticle = async () => {
      try {
        setLoading(true);
        // In a real app, you would fetch the specific article by ID
        // For demo purposes, we'll fetch all articles and find the one with matching ID
        const articles = await fetchCatholicArticles();
        
        // Use the ID param to find the article (in production you'd fetch by ID directly)
        // For demo, we'll use the index in the array
        const articleIndex = Number(id) || 0;
        const foundArticle = articles[articleIndex] || articles[0];
        
        // Set reading time if not already set
        if (!foundArticle.readingTime) {
          foundArticle.readingTime = calculateReadingTime(foundArticle.content);
        }
        
        setArticle(foundArticle);
        
        // Set related articles (excluding the current one)
        const related = articles
          .filter((_, index) => index !== articleIndex)
          .slice(0, 3);
        
        setRelatedArticles(related);
      } catch (error) {
        console.error("Error loading article:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-church-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for could not be found or may have been removed.</p>
            <Button asChild>
              <Link to="/blog" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Image */}
        <section className="relative h-64 md:h-96 lg:h-[500px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <div className="container-custom">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to All Articles
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-church-burgundy/80 text-white text-xs font-medium rounded-full">
                  {article.category}
                </span>
                {article.tags && article.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-black/20 text-white text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{article.title}</h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-white/90">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} style={{ lineHeight: 1.6 }} />
                </article>
                
                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Share2 className="mr-2 h-5 w-5 text-church-burgundy" />
                    Share This Article
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-full" asChild>
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        Share
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full" asChild>
                      <a 
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        Tweet
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full" asChild>
                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        Share
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Tags Section */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Tag className="mr-2 h-5 w-5 text-church-burgundy" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Source Link */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Source:</span>{' '}
                    <a 
                      href={article.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-church-burgundy hover:underline"
                    >
                      {new URL(article.sourceUrl).hostname}
                    </a>
                  </p>
                  {article.diocese && (
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Diocese:</span> {article.diocese}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                {/* Author Info */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold mb-4">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                      <User className="h-8 w-8 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">{article.author}</h4>
                      <p className="text-sm text-gray-600">
                        {article.author === 'Vatican News' 
                          ? 'Official news source of the Holy See'
                          : article.author.includes('Parish')
                            ? 'Parish Publication'
                            : 'Catholic Journalist'}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {article.author === 'Vatican News'
                      ? 'Vatican News is the information system of the Holy See, providing multimedia coverage of papal events and the activities of the Holy See.'
                      : article.author.includes('Parish')
                        ? 'Parish communications focused on local church news, events, and faith formation.'
                        : 'Covering Catholic news and events with a focus on faith perspectives and Church teachings.'}
                  </p>
                </div>
                
                {/* Related Articles */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-church-burgundy" />
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={related.image} 
                            alt={related.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm line-clamp-2">
                            <Link to={`/blog/${index}`} className="hover:text-church-burgundy transition-colors">
                              {related.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(related.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </p>
                          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full inline-block mt-1">
                            {related.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/blog" className="w-full">View All Articles</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;

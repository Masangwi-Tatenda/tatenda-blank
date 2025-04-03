
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Search, Calendar, Clock, User, ChevronRight } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "Celebrating the Feast of Pentecost: The Birthday of the Church",
    slug: "celebrating-pentecost-birthday-church",
    excerpt: "Explore the significance of Pentecost in the life of the Church and how we can celebrate this important feast day.",
    author: {
      name: "Fr. Nguluve",
      role: "Parish Priest",
      avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    category: "Faith & Spirituality",
    publishDate: "2024-05-15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1601926638618-25951e67d681?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    title: "Understanding the Rosary: A Guide for Beginners",
    slug: "understanding-rosary-beginners-guide",
    excerpt: "Learn about the history, prayers, and mysteries of the Rosary, and how this powerful devotion can deepen your spiritual life.",
    author: {
      name: "Deacon Thomas",
      role: "Parish Deacon",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    category: "Prayer & Devotion",
    publishDate: "2024-05-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1514302240736-b1fee5985889?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    title: "The Saints of Africa: Inspiring Examples of Faith",
    slug: "saints-of-africa-inspiring-faith",
    excerpt: "Discover the rich heritage of African saints and their contributions to the universal Church throughout history.",
    author: {
      name: "Sarah Moyo",
      role: "Catechist",
      avatar: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    category: "Church History",
    publishDate: "2024-04-28",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  }
];

const categories = [
  "All", 
  "Faith & Spirituality", 
  "Prayer & Devotion", 
  "Church History", 
  "Parish Life", 
  "Liturgy & Sacraments"
];

const Blog = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter posts based on category and search term
  useEffect(() => {
    let filtered = blogPosts;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term)
      );
    }
    
    setPosts(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1498889444388-e67ea62c464b")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Parish Blog</h1>
                <p className="text-xl text-white/80">Faith insights, parish news, and spiritual reflections</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative min-w-[200px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-4 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-burgundy focus:border-church-burgundy sm:text-sm rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container-custom">
            <SectionTitle 
              title="Latest Articles" 
              subtitle="Faith insights, parish news, and spiritual reflections"
            />
            
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
                <button
                  className="mt-4 text-church-burgundy hover:text-church-gold transition-colors"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-church-burgundy/10">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-700 mb-6">
                Stay updated with our latest articles, events, and parish news. We send out a newsletter once a month.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow"
                />
                <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const BlogCard = ({ post }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link to={`/blog/${post.id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold text-church-burgundy mb-2 group-hover:text-church-gold transition-colors duration-300">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-700">{post.author.name}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{post.publishDate}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            to={`/blog/${post.id}`}
            className="inline-flex items-center text-church-burgundy hover:text-church-gold transition-colors"
          >
            Read More <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;

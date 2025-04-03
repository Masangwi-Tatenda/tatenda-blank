
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Twitter, Youtube, Globe, Smartphone } from 'lucide-react';
import GoogleMap from '@/components/common/GoogleMap';
import { useToast } from "@/hooks/use-toast";

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/mushawabetaniaparish', color: 'bg-blue-600', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/mushawabetaniaparish', color: 'bg-pink-600', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/mushawabetania', color: 'bg-blue-400', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/channel/mushawabetania', color: 'bg-red-600', label: 'YouTube' },
];

const Contact = () => {
  const { toast } = useToast();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you shortly.",
      duration: 5000,
    });
    
    // Reset the form
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Contact Us</h1>
            </div>
          </div>
        </section>
        
        {/* Contact Information & Map */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <SectionTitle 
              title="Get in Touch" 
              subtitle="We'd love to hear from you. Reach out to us with any questions or inquiries."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-church-burgundy/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-church-burgundy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-church-burgundy mb-2">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Musha WeBetania Parish<br />
                      Tangwena Road, opposite Jongwe Tarven<br />
                      Chikonohono
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=-17.369838,30.193918" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-church-burgundy hover:underline mt-2 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-church-burgundy/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-church-burgundy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-church-burgundy mb-2">Phone</h3>
                    <p className="text-gray-600">+123 456 7890</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Monday to Friday, 9am to 5pm
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-church-burgundy/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-church-burgundy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-church-burgundy mb-2">Email</h3>
                    <a 
                      href="mailto:info@mushwebetania.org" 
                      className="text-gray-600 hover:text-church-burgundy transition-colors"
                    >
                      info@mushwebetania.org
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      We'll respond as soon as possible
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-church-burgundy/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-church-burgundy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-church-burgundy mb-2">Diocese</h3>
                    <p className="text-gray-600">Chinhoyi Diocese</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Central Denary
                    </p>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div>
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Google Map */}
                <div className="mt-8 md:hidden">
                  <GoogleMap 
                    address="Tangwena Road, opposite Jongwe Tarven, Chikonohono" 
                    latitude={-17.369838}
                    longitude={30.193918}
                    height="300px"
                  />
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-church-burgundy mb-6">Send Us a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Message subject" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-32" 
                              style={{ lineHeight: 1.6 }}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      className="w-full bg-church-burgundy hover:bg-church-burgundy/90" 
                      disabled={form.formState.isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Full Width Map */}
        <section className="hidden md:block">
          <GoogleMap 
            address="Tangwena Road, opposite Jongwe Tarven, Chikonohono" 
            latitude={-17.369838}
            longitude={30.193918}
            height="500px"
            className="w-full"
          />
        </section>
        
        {/* Mass Times and Schedule */}
        <section className="py-16 bg-church-cream">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">Join Us for Mass</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We welcome you to join our parish community for Mass and other liturgical celebrations.
              </p>
              <Button 
                variant="default" 
                className="bg-church-burgundy hover:bg-church-burgundy/90"
                onClick={() => window.open('/mass-times', '_blank')}
              >
                View Mass Schedule
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

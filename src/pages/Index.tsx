
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import TemplateCard from "@/components/TemplateCard";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data
const featuredTemplates = [
  {
    id: "1",
    title: "Marketing Campaign Report",
    category: "Marketing",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isPremium: true,
    formats: ["PPTX", "PDF", "DOCX"]
  },
  {
    id: "2",
    title: "Startup Pitch Deck",
    category: "Pitch Decks",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    isPremium: true,
    formats: ["PPTX", "PDF"]
  },
  {
    id: "3",
    title: "Business Plan Template",
    category: "Business",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    formats: ["PPTX", "XLSX", "PDF"]
  },
  {
    id: "4",
    title: "Educational Presentation",
    category: "Education",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    formats: ["PPTX", "PDF"]
  }
];

const latestBlogs = [
  {
    id: "1",
    title: "10 Tips for Creating Effective Infographics",
    excerpt: "Learn how to design infographics that effectively communicate complex information in a visually appealing way.",
    date: "2023-11-15",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Design Tips"
  },
  {
    id: "2",
    title: "The Psychology of Colors in Presentations",
    excerpt: "Explore how different colors impact audience perception and how to use color psychology in your presentations.",
    date: "2023-11-08",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Psychology"
  },
  {
    id: "3",
    title: "Data Visualization Best Practices",
    excerpt: "Discover the best practices for presenting data in a clear, accurate, and visually compelling manner.",
    date: "2023-11-01",
    author: "David Williams",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Data Viz"
  }
];

const Homepage = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection />
        
        <FeatureSection />
        
        {/* Featured Templates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                Featured Templates
              </h2>
              <Link to="/templates">
                <Button variant="ghost" className="text-violet-DEFAULT hover:text-violet-dark hover:bg-violet-light/10">
                  View All <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  id={template.id}
                  title={template.title}
                  category={template.category}
                  price={template.price}
                  image={template.image}
                  isPremium={template.isPremium}
                  formats={template.formats}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600">
                Don't just take our word for it - see what our users have to say about their experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Customer"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Emily Thompson</h4>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The templates from InfoGraphix have completely transformed our presentations. We've received so many compliments on our pitch decks!"
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                      alt="Customer"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">James Wilson</h4>
                    <p className="text-sm text-gray-500">Startup Founder</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Using InfoGraphix templates saved us countless hours of design work. Our investor presentations look professional and polished."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Customer"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Maria Garcia</h4>
                    <p className="text-sm text-gray-500">Corporate Trainer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The educational templates have been a game-changer for my training sessions. The infographics help explain complex concepts clearly."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                Latest from Our Blog
              </h2>
              <Link to="/blog">
                <Button variant="ghost" className="text-violet-DEFAULT hover:text-violet-dark hover:bg-violet-light/10">
                  View All <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.date}
                  author={blog.author}
                  image={blog.image}
                  category={blog.category}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 gradient-bg text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Next Presentation?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of professionals who create stunning presentations with our templates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100"
                asChild
              >
                <Link to="/templates">
                  Get Started
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black hover:bg-white/10"
                asChild
              >
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Homepage;

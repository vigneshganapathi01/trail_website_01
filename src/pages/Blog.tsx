
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Sample blog data
const blogPosts = [
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
    image: "https://images.unsplash.com/photo-1548247354-3154bece2f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Psychology"
  },
  {
    id: "3",
    title: "Data Visualization Best Practices",
    excerpt: "Discover the best practices for presenting data in a clear, accurate, and visually compelling manner.",
    date: "2023-11-01",
    author: "David Williams",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Data Viz"
  },
  {
    id: "4",
    title: "Creating Engaging Presentations for Education",
    excerpt: "Tips for educators to create engaging presentations that enhance learning and student participation.",
    date: "2023-10-25",
    author: "Emily Watson",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Education"
  },
  {
    id: "5",
    title: "How to Tell a Story with Data",
    excerpt: "Learn the art of data storytelling to make your presentations more compelling and memorable.",
    date: "2023-10-18",
    author: "Robert Kim",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Data Viz"
  },
  {
    id: "6",
    title: "Presenting to Executives: What Works",
    excerpt: "Strategies for creating presentations that resonate with C-level executives and decision-makers.",
    date: "2023-10-10",
    author: "Jennifer Martinez",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Business"
  }
];

// Sample categories
const categories = [
  "All Topics",
  "Design Tips",
  "Psychology",
  "Data Viz",
  "Education",
  "Business"
];

const Blog = () => {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Blog Hero */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                InfoGraphix Blog
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Insights, tips, and guides for creating stunning presentations and effective data visualizations
              </p>
              
              <div className="flex w-full max-w-lg mx-auto">
                <Input 
                  placeholder="Search articles..." 
                  className="rounded-r-none" 
                />
                <Button className="rounded-l-none bg-violet-DEFAULT hover:bg-violet-dark">
                  <Search size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories */}
        <section className="border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center py-4 gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "bg-violet-DEFAULT hover:bg-violet-dark"
                      : "border-gray-200 text-gray-700 hover:text-violet-DEFAULT hover:border-violet-DEFAULT"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  image={post.image}
                  category={post.category}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex space-x-2">
                <Button variant="outline" className="border-gray-200" disabled>
                  Previous
                </Button>
                <Button className="bg-violet-DEFAULT hover:bg-violet-dark">
                  1
                </Button>
                <Button variant="outline" className="border-gray-200">
                  2
                </Button>
                <Button variant="outline" className="border-gray-200">
                  3
                </Button>
                <Button variant="outline" className="border-gray-200">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest articles, resources, and updates directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Your email address" className="sm:rounded-r-none" />
                <Button className="bg-violet-DEFAULT hover:bg-violet-dark sm:rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;

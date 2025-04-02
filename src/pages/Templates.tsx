
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemplateCard from "@/components/TemplateCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  SlidersHorizontal, 
  Check,
  ChevronDown 
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

// Sample template data
const templates = [
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
  },
  {
    id: "5",
    title: "Market Analysis Dashboard",
    category: "Business",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isPremium: true,
    formats: ["PPTX", "PDF", "XLSX"]
  },
  {
    id: "6",
    title: "Social Media Strategy",
    category: "Marketing",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    formats: ["PPTX", "PDF"]
  },
  {
    id: "7",
    title: "Sales Presentation",
    category: "Business",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    formats: ["PPTX", "PDF"]
  },
  {
    id: "8",
    title: "Product Launch Deck",
    category: "Marketing",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    isPremium: true,
    formats: ["PPTX", "PDF", "DOCX"]
  }
];

const Templates = () => {
  const [filters, setFilters] = useState({
    categories: ["Marketing", "Business", "Pitch Decks", "Education"],
    formats: ["PPTX", "PDF", "DOCX", "XLSX"],
    premium: false
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <>
      <Navbar />
      
      <main>
        {/* Templates Hero */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Presentation Templates
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Browse our collection of professional templates to create stunning presentations
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-2">
                <div className="relative flex-grow max-w-2xl">
                  <Input placeholder="Search templates..." className="pr-10" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <Button 
                  variant="outline"
                  className="md:w-auto border-gray-200"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal size={18} className="mr-2" /> Filters
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filters Bar (Conditional) */}
        {showFilters && (
          <section className="py-4 border-y border-gray-200 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {filters.categories.map((category, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Checkbox id={`category-${idx}`} />
                        <label htmlFor={`category-${idx}`} className="text-sm">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Formats */}
                <div>
                  <h3 className="font-medium mb-2">File Formats</h3>
                  <div className="space-y-2">
                    {filters.formats.map((format, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Checkbox id={`format-${idx}`} />
                        <label htmlFor={`format-${idx}`} className="text-sm">
                          {format}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under20">Under $20</SelectItem>
                      <SelectItem value="20to30">$20 - $30</SelectItem>
                      <SelectItem value="30plus">$30+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Premium Filter */}
                <div>
                  <h3 className="font-medium mb-2">Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="premium" />
                      <label htmlFor="premium" className="text-sm">
                        Premium Templates
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="free" />
                      <label htmlFor="free" className="text-sm">
                        Free Templates
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button variant="outline" className="text-sm">
                  Clear All
                </Button>
                <Button className="bg-violet-DEFAULT hover:bg-violet-dark text-sm">
                  Apply Filters
                </Button>
              </div>
            </div>
          </section>
        )}
        
        {/* Active Filters */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">Active filters:</span>
              <Badge variant="outline" className="rounded-full flex items-center gap-1">
                Marketing <span className="cursor-pointer ml-1">×</span>
              </Badge>
              <Badge variant="outline" className="rounded-full flex items-center gap-1">
                PPTX <span className="cursor-pointer ml-1">×</span>
              </Badge>
              <Button variant="link" className="text-sm h-auto p-0 text-violet-DEFAULT">
                Clear all
              </Button>
            </div>
          </div>
        </section>
        
        {/* Templates List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">
                Showing {templates.length} templates
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {templates.map((template) => (
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
      </main>
      
      <Footer />
    </>
  );
};

export default Templates;

import React from "react";
import { ArrowRight, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.8))]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-8">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
            <Presentation className="w-4 h-4 mr-1" />
            Create stunning presentations effortlessly
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Data Into Beautiful Infographics
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Create professional presentations with our ready-to-use templates. Save time and captivate your audience with stunning visuals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Browse Templates
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
              Try Demo
            </Button>
          </div>
          
          {/* Welcome and About Message */}
          <div className="mt-12 bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Welcome to Infographic Pro!</h3>
            <p className="text-gray-700">
              We help professionals, educators, and businesses transform complex data into 
              engaging visual stories. Our platform combines powerful design tools with 
              intuitive templates to make infographic creation accessible to everyone.
            </p>
          </div>
        </div>
        
        {/* Video Preview */}
        <div className="w-full lg:w-1/2 relative">
          <div className="bg-white p-2 rounded-2xl shadow-xl">
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 relative">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/api/placeholder/640/360"
              >
                <source src="https://videos.pexels.com/video-files/3209211/3209211-sd_640_360_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                <Badge className="bg-white/90 text-blue-800">See it in action</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { 
  BarChart, 
  PieChart, 
  FileDown, 
  Layers, 
  Palette, 
  RefreshCw 
} from "lucide-react";

const features = [
  {
    title: "Professional Infographics",
    description: "Access a library of professionally designed infographic templates for any presentation need.",
    icon: <BarChart className="w-10 h-10 text-violet-DEFAULT" />
  },
  {
    title: "Multiple Export Formats",
    description: "Export your presentations in multiple formats including PPTX, PDF, Excel, and Docs.",
    icon: <FileDown className="w-10 h-10 text-violet-DEFAULT" />
  },
  {
    title: "Data Visualization",
    description: "Transform complex data into easy-to-understand visual representations.",
    icon: <PieChart className="w-10 h-10 text-violet-DEFAULT" />
  },
  {
    title: "Template Collections",
    description: "Choose from various template collections for different industries and needs.",
    icon: <Layers className="w-10 h-10 text-violet-DEFAULT" />
  },
  {
    title: "Customization Options",
    description: "Easily customize colors, fonts, and layouts to match your brand identity.",
    icon: <Palette className="w-10 h-10 text-violet-DEFAULT" />
  },
  {
    title: "Regular Updates",
    description: "Get access to newly added templates and features with regular updates.",
    icon: <RefreshCw className="w-10 h-10 text-violet-DEFAULT" />
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose <span className="text-violet-DEFAULT">InfoGraphix</span>
          </h2>
          <p className="text-gray-600">
            Our platform offers everything you need to create stunning presentations that leave a lasting impression.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;


import React from "react";
import { Link } from "react-router-dom";
import { Eye, Download, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TemplateCardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  isPremium?: boolean;
  formats?: string[];
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  id,
  title,
  category,
  price,
  image,
  isPremium = false,
  formats = ["PPTX", "PDF"]
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-center"
        />
        {isPremium && (
          <Badge className="absolute top-2 right-2 bg-violet-DEFAULT text-white">
            Premium
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs bg-gray-50">
            {category}
          </Badge>
        </div>
        <h3 className="font-medium text-lg mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="font-bold text-darkblue-DEFAULT">
            ${price.toFixed(2)}
          </span>
          <div className="text-xs text-gray-500">
            Available in: {formats.join(", ")}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between gap-2">
        <Link to={`/template/${id}`} className="flex-1">
          <Button 
            variant="outline" 
            size="sm"
            className="w-full border-violet-light text-violet-dark hover:bg-violet-light/10"
          >
            <Eye size={16} className="mr-1" /> Preview
          </Button>
        </Link>
        <Button 
          size="sm" 
          className="flex-1 bg-violet-DEFAULT hover:bg-violet-dark text-white"
        >
          <ShoppingCart size={16} className="mr-1" /> Buy
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;


import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  author,
  image,
  category
}) => {
  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-violet-DEFAULT text-white">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <div className="text-sm text-gray-500 mb-2">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
      
      <CardFooter className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between w-full">
          <div className="text-sm">By {author}</div>
          <Link to={`/blog/${id}`} className="text-violet-DEFAULT hover:text-violet-dark text-sm font-medium">
            Read More
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;

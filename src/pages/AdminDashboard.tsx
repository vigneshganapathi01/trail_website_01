
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Image,
  Users,
  Settings,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("templates");
  
  // Sample template data
  const templates = [
    {
      id: "1",
      title: "Marketing Campaign Report",
      category: "Marketing",
      price: 29.99,
      sales: 124,
      dateAdded: "2023-10-15",
      status: "active"
    },
    {
      id: "2",
      title: "Startup Pitch Deck",
      category: "Pitch Decks",
      price: 39.99,
      sales: 89,
      dateAdded: "2023-09-22",
      status: "active"
    },
    {
      id: "3",
      title: "Business Plan Template",
      category: "Business",
      price: 24.99,
      sales: 67,
      dateAdded: "2023-10-05",
      status: "active"
    },
    {
      id: "4",
      title: "Educational Presentation",
      category: "Education",
      price: 19.99,
      sales: 42,
      dateAdded: "2023-11-01",
      status: "draft"
    }
  ];
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: "1",
      title: "10 Tips for Creating Effective Infographics",
      category: "Design Tips",
      author: "Sarah Johnson",
      published: "2023-11-15",
      status: "published"
    },
    {
      id: "2",
      title: "The Psychology of Colors in Presentations",
      category: "Psychology",
      author: "Michael Chen",
      published: "2023-11-08",
      status: "published"
    },
    {
      id: "3",
      title: "Data Visualization Best Practices",
      category: "Data Viz",
      author: "David Williams",
      published: "2023-11-01",
      status: "published"
    },
    {
      id: "4",
      title: "New Trends in Presentation Design 2024",
      category: "Design Tips",
      author: "Sarah Johnson",
      published: "N/A",
      status: "draft"
    }
  ];
  
  const handleDelete = (type: string, id: string) => {
    toast({
      title: `${type} deleted`,
      description: `The ${type.toLowerCase()} has been deleted successfully.`,
    });
  };
  
  const handleStatusChange = (type: string, id: string, newStatus: string) => {
    toast({
      title: `Status updated`,
      description: `The ${type.toLowerCase()} status has been updated to ${newStatus}.`,
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-darkblue-DEFAULT text-white">
        <div className="p-4 border-b border-darkblue-light">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">InfoGraphix</span>
            <Badge className="bg-violet-DEFAULT text-white">Admin</Badge>
          </Link>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-darkblue-light"
                onClick={() => setActiveTab("templates")}
              >
                <Image className="mr-2 h-4 w-4" /> Templates
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-darkblue-light"
                onClick={() => setActiveTab("blog")}
              >
                <FileText className="mr-2 h-4 w-4" /> Blog Posts
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-darkblue-light"
              >
                <Users className="mr-2 h-4 w-4" /> Users
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-darkblue-light"
              >
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Button>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-0 p-4 w-64 border-t border-darkblue-light">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-darkblue-light"
            asChild
          >
            <Link to="/">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  placeholder="Search..." 
                  className="pl-8 w-64" 
                />
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-violet-DEFAULT text-white flex items-center justify-center">
                  A
                </div>
                <span className="ml-2 font-medium">Admin User</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <div className="p-6">
          {activeTab === "templates" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Templates</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-violet-DEFAULT hover:bg-violet-dark">
                      <Plus size={16} className="mr-2" /> Add Template
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add New Template</DialogTitle>
                      <DialogDescription>
                        Create a new presentation template to add to your marketplace.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <label htmlFor="title" className="text-sm font-medium">
                          Template Title
                        </label>
                        <Input id="title" placeholder="Enter template title" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="category" className="text-sm font-medium">
                          Category
                        </label>
                        <Input id="category" placeholder="Select category" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="price" className="text-sm font-medium">
                          Price
                        </label>
                        <Input id="price" type="number" placeholder="0.00" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="file" className="text-sm font-medium">
                          Template File
                        </label>
                        <Input id="file" type="file" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-violet-DEFAULT hover:bg-violet-dark">
                        Add Template
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Sales</TableHead>
                      <TableHead>Date Added</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {templates.map((template) => (
                      <TableRow key={template.id}>
                        <TableCell className="font-medium">{template.title}</TableCell>
                        <TableCell>{template.category}</TableCell>
                        <TableCell>${template.price.toFixed(2)}</TableCell>
                        <TableCell>{template.sales}</TableCell>
                        <TableCell>{template.dateAdded}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              template.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }
                          >
                            {template.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit size={16} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                              onClick={() => handleDelete("Template", template.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
          
          {activeTab === "blog" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Blog Posts</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-violet-DEFAULT hover:bg-violet-dark">
                      <Plus size={16} className="mr-2" /> Add Blog Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add New Blog Post</DialogTitle>
                      <DialogDescription>
                        Create a new blog post to publish on your website.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <label htmlFor="title" className="text-sm font-medium">
                          Post Title
                        </label>
                        <Input id="title" placeholder="Enter post title" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="category" className="text-sm font-medium">
                          Category
                        </label>
                        <Input id="category" placeholder="Select category" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="content" className="text-sm font-medium">
                          Content
                        </label>
                        <textarea
                          id="content"
                          className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                          placeholder="Write your blog post content here..."
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="thumbnail" className="text-sm font-medium">
                          Thumbnail
                        </label>
                        <Input id="thumbnail" type="file" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-violet-DEFAULT hover:bg-violet-dark">
                        Add Post
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Published</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.category}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell>{post.published}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              post.status === "published"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }
                          >
                            {post.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit size={16} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                              onClick={() => handleDelete("Blog post", post.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

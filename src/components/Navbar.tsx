import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  User,
  ChevronDown,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
      });
      navigate('/login');
    } catch (error) {
      toast({
        title: "Error signing out",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/logo.jpg" 
            alt="Storient Logo" 
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-bold text-2xl bg-gradient-to-r from-violet-DEFAULT to-darkblue-DEFAULT bg-clip-text">
            Storient
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/templates" className="text-gray-700 hover:text-violet-DEFAULT transition-colors">
            Templates
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-violet-DEFAULT transition-colors">
              Categories <ChevronDown size={16} className="ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/category/pitch-decks" className="w-full">Pitch Decks</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/category/marketing" className="w-full">Marketing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/category/business" className="w-full">Business</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/category/education" className="w-full">Education</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/pricing" className="text-gray-700 hover:text-violet-DEFAULT transition-colors">
            Pricing
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-violet-DEFAULT transition-colors">
            Blog
          </Link>
        </div>

        {/* Search and Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart size={20} />
          </Button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-violet-DEFAULT text-violet-DEFAULT hover:bg-violet-light/10">
                  <User size={18} className="mr-2" />
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-violet-DEFAULT text-violet-DEFAULT hover:bg-violet-light/10">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-violet-DEFAULT hover:bg-violet-dark text-white">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/templates" className="text-gray-700 hover:text-violet-DEFAULT py-2 px-1 transition-colors">
              Templates
            </Link>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-violet-DEFAULT py-2 px-1 transition-colors">
                Categories
                <ChevronDown size={16} className="transform group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/category/pitch-decks" className="block py-1 text-gray-600 hover:text-violet-DEFAULT">
                  Pitch Decks
                </Link>
                <Link to="/category/marketing" className="block py-1 text-gray-600 hover:text-violet-DEFAULT">
                  Marketing
                </Link>
                <Link to="/category/business" className="block py-1 text-gray-600 hover:text-violet-DEFAULT">
                  Business
                </Link>
                <Link to="/category/education" className="block py-1 text-gray-600 hover:text-violet-DEFAULT">
                  Education
                </Link>
              </div>
            </details>
            <Link to="/pricing" className="text-gray-700 hover:text-violet-DEFAULT py-2 px-1 transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-violet-DEFAULT py-2 px-1 transition-colors">
              Blog
            </Link>
            
            {user ? (
              <>
                <Link to="/profile" className="text-gray-700 hover:text-violet-DEFAULT py-2 px-1 transition-colors">
                  Profile
                </Link>
                <Link to="/settings" className="text-gray-700 hover:text-violet-DEFAULT py-2 px-1 transition-colors">
                  Settings
                </Link>
                <Button 
                  variant="outline" 
                  className="mt-2 w-full border-red-500 text-red-500"
                  onClick={handleSignOut}
                >
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <div className="flex space-x-2 pt-2">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" className="w-full border-violet-DEFAULT text-violet-DEFAULT">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" className="flex-1">
                  <Button className="w-full bg-violet-DEFAULT hover:bg-violet-dark text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
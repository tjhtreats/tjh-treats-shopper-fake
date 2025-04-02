
import { useState } from 'react';
import { ShoppingBasket, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-chocolate">TJH Treats</h1>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-chocolate-light transition-colors">
              Products
            </a>
            <a href="#about" className="text-foreground hover:text-chocolate-light transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-foreground hover:text-chocolate-light transition-colors">
              Contact
            </a>
            <Button variant="ghost" className="relative" onClick={() => document.getElementById('cart-drawer')?.classList.toggle('translate-x-full')}>
              <ShoppingBasket className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gold text-foreground">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" className="relative mr-2" onClick={() => document.getElementById('cart-drawer')?.classList.toggle('translate-x-full')}>
              <ShoppingBasket className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gold text-foreground">
                  {totalItems}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" onClick={toggleMenu} className="ml-2">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="py-4 space-y-4 flex flex-col">
            <a href="#products" className="text-foreground hover:text-chocolate-light transition-colors" onClick={toggleMenu}>
              Products
            </a>
            <a href="#about" className="text-foreground hover:text-chocolate-light transition-colors" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#contact" className="text-foreground hover:text-chocolate-light transition-colors" onClick={toggleMenu}>
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

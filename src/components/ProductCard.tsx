
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ShoppingBasket } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <AspectRatio ratio={1} className="bg-muted">
        <img
          src={product.image || 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843'}
          alt={`${product.name} ${product.size}`}
          className="h-full w-full object-cover transition-all hover:scale-105 duration-300"
        />
      </AspectRatio>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription>{product.size}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <p className="text-lg font-bold">£{product.price.toFixed(2)}</p>
        <Button 
          onClick={() => addToCart(product)} 
          className="bg-chocolate hover:bg-chocolate-light text-white"
        >
          <ShoppingBasket className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

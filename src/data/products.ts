
export interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Dubai Chocolate Bar",
    size: "Small",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    description: "Our signature Dubai Chocolate Bar made with premium cocoa and a hint of exotic spices.",
    category: "bars"
  },
  {
    id: 2,
    name: "Dubai Chocolate Bar",
    size: "Medium",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    description: "Our signature Dubai Chocolate Bar made with premium cocoa and a hint of exotic spices.",
    category: "bars"
  },
  {
    id: 3,
    name: "Dubai Chocolate Bar",
    size: "Family",
    price: 14.49,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Our signature Dubai Chocolate Bar made with premium cocoa and a hint of exotic spices.",
    category: "bars"
  },
  {
    id: 4,
    name: "Chocolate Sponge",
    size: "Small",
    price: 12.49,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Rich and moist chocolate sponge cake with a decadent chocolate ganache.",
    category: "cakes"
  },
  {
    id: 5,
    name: "Chocolate Sponge",
    size: "Medium",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    description: "Rich and moist chocolate sponge cake with a decadent chocolate ganache.",
    category: "cakes"
  },
  {
    id: 6,
    name: "Chocolate Sponge",
    size: "Family",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Rich and moist chocolate sponge cake with a decadent chocolate ganache.",
    category: "cakes"
  },
  {
    id: 7,
    name: "Chocolate Balls",
    size: "Small (Pack of 12)",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Delectable chocolate truffles coated in cocoa powder, perfect for sharing.",
    category: "truffles"
  },
  {
    id: 8,
    name: "Chocolate Balls",
    size: "Medium (Pack of 24)",
    price: 11.49,
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    description: "Delectable chocolate truffles coated in cocoa powder, perfect for sharing.",
    category: "truffles"
  },
  {
    id: 9,
    name: "Chocolate Balls",
    size: "Large (Pack of 48)",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    description: "Delectable chocolate truffles coated in cocoa powder, perfect for sharing.",
    category: "truffles"
  }
];

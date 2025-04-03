
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
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
    description: "Our signature Dubai Chocolate Bar made with premium cocoa and a hint of exotic spices.",
    category: "bars"
  },
  {
    id: 2,
    name: "Dubai Chocolate Bar",
    size: "Medium",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b",
    description: "Our signature Dubai Chocolate Bar made with premium cocoa and a hint of exotic spices.",
    category: "bars"
  },
  {
    id: 3,
    name: "Dubai Chocolate Bar",
    size: "Family",
    price: 14.49,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834",
    description: "Our signature Dubai Chocolate Bar made with premium cocoa and a hint of exotic spices.",
    category: "bars"
  },
  {
    id: 4,
    name: "Chocolate Sponge",
    size: "Small",
    price: 12.49,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    description: "Rich and moist chocolate sponge cake with a decadent chocolate ganache.",
    category: "cakes"
  },
  {
    id: 5,
    name: "Chocolate Sponge",
    size: "Medium",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493",
    description: "Rich and moist chocolate sponge cake with a decadent chocolate ganache.",
    category: "cakes"
  },
  {
    id: 6,
    name: "Chocolate Sponge",
    size: "Family",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    description: "Rich and moist chocolate sponge cake with a decadent chocolate ganache.",
    category: "cakes"
  },
  {
    id: 7,
    name: "Chocolate Balls",
    size: "Small (Pack of 12)",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1548907040-4d42bfc4dea0",
    description: "Delectable chocolate truffles coated in cocoa powder, perfect for sharing.",
    category: "truffles"
  },
  {
    id: 8,
    name: "Chocolate Balls",
    size: "Medium (Pack of 24)",
    price: 11.49,
    image: "https://images.unsplash.com/photo-1526081347589-7fa3cb41966b",
    description: "Delectable chocolate truffles coated in cocoa powder, perfect for sharing.",
    category: "truffles"
  },
  {
    id: 9,
    name: "Chocolate Balls",
    size: "Large (Pack of 48)",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9",
    description: "Delectable chocolate truffles coated in cocoa powder, perfect for sharing.",
    category: "truffles"
  }
];

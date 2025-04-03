
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511381939415-e44015466834",
      alt: "Luxury chocolate bars arrangement",
    },
    {
      id: 2, 
      src: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
      alt: "Artisan chocolate making process",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", 
      alt: "Gift box of assorted chocolates",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
      alt: "Chocolate cake with ganache",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1526081347589-7fa3cb41966b",
      alt: "Gourmet chocolate truffles",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1548907040-4d42bfc4dea0",
      alt: "Premium chocolate assortment",
    },
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Chocolate Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handcrafted chocolate creations and the artistry behind our luxury treats.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="p-1">
                    <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-all hover:scale-105 duration-500"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;

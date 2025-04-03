
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
      src: "/chocolate-gallery-1.jpg",
      alt: "Luxury chocolate truffles arrangement",
    },
    {
      id: 2, 
      src: "/chocolate-gallery-2.jpg",
      alt: "Chocolate making process",
    },
    {
      id: 3,
      src: "/chocolate-gallery-3.jpg", 
      alt: "Gift box of assorted chocolates",
    },
    {
      id: 4,
      src: "/chocolate-gallery-4.jpg",
      alt: "Chocolate dessert plating",
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

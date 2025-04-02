
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-chocolate-dark text-white">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('/chocolate-header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Indulge in Luxury Chocolate Delights
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover our premium collection of handcrafted Dubai chocolate treats, made with the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-chocolate-dark font-bold"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          <div className="mt-8">
            <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium inline-block">
              ⚠️ Demo Site - No Real Purchases
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

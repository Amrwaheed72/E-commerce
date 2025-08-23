// app/landing-page-client.js
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Truck, ShieldCheck, Headset, Cpu, BatteryCharging, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Reusable animation variants
const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeInOut" },
};

const staggerContainer = {
    whileInView: {
        transition: {
            staggerChildren: 0.15,
        },
    },
    viewport: { once: true },
};

// Main Client Component
export function LandingPageClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <main className="flex-grow">
                <HeroSection />
                <CategoriesSection />
                <ShopByLifestyleSection /> {/* <-- NEW SECTION */}
                <FeaturedProductsSection />
                <ProductSpotlightSection /> {/* <-- NEW SECTION */}
                <ValuePropositionSection />
                <BrandStorySection />       {/* <-- NEW SECTION */}
                <NewsletterSection />
            </main>
            <Footer />
        </div>
    );
}

// Hero Section Component (Unchanged)
const HeroSection = () => {
    const images = [
        "https://picsum.photos/seed/hero1/1920/1080",
        "https://picsum.photos/seed/hero2/1920/1080",
        "https://picsum.photos/seed/hero3/1920/1080",
    ];

    // 2. State to keep track of the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // 3. Effect to change the image at a fixed interval
    useEffect(() => {
        const timer = setTimeout(() => {
            // Increment index, looping back to 0 if it's the last image
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // 5000ms = 5 seconds

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [currentImageIndex, images.length]); // Re-run effect when the index changes

    // Animation variants for the cross-fade effect
    const imageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.75, ease: "easeInOut" } },
        exit: { opacity: 0, transition: { duration: 0.75, ease: "easeInOut" } },
    };
    return (
        <section className="w-[90%] mt-5 mx-auto relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
            <AnimatePresence>
                <motion.div
                    // 5. A unique key is crucial for AnimatePresence to track the element
                    key={currentImageIndex}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt="Modern electronics on a desk"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-[0.4]"
                    // placeholder="blur"
                    // fill
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/20 z-10"></div>

            {/* The text content remains on top */}
            <motion.div
                className="relative z-20 p-4"
                // These animations make the text re-animate slightly on image change
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                    Effortless Style, Delivered.
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-200">
                    Discover curated collections of modern electronics and accessories.
                </p>
                <Button size="lg" className="mt-8 transform transition-transform hover:scale-105">
                    Shop New Arrivals
                </Button>
            </motion.div>
        </section>
    );
};

// Categories Section Component (Unchanged)
const CategoriesSection = () => {
    // ... same as before
    const categories = [
        { name: "Smartphones", image: "https://picsum.photos/seed/smartphones/600/800" },
        { name: "Laptops & Tablets", image: "https://picsum.photos/seed/laptops/600/800" },
        { name: "Audio Devices", image: "https://picsum.photos/seed/audio/600/800" },
        { name: "Accessories", image: "https://picsum.photos/seed/accessories/600/800" },
    ];

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 flex flex-col gap-12">
                <motion.h1 variants={fadeIn} className="text-3xl mx-auto md:text-4xl font-bold">Top Categories</motion.h1>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.name}
                            variants={fadeIn}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className="group"
                        >
                            <Link href="#">
                                <Card className="overflow-hidden border-2 border-transparent transition-colors group-hover:border-primary">
                                    <CardContent className="p-0">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={600}
                                            height={800}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </CardContent>
                                </Card>
                                <h3 className="mt-4 text-lg font-semibold text-center">{category.name}</h3>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// ==================================================================
// ## NEW SECTION: Shop by Lifestyle
// ==================================================================
const ShopByLifestyleSection = () => {
    return (
        <section className="py-16 md:py-24 bg-secondary overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Find Your Perfect Setup
                </motion.h2>
                <motion.div
                    className="relative h-[500px] w-full"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Card 1: For the Power User */}
                    <motion.div variants={fadeIn} className="absolute w-[50%] md:w-[30%] top-0 start-0 md:start-[10%]">
                        <Link href="#" className="group">
                            <Card className="shadow-2xl">
                                <CardContent className="p-0">
                                    <Image src="https://picsum.photos/seed/poweruser/600/400" alt="Power User" width={600} height={400} className="w-full h-full object-cover" />
                                </CardContent>
                            </Card>
                            <h3 className="mt-4 text-lg font-semibold">For the Power User</h3>
                        </Link>
                    </motion.div>
                    {/* Card 2: For the Minimalist */}
                    <motion.div variants={fadeIn} className="absolute w-[50%] md:w-[30%] bottom-0 start-[25%] md:start-[35%] z-10">
                        <Link href="#" className="group">
                            <Card className="shadow-2xl">
                                <CardContent className="p-0">
                                    <Image src="https://picsum.photos/seed/minimalist/600/400" alt="Minimalist" width={600} height={400} className="w-full h-full object-cover" />
                                </CardContent>
                            </Card>
                            <h3 className="mt-4 text-lg font-semibold">For the Minimalist</h3>
                        </Link>
                    </motion.div>
                    {/* Card 3: For the Content Creator */}
                    <motion.div variants={fadeIn} className="absolute w-[50%] md:w-[30%] top-[20%] end-0 md:end-[10%]">
                        <Link href="#" className="group">
                            <Card className="shadow-2xl">
                                <CardContent className="p-0">
                                    <Image src="https://picsum.photos/seed/creator/600/400" alt="Content Creator" width={600} height={400} className="w-full h-full object-cover" />
                                </CardContent>
                            </Card>
                            <h3 className="mt-4 text-lg font-semibold">For the Content Creator</h3>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

// Featured Products Section Component (Unchanged)
const FeaturedProductsSection = () => {
    // ... same as before
    const products = [
        { id: 1, name: "iPhone 9", price: 549, image: "https://picsum.photos/seed/product1/500/500" },
        { id: 2, name: "MacBook Pro", price: 1749, image: "https://picsum.photos/seed/product2/500/500" },
        { id: 3, name: "Wireless Earbuds", price: 120, image: "https://picsum.photos/seed/product3/500/500" },
        { id: 4, name: "Smart Watch", price: 299, image: "https://picsum.photos/seed/product4/500/500" },
    ];

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Best-Sellers
                </motion.h2>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    {products.map((product) => (
                        <motion.div variants={fadeIn} key={product.id}>
                            <Card className="h-full flex flex-col">
                                <CardContent className="p-4 flex flex-col items-center text-center flex-grow">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={200}
                                        height={200}
                                        className="mb-4 rounded-md"
                                    />
                                    <h3 className="font-semibold flex-grow">{product.name}</h3>
                                    <p className="text-muted-foreground">${product.price}</p>
                                    <Button variant="outline" className="mt-4 w-full">
                                        Add to Cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// ==================================================================
// ## NEW SECTION: Featured Product Spotlight
// ==================================================================
const ProductSpotlightSection = () => {
    const features = [
        { icon: Cpu, text: "Next-Gen A18 Bionic Chip" },
        { icon: Camera, text: "48MP Pro-Grade Camera System" },
        { icon: BatteryCharging, text: "All-Day Battery Life" },
    ];

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <motion.div {...fadeIn}>
                    <Image
                        src="https://picsum.photos/seed/spotlight/800/800"
                        alt="Product Spotlight"
                        width={800}
                        height={800}
                        className="rounded-xl shadow-2xl"
                    />
                </motion.div>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold tracking-tight">
                        The Future is Here.
                    </motion.h2>
                    <motion.p variants={fadeIn} className="mt-4 text-lg text-muted-foreground">
                        Experience unparalleled performance and a stunning new design. Our flagship product redefines what&apos;s possible.
                    </motion.p>
                    <div className="mt-8 space-y-4">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-4"
                                custom={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: i * 0.2, ease: "easeOut" } }}
                                viewport={{ once: true }}
                            >
                                <feature.icon className="h-6 w-6 text-primary" />
                                <span className="font-medium">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div variants={fadeIn}>
                        <Button size="lg" className="mt-8">Learn More</Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

// Value Proposition Section Component (Unchanged)
const ValuePropositionSection = () => {
    // ... same as before
    const items = [
        { icon: Truck, title: "Fast Shipping", desc: "Reliable and speedy delivery across Egypt." },
        { icon: ShieldCheck, title: "Secure Payments", desc: "Your transactions are safe with our encrypted checkout." },
        { icon: Headset, title: "24/7 Support", desc: "Our team is always here to help you with any questions." },
    ];

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid md:grid-cols-3 gap-8 text-center"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    {items.map((item) => (
                        <motion.div key={item.title} variants={fadeIn} className="flex flex-col items-center">
                            <item.icon className="h-10 w-10 mb-4 text-primary" />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="mt-2 text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// ==================================================================
// ## NEW SECTION: Brand Story with Parallax
// ==================================================================
const BrandStorySection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={ref} className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <motion.div className="absolute inset-0" style={{ y }}>
                    <Image
                        src="https://picsum.photos/seed/story/1920/1280"
                        alt="Our Workshop"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50"
                    />
                </motion.div>
            </div>
            <motion.div {...fadeIn} className="relative z-10 p-4">
                <h2 className="text-3xl md:text-5xl font-bold">Crafted with Passion</h2>
                <p className="mt-4 max-w-2xl mx-auto">
                    We started with a simple idea: to bring beautifully designed, high-quality tech to everyone.
                </p>
            </motion.div>
        </section>
    );
};

// Newsletter Section Component (Unchanged)
const NewsletterSection = () => {
    // ... same as before
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <motion.div {...fadeIn} className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Get exclusive deals, new product alerts, and more—straight to your inbox.
                </p>
                <form className="mt-8 max-w-md mx-auto flex gap-2">
                    <Input type="email" placeholder="Enter your email" className="flex-grow" />
                    <Button type="submit">Subscribe</Button>
                </form>
            </motion.div>
        </section>
    );
};

// Footer Component (Unchanged)
const Footer = () => {
    // ... same as before
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
                <p>&copy; 2025 StoreLogo. All rights reserved.</p>
            </div>
        </footer>
    );
};
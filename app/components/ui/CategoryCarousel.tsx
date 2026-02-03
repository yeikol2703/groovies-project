"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CategoryItem = {
  title: string;
  subtitle: string;
  href: string;
  image: string; // from /public
};

export default function CategoryCarousel({ items }: { items: CategoryItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="carousel-root">
      <div className="carousel-head">
        <h2 className="page-title">PRODUCTOS</h2>

    
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((c) => (
            <Link key={c.title} href={c.href} className="embla__slide">
              <div className="category-card">
                <div className="category-media">
                  <Image src={c.image} alt={c.title} fill className="category-img" />
                  <div className="category-overlay">
                    <div className="category-eyebrow">{c.subtitle}</div>
                    <div className="category-title">{c.title}</div>
                    <div className="category-cta">VER PRODUCTO</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
            <div className="carousel-controls">
          <button type="button" className="icon-btn" onClick={scrollPrev} aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          <button type="button" className="icon-btn" onClick={scrollNext} aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

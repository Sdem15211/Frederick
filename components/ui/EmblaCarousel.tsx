"use client";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Image from "next/image";
import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type images = {
  url: string;
}[];

export const EmblaCarousel = ({ images }: { images: images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [ClassNames()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden mt-32">
      <div ref={emblaRef} className="embla__viewport pb-10">
        <div className="embla__container gap-8 [&>*:last-child]:mr-8 flex items-end [&>*:nth-child(13)]:w-[400px] [&>*:nth-child(13)]:h-[300px] [&>*:nth-child(17)]:w-[400px] [&>*:nth-child(17)]:h-[300px]">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[300px] h-[400px] relative shrink-0 flex items-end rounded-xl shadow-lg"
            >
              <Image
                src={`/images/${image.url}`}
                fill
                className="object-cover rounded-xl shadow-lg"
                alt="foto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <button className="embla__prev" onClick={scrollPrev}>
          <div className="border border-white rounded-full p-3 group">
            <FaChevronLeft className="size-5 group-hover:opacity-50 duration-300" />
          </div>
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <div className="border border-white rounded-full p-3 group">
            <FaChevronRight className="size-5 group-hover:opacity-50 duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
};

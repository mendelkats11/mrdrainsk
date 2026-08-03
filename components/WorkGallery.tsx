import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const photos = [
  {
    src: "/photos/gallery/gallery-1.jpg",
    alt: "New supply line rough-in on a Saskatoon build",
    caption: "Rough-in, ready for inspection",
    span: "row-span-2",
  },
  {
    src: "/photos/gallery/gallery-4.jpg",
    alt: "Copper manifold and mechanical room",
    caption: "Copper manifold, done right",
    span: "row-span-1",
  },
  {
    src: "/photos/gallery/gallery-5.jpg",
    alt: "Finished modern bathroom remodel",
    caption: "Finished bathroom remodel",
    span: "row-span-1",
  },
  {
    src: "/photos/gallery/gallery-3.jpg",
    alt: "Commercial water heater mechanical room",
    caption: "Mechanical room install",
    span: "row-span-1",
  },
  {
    src: "/photos/gallery/gallery-2.jpg",
    alt: "Foundation trench excavation for a utility tie-in",
    caption: "Foundation-level tie-in",
    span: "row-span-1",
  },
  {
    src: "/photos/gallery/gallery-6.jpg",
    alt: "Original galvanized supply lines exposed for replacement",
    caption: "Old galvanized, before replacement",
    span: "row-span-1",
  },
];

export function WorkGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-rows-2">
      {photos.map((photo, i) => (
        <Reveal key={photo.src} delay={i * 80} className={`group relative overflow-hidden rounded-2xl border border-border ${photo.span}`}>
          <div className="relative h-full min-h-[160px] w-full">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
            <p className="absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-medium text-text opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.caption}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

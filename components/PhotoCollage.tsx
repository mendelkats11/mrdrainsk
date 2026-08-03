import Image from "next/image";

const photos = [
  {
    src: "/photos/gallery/gallery-4.jpg",
    alt: "Copper manifold and mechanical room installed by Mr. Drain Plumber",
    className: "left-0 top-4 h-[62%] w-[58%] -rotate-2",
    z: "z-0",
  },
  {
    src: "/photos/gallery/gallery-3.jpg",
    alt: "Commercial water heater install by Mr. Drain Plumber",
    className: "right-0 top-0 h-[38%] w-[46%] rotate-3",
    z: "z-20",
  },
  {
    src: "/photos/hero-bg.jpg",
    alt: "Mr. Drain Plumber technician repairing a pipe under a sink",
    className: "right-2 top-[34%] h-[40%] w-[48%] -rotate-3",
    z: "z-10",
  },
];

export function PhotoCollage() {
  return (
    <div className="relative mx-auto h-[600px] w-full max-w-xl sm:h-[700px]">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className={`absolute overflow-hidden rounded-2xl border-4 border-surface shadow-2xl ${photo.className} ${photo.z}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 22vw, 40vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";

export const Carousel = ({ images }: { images: string[] }) => {
  return (
    <div className="carousel my-4 max-h-96 w-96">
      {images.map((image, i) => (
        <div
          key={image}
          id={`slide-${i}`}
          className="carousel-item relative w-full"
        >
          <Image
            width={400}
            height={400}
            src={image}
            alt={`Image ${i} for Carousel`}
            className="w-full object-cover object-top"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide-${i >= 1 ? i - 1 : images.length - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide-${i < images.length - 1 ? i + 1 : 0}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

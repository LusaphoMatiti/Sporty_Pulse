import Image from "next/image";

type Prop = {
  quote: string;
  image: string;
};

const PicQuote = ({ quote, image }: Prop) => {
  return (
    <section
      className="
        relative
        left-1/2
        right-1/2
        -ml-[50vw]
        -mr-[50vw]
        w-screen
        overflow-hidden
        bg-black
        mt-20
      "
    >
      <div className="relative h-[320px] sm:h-[380px] lg:h-[460px] w-screen overflow-hidden">
        <Image
          src={image}
          alt="Training"
          className="absolute inset-0
        w-full
        h-full
        object-cover
        object-[50%_80%]
        lg:object-[50%_60%]
        sm:object-[50%_100%]
        "
          fill
          placeholder="blur"
          blurDataURL="/blur.png"
          priority
        />

        <div className="absolute inset-0 bg-black/45">
          {/* Content */}
          <div
            className="
      absolute inset-0
      z-10
      flex flex-col
      items-center
      justify-center
      text-center
      px-6 sm:px-10 lg:px-16
    "
          >
            <h3 className="max-w-3xl font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white">
              {quote}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PicQuote;

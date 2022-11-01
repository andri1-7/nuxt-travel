import Decoration from "images/decor-Intersect.svg";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="relative mb-28">
      <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0">
        <Decoration className="fill-accent-4" />
      </span>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex">
          <div className="w-6/12 pt-52">
            <h1 className="text-accent-2 font-bold text-xl uppercase mb-6">
              Best Destinations around the world
            </h1>
            <h2 className="text-gray-900 font-serif text-[84px] leading-[89px] tracking-tighter mb-8">
              Travel, enjoy and live a new and full life
            </h2>
            <p className="text-gray-500 max-w-lg leading-8">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
          </div>
          <div className="w-6/12 pt-24 relative">
            <div className="relative z-20 transform translate-x-16">
              <Image
                priority
                layout="responsive"
                width="100%"
                height="100%"
                src="/image-traveller-page1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

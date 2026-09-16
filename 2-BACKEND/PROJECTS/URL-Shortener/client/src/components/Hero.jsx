import { BookOpen } from 'lucide-react'

const Hero = () => {
  return (
    <section className="w-full">
      <div
        className="mx-auto w-full max-w-262.5 px-5 pt-9 sm:px-8 sm:pt-14 lg:pt-10 lg:px-12 xl:px-16"
      >
        {/* Small Label */}
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[10px] text-[#292522]">
            <BookOpen size={10} />
          </span>

          <span
            className="rounded-[3px] border border-[#DDD8CF] bg-[#F2EEE7] px-1.5 py-0.75 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-[#292522]"
          >
            [1] TYPOGRAPHIC CONDENSER
          </span>
        </div>

        {/* Heading */}
        <h1 className="m-0 font-headline text-[45px] font-normal leading-[0.98] tracking-[-0.035em] text-(--text-main) sm:text-[49px] lg:text-[74px]">
          Long links?{" "}
          <span className="italic text-(--accent-orange)">
            Made brief.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-160 font-body text-[16px] font-normal leading-[1.55] tracking-[-0.01em] text-[#4C4039] sm:text-[17px]">
          Paste a long link, receive an archival short code, and track human
          readership across the wire.
        </p>
      </div>
    </section>
  );
};

export default Hero;
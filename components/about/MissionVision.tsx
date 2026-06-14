import Container from "@/components/shared/Container";

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            Mission & Vision
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            Driving Innovation Through
            <span className="block text-[#0066FF]">
              Trusted Electronics Distribution
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our mission and vision guide every sourcing decision,
            supplier partnership and customer relationship we build.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-10
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#0066FF]/5 blur-3xl" />

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-[#EEF5FF]
                text-4xl
              "
            >
              🎯
            </div>

            <h3 className="mt-8 text-4xl font-bold text-[#071B4D]">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              To provide businesses with reliable access to electronic
              components, semiconductor technologies and global sourcing
              solutions that enable innovation, operational efficiency
              and long-term growth.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-[#0066FF]" />
          </div>

          {/* Vision */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-10
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="absolute left-0 bottom-0 h-32 w-32 rounded-full bg-[#FF6B00]/10 blur-3xl" />

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-[#FFF3E8]
                text-4xl
              "
            >
              🚀
            </div>

            <h3 className="mt-8 text-4xl font-bold text-[#071B4D]">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              To become a trusted global electronics distribution partner,
              connecting manufacturers, innovators and businesses through
              reliable supply chain solutions, technical expertise and
              exceptional service.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-[#FF6B00]" />
          </div>
        </div>

        {/* Bottom Statement */}
        <div
          className="
            mt-12
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-10
            text-center
            shadow-sm
          "
        >
          <h3 className="text-3xl font-bold text-[#071B4D]">
            Building Long-Term Partnerships
          </h3>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-600">
            At Lenx Tech Enterprise, we believe that successful supply
            chains are built on trust, transparency and reliability.
            Our commitment is to create lasting partnerships that help
            customers overcome sourcing challenges and achieve sustainable
            business growth.
          </p>
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/shared/Container";

const manufacturers = [
  "Texas Instruments",
  "STMicroelectronics",
  "NXP",
  "Infineon",
  "Microchip",
  "Analog Devices",
  "Renesas",
  "ON Semiconductor",
  "Vishay",
  "Murata",
  "TE Connectivity",
  "Amphenol",
];

export default function Manufacturers() {
  return (
    <section className="relative overflow-hidden bg-[#060B14] py-24">
      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      <Container>
        {/* Header */}
        <div className="relative text-center">
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            Industry Partnerships
          </span>

          <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight text-white lg:text-5xl">
            Trusted Technologies from
            <span className="block text-orange-400">
              Global Manufacturers
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Access authentic components and advanced technology
            solutions from the world's most respected semiconductor
            and industrial electronics manufacturers.
          </p>
        </div>

        {/* Manufacturer Grid */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {manufacturers.map((brand) => (
            <div
              key={brand}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-orange-500/30
                hover:bg-white/[0.05]
                hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <div className="relative flex h-36 items-center justify-center px-6">
                <span className="text-center text-lg font-medium tracking-wide text-slate-300 transition-all duration-300 group-hover:text-white">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-12 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />

          <div className="relative text-center">
            <h3 className="text-3xl font-bold text-white">
              Reliable Supply. Genuine Components.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              Our global sourcing network provides access to
              semiconductors, passive components, sensors,
              interconnects, embedded systems and industrial
              electronics from trusted manufacturers worldwide.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
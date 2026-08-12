import CallButton from "./CallButton";

export default function CallCTA() {
  return (
    <section className="bg-[var(--color-navy-deep)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Speak With an Auto Insurance Specialist
            </h2>
            <p className="mt-2 text-white/70 max-w-xl">
              Prefer to talk it through? Call now to discuss auto insurance options with the
              available insurance representative or participating service.
            </p>
          </div>
          <CallButton variant="primary" className="!bg-[var(--color-blue-sky)] !text-[var(--color-navy-deep)] hover:!bg-white shrink-0" showNumber />
        </div>
      </div>
    </section>
  );
}

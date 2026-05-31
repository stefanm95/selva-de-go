import { Cinematic } from "@/components/motion";

const steps = [
  {
    number: "01",
    title: "Collected",
    description:
      "Premium animal proteins and botanicals selected for nutritional value.",
  },
  {
    number: "02",
    title: "Frozen",
    description:
      "Ingredients rapidly frozen to protect their natural structure.",
  },
  {
    number: "03",
    title: "Preserved",
    description:
      "Moisture removed through freeze-drying while nutrients remain intact.",
  },
  {
    number: "04",
    title: "Prepared",
    description:
      "Ready to serve with flavour, texture, and nutritional integrity preserved.",
  },
];

export function ExpeditionTimeline() {
  return (
    <div className='mt-32'>
      <div className='mb-12 flex items-center gap-4'>
        <div className='h-px w-20 bg-[#7a3b45]/30' />

        <p className='text-xs uppercase tracking-[0.35em] text-[#7a3b45]'>
          Preservation Record
        </p>
      </div>

      <div className='space-y-10'>
        {steps.map((step) => (
          <Cinematic key={step.number}>
            <div className='grid gap-6 border-t border-[#7a3b45]/15 pt-8 md:grid-cols-[120px_220px_1fr]'>
              <span className='font-mono text-sm text-[#7a3b45]/60'>
                {step.number}
              </span>

              <h3 className='font-display text-3xl tracking-[-0.04em] text-[#1f1a17]'>
                {step.title}
              </h3>

              <p className='max-w-xl text-[#463c35]/75 leading-relaxed'>
                {step.description}
              </p>
            </div>
          </Cinematic>
        ))}
      </div>
    </div>
  );
}

const certifications = [
  "All Natural",
  "Gluten Free",
  "No Added Sugars",
  "Human Grade",
];

export function CertificationCard() {
  return (
    <aside
      className='
        relative
        overflow-hidden
        border
        border-[#7a3b45]/15
        bg-[#f4ecdd]/70
        p-8
        backdrop-blur-sm
      '
    >
      <div className='mb-8'>
        <div className='text-[10px] uppercase tracking-[0.35em] text-[#7a3b45]/60'>
          Field Certification
        </div>
      </div>

      <div className='space-y-4'>
        {certifications.map((item) => (
          <div
            key={item}
            className='
              flex
              items-center
              gap-3
              border-b
              border-[#7a3b45]/10
              pb-3
            '
          >
            <span className='text-[#7a3b45]'>✓</span>

            <span
              className='
                text-sm
                uppercase
                tracking-[0.18em]
                text-[#1f1a17]
              '
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      <div
        className='
          mt-10
          border-t
          border-[#7a3b45]/10
          pt-6
        '
      >
        <div className='text-[10px] uppercase tracking-[0.35em] text-[#7a3b45]/50'>
          Archive Verified
        </div>

        <div className='mt-3 text-sm uppercase tracking-[0.25em] text-[#1f1a17]/70'>
          CAT.004
        </div>
      </div>
    </aside>
  );
}

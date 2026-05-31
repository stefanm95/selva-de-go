export function IntegrityStrip() {
  return (
    <section
      className='
        relative
        mt-24
        border-t
        border-b
        border-[#7a3b45]/10
        py-10
      '
    >
      <div className='mb-8 text-[10px] uppercase tracking-[0.35em] text-[#7a3b45]/60'>
        Official Standards
      </div>

      <div
        className='
          flex
          flex-wrap
          items-center
          justify-center
          gap-12
          md:gap-20
        '
      >
        <img
          src='/images/instinct/five.png'
          alt='FEDIAF'
          className='h-24 w-auto opacity-70 grayscale'
        />

        <img
          src='/images/instinct/six.png'
          alt='UKZUZ'
          className='h-16 w-auto opacity-70 grayscale'
        />

        <img
          src='/images/instinct/four.png'
          alt='Vet Approved'
          className='h-24 w-auto opacity-70 grayscale'
        />
      </div>
    </section>
  );
}

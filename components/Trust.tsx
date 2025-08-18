const Trust = () => {
  return (
    <section id="trust" className="container mx-auto py-16 md:py-24">
      <div className="rounded-2xl border p-8 bg-card shadow-[var(--shadow-elegant)]">
        <div className="grid md:grid-cols-3 gap-6 items-center text-center">
          <div>
            <div className="text-3xl font-semibold">3s</div>
            <div className="text-sm text-muted-foreground">
              Median response time
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">500+ pages</div>
            <div className="text-sm text-muted-foreground">
              Expert research and advisories
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">10+ languages</div>
            <div className="text-sm text-muted-foreground">
              Multilingual support
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm">
          <span className="px-3 py-1 rounded border">ICAR</span>
          <span className="px-3 py-1 rounded border">openweathermap</span>
          <span className="px-3 py-1 rounded border">data.gov.in</span>
          <span className="px-3 py-1 rounded border">FAO</span>
        </div>
      </div>
    </section>
  );
};

export default Trust;

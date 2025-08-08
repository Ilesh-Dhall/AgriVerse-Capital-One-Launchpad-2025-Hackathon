const questions = [
  "When should I irrigate?",
  "What seed variety suits this unpredictable weather?",
  "Will next week's temperature drop kill my yield?",
  "Can I afford to wait for the market to improve?",
  "Where can I get affordable credit, and will any policy help me?",
];

const Problem = () => {
  return (
    <section id="problem" className="container mx-auto py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl">
          Every Question Matters, Every Decision Counts
        </h2>
        <p className="text-muted-foreground mt-3">
          When crops fail, livelihoods are at risk. Farmers need clear, trusted
          answers—fast.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {questions.map((q) => (
          <div
            key={q}
            className="rounded-lg border bg-card p-5 shadow-sm animate-fade-in"
          >
            <div className="text-sm">{q}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problem;

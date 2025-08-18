const TechStack = () => {
  return (
    <section id="tech" className="container mx-auto py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl">
          Built on Cutting-Edge AI
        </h2>
        <p className="text-muted-foreground mt-3">
          Retrieval + reasoning, modern web stack, and scalable infrastructure.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="px-3 py-1 rounded border">React</span>
        <span className="px-3 py-1 rounded border">TypeScript</span>
        <span className="px-3 py-1 rounded border">ChromaDB</span>
        <span className="px-3 py-1 rounded border">LLM/RAG</span>
        <span className="px-3 py-1 rounded border">Vector Search</span>
        <span className="px-3 py-1 rounded border">N8N</span>
      </div>
    </section>
  );
};

export default TechStack;

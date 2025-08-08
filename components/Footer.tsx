const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} AgriVerse. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a className="story-link" href="#problem">
            Problem
          </a>
          <a className="story-link" href="#solution">
            Solution
          </a>
          <a className="story-link" href="#trust">
            Trust
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

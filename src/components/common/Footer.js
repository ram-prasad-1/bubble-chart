export default function Footer() {
  return (
    <footer className="h-16 flex items-center">
      <section className="w-full flex items-center justify-between">
        <span className="text-red-600 tracking-widest">
          Thanks for reading! <span className="pl-2">❤</span>
        </span>

        <a
          href="https://twitter.com/ram_prasad_1"
          className="twitter"
          rel="noreferrer"
          target="_blank"
          title="Follow me on Twitter"
          aria-label="Follow me on Twitter"
        >
          <img src="/images/twitter.svg" alt="Twitter Logo" />
        </a>
        <div id="dummy" className="absolute invisible text-sm"/>
      </section>
    </footer>
  );
}

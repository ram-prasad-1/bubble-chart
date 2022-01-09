import { SHARE_LINK, SHARE_TEXT } from '@/constants/constants';

export default function Footer() {
  return (
    <footer className="h-16 flex items-center">
      <section className="w-full flex items-center justify-between">
        <span className="text-red-600 tracking-widest">
          Thanks for visiting! <span className="pl-2">❤</span>
        </span>

        <a
          href={`https://github.com/ram-prasad-1/bubble-chart`}
          className="twitter ml-auto mr-8"
          rel="noreferrer"
          target="_blank"
          title="Star me on github"
          aria-label="Star me on github"
        >
          <img src="/images/github.svg" alt="Github Logo" />
        </a>

        <a
          href={`https://twitter.com/share?url=${SHARE_LINK}&text=${SHARE_TEXT}`}
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

import { Tweet } from "react-tweet";
import ThemeSwitch from "@/components/theme-switch";

export const dynamic = "force-dynamic";

export default function Home({
  searchParams,
}: {
  searchParams: { tweetId: string };
}) {
  const tweetId = searchParams?.tweetId || "1683920951807971329";

  return (
    <main
      data-theme="dark"
      className="container flex min-h-screen flex-col items-center justify-between p-16 w-full"
    >
      <div>
        <div className="mb-[10px]">
          <h1 className="text-[30px] md:text-[36px] font-medium text-center mb-[6px] text-[#0d0b0b]">
            Tweet / Xeet
          </h1>
          <p className="text-[#0d0b0b] text-[14px]">
            This playground is to display the embedded tweets or xeets
            using{" "}
            <a href="https://react-tweet.vercel.app/" target="_blank">
              <strong>react-tweet</strong>
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-between lg:min-w-[600px] mb-[10px]">
          <Tweet id={tweetId} />
        </div>
        <div className="text-center mb-[20px]">
          <p className="text-[14px]">
            Preview any tweet by using tweetId in Query Params
          </p>
          <a
            target="_blank"
            href="https://react-tweet-playground.vercel.app/?tweetId=1682978324375543808"
          >
            <code className="text-[12px]">/?tweetId=1682978324375543808</code>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <p className="mr-[8px] font-medium text-[18px]">Dark Theme : </p>
          <ThemeSwitch />
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="flex justify-center items-center mb-[4px]">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=anishsrinivasan&repo=react-tweets-playground&type=star&count=false&size=small"
            frameBorder="0"
            scrolling="0"
            width="60"
            height="30"
            title="GitHub"
            className="mt-[10px]"
          ></iframe>
          <p className="text-[14px]">
            {" "}
            ~
            <a
              className="ml-[2px]"
              target="_blank"
              href="https://github.com/anishsrinivasan/"
            >
              @anishsrinivasan
            </a>
          </p>
        </div>

        <p className="text-center text-[12px]">
          Built using NextJS, Tailwind, UI Components on Vercel.
        </p>
      </div>
    </main>
  );
}

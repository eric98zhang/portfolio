import { inter_tight, roboto_mono } from "../../fonts";

export default function Home() {
  return (
    <>
      <div className={`${roboto_mono.className} mx-auto my-4 max-w-md space-y-4`}>
        <p>
          i'm a machine learning engineer at meta platforms and graduate from
          the university of waterloo.
        </p>
        <p>
          at meta, i think about how to use machine learning to solve ad market
          dynamics problems.
        </p>
        <p>i majored in computer science and statistics.</p>
        <p>i like to focus on first principles, foundations, cleanliness, and details, roughly in that order.</p>
      </div>
    </>
  );
}

import { Await, Link, defer, useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import { Suspense } from "react";
import MyAssets from "~/assetize.gen";

export const meta: MetaFunction = () => {
  return [
    { title: "Easy, Breezy, Remix-Vite-Vercel Girl" },
    { property: "og:title", content: "Easy, Breezy, Remix-Vite-Vercel Girl" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Easy, Breezy, Remix-Vite-Vercel Girl" },
  ];
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function loader() {
  return defer({
    message1: "That was easy",
    message2: sleep(1000).then(() => "That was streamy"),
  });
}

export default function Index() {
  const { message1, message2 } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix + Vite + Vercel</h1>
      <p>{message1}</p>
      <Suspense fallback="Loading...">
        <Await resolve={message2}>{(message2) => <p>{message2}</p>}</Await>
      </Suspense>
      <img src={MyAssets.images.profile.path} width={50} height={50} alt="" />
      <br />
      <Link to="/edge">Take it to the edge</Link>
    </div>
  );
}

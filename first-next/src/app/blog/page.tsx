import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog|pokemon",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setInterval(resolve, 2000);
  });
  return <h1>My blog</h1>;
}

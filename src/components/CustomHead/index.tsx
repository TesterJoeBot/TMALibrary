import Head from "next/head";

export default function CustomHead() {
  return (
    <>
      <Head>
        <title>The Most Awesome Library</title>
        <meta name="description" content="The Most Awesomest of Libraries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/home");
    },
  });

  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | LinkedIn</title>
        <meta name="description" content="LinkedIn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
        </div>
        {/* Widget */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Check if the user is authenticated on the server
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { permanent: false, destination: "/home" },
    };
  }
  return {
    props: {
      session,
    },
  };
}

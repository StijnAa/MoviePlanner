import Head from "next/head";
import Navigation from "@/components/nav/Nav";
import SimplePage from "@/components/simplePage/SimplePage";
import WelcomeMsg from "@/components/welcomeMsg/WelcomeMsg";
import LogIn from "@/components/login/Login";
import FriendsList from "@/components/friends/FriendsList";

export default function Index() {
  return (
    <>
      <Head>
        <title>Film Planner</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺</text></svg>"
        />
      </Head>
      <main className="container">
        <Navigation page="account" />
        <SimplePage>
          <WelcomeMsg />
          <LogIn />
          <FriendsList />
        </SimplePage>
      </main>
    </>
  );
}

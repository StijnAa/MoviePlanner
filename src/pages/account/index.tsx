import Head from "next/head";
import Navigation from "@/components/nav/Nav";
import SimplePage from "@/components/simplePage/SimplePage";
import WelcomeMsg from "@/components/welcomeMsg/WelcomeMsg";
import LogIn from "@/components/login/Login";
import FriendsList from "@/components/friends/FriendsList";

export default function Index() {
  return (
    <>
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

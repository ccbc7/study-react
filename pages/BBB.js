// import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";

export default function SampleHTML() {
  return (
    <>
      <Header/>
      <main>
        <Headline title="BBB" />
        <section>
          <h2>About Us</h2>
          <p>We are a company that values...</p>
        </section>
        <section>
          <h2>Our Services</h2>
          <p>We offer a wide range of services...</p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>You can reach us at...</p>
        </section>
      </main>
      <Footer/>
    </>
  );
}

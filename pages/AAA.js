// import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import Link from "next/link"

export default function SampleHTML() {
  return (
    <>
      <Header/>
      <main>
        <Headline
        title="AAA"
        number={1}
        array={[1, 2, 3]}
        obj={{ foo: "foo", bar: "bar" }}
        boolean={false}
        // boolean
        comp={<code>hogehoge</code>} // propにjsxを渡す
        onClick={() => alert("クリック！")}
        kid// チルドレン
        />
        <section>
          <h2>About Us</h2>
          <p>We are a company that values...</p>
          <Link href="/BBB">
            <div class='flex justify-center items-center '>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                Go to BBB
              </button>
            </div>
          </Link>
        </section>
        <section>
          <h2>Our Services</h2>
          <p class="font-bold text-center">We offer a wide range of services...</p>
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

import { Footer } from "../components/Footer"

export default function SampleHTML() {
  return (
    <>
      <header>
          <h1>Welcome to Our Site</h1>
          <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </nav>
      </header>

      <main>
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

      <footer>
          <p>© 2023 - Our Company</p>
      </footer>
      <Footer/>
    </>
  );
}

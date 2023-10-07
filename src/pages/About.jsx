import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import "../assets/styles/About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div style={{ marginTop: "120px" }}></div>
        <h1>About The Library</h1>

        <section className="overview-section">
          <h2>Overview</h2>
          <p>
            Welcome to The Library, your gateway to a world of knowledge and
            spiritual enrichment. This open-source project is dedicated to
            providing a platform for reading an extensive collection of books
            sourced from the Open Library API. In addition to this literary
            treasure trove, we bring you daily Geeta shlok (verses) to nurture
            your spiritual well-being and enhance the quality of your life.
          </p>
        </section>

        <section className="features-section">
          <h2>Features</h2>
          <ul>
            <li>Access to a vast library of books.</li>
            <li>User-friendly and intuitive interface.</li>
            <li>Search books by title, author, genre, and more.</li>
            <li>Read books for free.</li>
            <li>Daily Geeta shlok for spiritual enrichment.</li>
            <li>Open source, and anyone can contribute to its development.</li>
          </ul>
        </section>

        <section className="usage-section">
          <h2>Usage</h2>
          <p>
            Once you&apos;ve opened The Library Website, you can immediately
            begin your literary journey. Utilize the search options to discover
            books that captivate your interest. Click on a book to embark on a
            reading adventure, all for free.
          </p>
        </section>

        <section className="geeta-section">
          <h2>Daily Geeta Shlok</h2>
          <p>
            We believe in the transformative power of daily contemplation on
            Geeta shlok. This practice can bring several benefits to your life:
          </p>
          <ul>
            <li>
              <strong>Spiritual Enlightenment:</strong> Gain profound insights
              into the nature of life, duty, and spirituality.
            </li>
            <li>
              <strong>Mental Clarity:</strong> Enhance mental clarity and deepen
              your understanding of life&apos;s purpose.
            </li>
            <li>
              <strong>Inner Peace:</strong> Attain tranquility and fortitude to
              face life&apos;s challenges with grace.
            </li>
            <li>
              <strong>Ethical Guidance:</strong> Receive valuable insights on
              ethics, morality, and the right path in life.
            </li>
            <li>
              <strong>Stress Reduction:</strong> Experience stress reduction and
              improved mental well-being.
            </li>
          </ul>
        </section>

        <section className="contributing-section">
          <h2>Contributing 🤗</h2>
          <p>
            Feel free to explore and use our project. If you encounter issues or
            have suggestions, contribute to its development or reach out for
            assistance. Contributions are always welcome! ✨
          </p>
          <p>
            <a href="link-to-contributing.md">Learn more about contributing</a>
          </p>
          <p>
            (Please adhere to our project&apos;s{" "}
            <a href="link-to-code_of_conduct.md">code of conduct</a>.)
          </p>
        </section>

        <section className="contact-section">
          <h2>Contact Information 📧</h2>
          <p>
            If you have questions or want to connect, reach out anytime.
            I&apos;m more than happy to chat and learn from your experiences.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:your.email@example.com">Contact Me</a>
          </p>
        </section>

        <section className="thank-you-section">
          <h2>Thank You ❤️</h2>
          <p>
            Thank you for exploring The Library project. We hope it enriches
            your reading experience and provides daily spiritual nourishment
            through the Geeta shlok. Your support and contributions are deeply
            appreciated. ✨
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;

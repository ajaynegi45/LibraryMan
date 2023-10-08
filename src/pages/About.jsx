import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import "../assets/styles/About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div style={{ marginTop: "120px" }}></div>
        <h1 className="about-title">About The Library</h1>

        <section className="overview-section">
          <h2>Overview 🦉</h2>
          <p>
            Welcome to The Library, where the journey of discovery meets the
            serenity of wisdom. Immerse yourself in a world of knowledge
            carefully curated from diverse sources, including the vast Open
            Library API. Beyond an extensive collection of books, we invite you
            to experience a daily ritual of spiritual reflection through the
            timeless Geeta shlok. The Library is more than a platform; it&apos;s
            a sanctuary for your mind and soul.
          </p>
        </section>

        <section className="features-section">
          <h2>Features 🚀</h2>
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
          <h2>Usage 📚</h2>
          <p>
            Once you&apos;ve opened The Library Website, you can immediately
            begin your literary journey. Utilize the search options to discover
            books that captivate your interest. Click on a book to embark on a
            reading adventure, all for free.
          </p>
        </section>

        <section className="geeta-section">
          <h2>Daily Geeta Shlok 🙏</h2>
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
            <li>
              <strong>Personalized Recommendations:</strong> Discover books
              tailored to your interests with our advanced recommendation
              system.
            </li>
            <li>
              <strong>Interactive Community:</strong> Connect with fellow
              readers, share your favorite books, and engage in
              thought-provoking discussions in our vibrant community forum.
            </li>
          </ul>
        </section>

        <section className="contributing-section">
          <h2>Contributing 🤗</h2>
          <p>
            The Library is a community-driven project, and your contribution can
            shape its future. Dive into the codebase, suggest new features, or
            lend a helping hand to fellow contributors. Your ideas matter, and
            together, we can build a reading haven for everyone! ✨
          </p>
          <p>
            <a href="https://github.com/ajaynegi45/Library#contributing-">
              Learn more about contributing...
            </a>
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
            <a href="mailto:contact@ajaynegi.co">Contact Me</a>
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

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';


const About = ({mode,changeMode}) => {
  const [contributors, setContributors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contributorsPerPage = 5; // Number of contributors to show per page

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/ajaynegi45/LibraryMan/contributors');
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };
    fetchContributors();
  }, []);

  const nextPage = () => {
    if (currentIndex + contributorsPerPage < contributors.length) {
      setCurrentIndex(currentIndex + contributorsPerPage);
    }
  };

  const prevPage = () => {
    if (currentIndex - contributorsPerPage >= 0) {
      setCurrentIndex(currentIndex - contributorsPerPage);
    }
  };

  const styles = {
    navbarWrapper: {
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      marginBottom: '100px'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f9fa'
    },
    header: {
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px 0',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    headerTitle: {
      fontSize: '2.5rem',
      color: '#333',
    },
    section: {
      margin: '40px 0',
      padding: '30px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: '#2c3e50',
      marginBottom: '15px',
    },
    sectionText: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#555',
    },
    list: {
      listStyle: 'disc',
      paddingLeft: '20px',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    },
    contributorSection: {
      margin: '60px 0',
    },
    contributorHeader: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '30px',
      color:'blue'
    },
    contributorGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '20px',
      justifyContent: 'center',
    },
    contributorCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fafafa',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    contributorAvatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: '#ddd',
      marginBottom: '10px',
    },
    contributorName: {
      fontSize: '1.2rem',
      color: '#34495e',
    },
    contributorRole: {
      fontSize: '1rem',
      color: '#777',
    },
    contactList: {
      paddingLeft: '0',
      listStyle: 'none',
    },
    contactItem: {
      fontSize: '1.1rem',
      marginBottom: '10px',
      color:'black'
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '10px 15px',
      cursor: 'pointer',
      margin: '0 5px',
    },
  };

  return (
    <>
      {/* Navbar */}
      <div style={styles.navbarWrapper}>
        <Navbar mode={mode} changeMode={changeMode}/>
      </div>

      {/* Main Content */}
      <div style={styles.container}>
        {/* Page Header */}
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>About LibraryMan</h1>
        </header>

        {/* Overview Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Overview</h2>
          <p style={styles.sectionText}>
            LibraryMan is an innovative open-source project aimed at transforming
            how books are managed and tracked. Our platform simplifies book lending
            processes for schools, companies, and libraries around the globe by making it 
            easy to track stock, manage borrowers, and monitor due dates.
          </p>
        </section>

        {/* Mission, Vision, and Goals */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Mission</h2>
          <p style={styles.sectionText}>
            Our mission is to create an intuitive and effective solution for book
            management that empowers organizations to reduce administrative burdens
            and improve their lending processes.
          </p>

          <h2 style={styles.sectionTitle}>Vision</h2>
          <p style={styles.sectionText}>
            Our vision is to become the go-to platform for book lending management,
            recognized globally for enhancing organization and efficiency in educational
            and corporate libraries.
          </p>

          <h2 style={styles.sectionTitle}>Goals</h2>
          <ul style={{ ...styles.sectionText, ...styles.list }}>
            <li>Simplify the process of tracking books and borrowers.</li>
            <li>Support integration with other library systems.</li>
            <li>Improve the user experience for both librarians and borrowers.</li>
            <li>Foster a community of contributors.</li>
          </ul>
        </section>

        {/* Contributors Section */}
        <section style={styles.contributorSection}>
          <h2 style={styles.contributorHeader}>Our Contributors</h2>
          <div style={styles.contributorGrid}>
            {contributors.slice(currentIndex, currentIndex + contributorsPerPage).map((contributor, index) => (
              <div style={styles.contributorCard}>
              <img src={contributor.avatar_url} alt={contributor.login} style={styles.contributorAvatar} />
              <h3 style={styles.contributorName}>{contributor.login}</h3>
              <p style={styles.contributorRole}>Contributor</p>
            </div>
            
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={styles.button} onClick={prevPage} disabled={currentIndex === 0}>Previous</button>
            <button style={styles.button} onClick={nextPage} disabled={currentIndex + contributorsPerPage >= contributors.length}>Next</button>
          </div>
        </section>

        {/* History Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>History</h2>
          <p style={styles.sectionText}>
            LibraryMan was born out of the need for a simple, efficient way to manage
            library operations. It evolved into a robust open-source project that
            serves libraries of all sizes.
          </p>
        </section>

        {/* Contact Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Us</h2>
          <p style={styles.sectionText}>
            We'd love to hear from you! You can reach us through the following channels:
          </p>
          <ul style={styles.contactList}>
            <li style={styles.contactItem}>Email: contact@libraryman.org</li>
            <li style={styles.contactItem}>
              GitHub: <a href="#">github.com/LibraryMan</a>
            </li>
            <li style={styles.contactItem}>
              Twitter: <a href="#">@LibraryMan</a>
            </li>
          </ul>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;

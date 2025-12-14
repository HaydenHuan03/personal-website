import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let title = 'Home | haydenhuan.com';

      switch (hash) {
        case '#articles':
          title = 'Articles';
          break;
        case '#projects':
          title = 'Projects';
          break;
        case '#about':
          title = 'About Me';
          break;
        default:
          title = 'Home | haydenhuan.com';
      }

      document.title = title;
    };

    // Set initial title
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-700 selection:bg-cyan-200 selection:text-cyan-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

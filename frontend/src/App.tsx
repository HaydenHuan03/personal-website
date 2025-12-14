import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
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

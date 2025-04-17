import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton'; // ✅ Import it

const Layout = () => {
  return (
    <main className="max-container">
      <div className="min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <Chatbot />
      <WhatsAppButton /> {/* ✅ Add it here */}
    </main>
  );
};

export default Layout;

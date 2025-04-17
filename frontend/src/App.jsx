import Layout from './Layout';
import Home from './sections/Home';
import Invoices from './sections/Invoices';
import NewInvoice from './sections/NewInvoice';
import EditInvoice from './sections/EditInvoice';
import Partners from './sections/Partners';
import NewPartner from './sections/NewPartner';
import EditPartner from './sections/EditPartner';
import NotFound from './sections/NotFound';
import Pdf from './sections/Pdf';
import WhatsAppInvoice from './sections/WhatsAppInvoice'; // 🆕 Import this
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="new-invoice" element={<NewInvoice />} />
          <Route path="edit-invoice/:id" element={<EditInvoice />} />
          <Route path="partners" element={<Partners />} />
          <Route path="new-partner" element={<NewPartner />} />
          <Route path="edit-partner/:id" element={<EditPartner />} />
          <Route path="pdf/:id" element={<Pdf />} />
          <Route path="whatsapp-invoice" element={<WhatsAppInvoice />} /> {/* 🆕 Route added */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </DataProvider>
  );
};

export default App;

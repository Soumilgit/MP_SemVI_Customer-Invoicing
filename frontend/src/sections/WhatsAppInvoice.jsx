import WhatsAppButton from '../components/WhatsAppButton';

export default function InvoicePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Your Invoice</h1>
      <WhatsAppButton phone="+919405727673" invoiceNumber="INV123456" />
    </div>
  );
}

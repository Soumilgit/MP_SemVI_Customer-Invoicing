const twilio = require('twilio');
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const from = process.env.TWILIO_PHONE;

const client = twilio(accountSid, authToken);

exports.sendWhatsAppInvoice = async (req, res) => {
  const { to, invoiceUrl } = req.body;

  try {
    const message = await client.messages.create({
      body: `Your invoice is ready: ${invoiceUrl}`,
      from,
      to: `whatsapp:${to}`,
    });

    res.status(200).json({ success: true, sid: message.sid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

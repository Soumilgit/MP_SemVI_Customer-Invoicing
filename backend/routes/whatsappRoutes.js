const express = require('express');
const router = express.Router();
const { sendWhatsAppInvoice } = require('../controllers/whatsappController');

router.post('/send-invoice', sendWhatsAppInvoice);

module.exports = router;

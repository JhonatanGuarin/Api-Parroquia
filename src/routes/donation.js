const express = require('express');
const router = express.Router();


const {
    createDonation,
    getAllDonations,
    getDonationById,
    updateDonationById,
    deleteDonationById
  } = require('../controllers/controll-donations');

// Rutas para Donation
router.post('/', createDonation);
router.get('/', getAllDonations);
router.get('/:id', getDonationById);
router.put('/:id', updateDonationById);
router.delete('/:id', deleteDonationById);

module.exports = router;

const Donation = require('../models/donations-model');

module.exports = {
 
    createDonation : async (req, res) => {
        try {
          const newdonation = new Donation(req.body);
          const savedonation = await newdonation.save();
          res.status(201).json(savedonation);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },

  getAllDonations: async (req, res) => {
    try {
      const donations = await Donation.find();
      res.json(donations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  getDonationById: async (req, res) => {
    try {
      const donation = await Donation.findById(req.params.id).populate('donor');
      if (!donation) {
        return res.status(404).json({ message: 'Donation not found' });
      }
      res.json(donation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateDonationById: async (req, res) => {
    try {
      const updateDonation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updateDonation) {
        return res.status(404).json({ message: 'Donation not found to update' });
      }
      res.json(updateDonation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteDonationById: async (req, res) => {
    try {
      const deleteDonation = await Donation.findByIdAndDelete(req.params.id);
      if (!deleteDonation) {
        return res.status(404).json({ message: 'Donation not found to delete' });
      }
      res.json({ message: 'Donation deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};


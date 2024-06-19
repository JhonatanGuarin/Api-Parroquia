const Departure = require('../models/departure-model');


module.exports = {
// Obtener todas las partidas
getAllDepartures : async (req, res) => {
  try {
    const departures = await Departure.find();
    res.json(departures);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Buscar partidas por tipo
getDepartureByType : async (req, res) => {
  const tipo = req.params.tipo;
  try {
    const departure = await Departure.find({ tipo });
    res.json(departure);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
}

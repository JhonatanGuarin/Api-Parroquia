const Partida = require('../models/departure-model');


module.exports = {
// Obtener todas las partidas
getAllPartidas : async (req, res) => {
  try {
    const partidas = await Partida.find();
    res.json(partidas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Buscar partidas por tipo
getPartidasByType : async (req, res) => {
  const tipo = req.params.tipo;
  try {
    const partidas = await Partida.find({ tipo });
    res.json(partidas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
}

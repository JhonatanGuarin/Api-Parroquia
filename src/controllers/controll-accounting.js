const Accounting = require('../models/accounting-model');


module.exports = {
// Obtener todas las partidas
getAllAccounting : async (req, res) => {
  try {
    const accounting = await Accounting.find();
    res.json(accounting);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Buscar partidas por tipo
getAccountingByType : async (req, res) => {
  const tipo = req.params.tipo;
  try {
    const accounting = await Accounting.find({ tipo });
    res.json(accounting);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
}

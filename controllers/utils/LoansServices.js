const LoansController = require('../LoansController.js');

const LoansService = {
    getAllLoans: async (req, res) => {
      try{
        const data = await LoansController.getAllLoans();
        res.json({Loans: data});
      } catch (error) {
        
        
        res.status(500).json({ success: false, error: "Error interno"});      
      }
    },
    getLoanById: async (req, res) => {
      try{
        const data = await LoansController.getLoanById(req.params.id);
        res.json({ success: true, data});      
      } catch (error) {
        console.error("No se pudo traer data de Supabase", error.message);
        res.status(500).json({ success: false, error: "Error interno"}); 
      }
    }
}


module.exports = LoansService;
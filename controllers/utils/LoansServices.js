2


const LoansController = require('../LoansController.js');

const LoansService = {
    getAllLoanss: async (req, res) => {
      try{
        const data = await LoansController.getAllLoanss();
        res.json({Loanss: data});
      } catch (error) {
        
        
        res.status(500).json({ success: false, error: "Error interno"});      
      }
    },
    getLoansById: async (req, res) => {
      try{
        const data = await LoansController.getLoansById(req.params.id);
        res.json({ success: true, data});      
      } catch (error) {
        console.error("No se pudo traer data de Supabase", error.message);
        res.status(500).json({ success: false, error: "Error interno"}); 
      }
    }
}


module.exports = LoansService;

const supabaseServices = require('../BooksController.js');

const BooksController = {
    getAllBooks: async (req, res) => {
      try{
        const data = await supabaseServices.getAllBooks();
        res.json({Books: data});
      } catch (error) {
        
        
        res.status(500).json({ success: false, error: "Error interno"});      
      }
    },
    getBookById: async (req, res) => {
      try{
        const data = await supabaseServices.getBookById(req.params.id);
        res.json({ success: true, data});      
      } catch (error) {
        console.error("No se pudo traer data de Supabase", error.message);
        res.status(500).json({ success: false, error: "Error interno"}); 
      }
    }
}


module.exports = BooksController;
const Userservices = require('../UsersController.js');

const Userservice = {
    getAllUsers: async (req, res) => {
      try{
        const data = await Userservices.getAllUsers();
        res.json({Users: data});
      } catch (error) {
        
        
        res.status(500).json({ success: false, error: "Error interno"});      
      }
    },
    getUserById: async (req, res) => {
      try{
        const data = await Userservices.getUserById(req.params.id);
        res.json({ success: true, data});      
      } catch (error) {
        console.error("No se pudo traer data de Supabase", error.message);
        res.status(500).json({ success: false, error: "Error interno"}); 
      }
    },
    putloan: async (req, res) => {
      try{
        const data = await Userservices.putloan(req.body);
        res.json({ success: true, data});      
      } catch (error) {
        console.error("No se pudo crear el prestamo", error.message);
        res.status(500).json({ success: false, error: "Error interno"}); 
      }
    }
}


module.exports = Userservice;

const  {createClient} = require('@supabase/supabase-js')

const supabaseUrl = 'https://fzhfdnyjglsgmcpyekxr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6aGZkbnlqZ2xzZ21jcHlla3hyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzc0Mzc3MiwiZXhwIjoyMDI5MzE5NzcyfQ.3PotRcoSejX4J4Q3da3bF4RKog3ybAbcHQ8y6_ux0bk'
const supabase = createClient(supabaseUrl, supabaseKey)

const Userservices = {
    getAllUsers: async () => {
        
    let { data, error } = await supabase
    .from('Users')
    .select()
        
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  
    getUserById: async () => {
      const { data, error } = await supabase
        .from("Users")
        .select()
        .eq("id", id);
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  
    };
  

module.exports = Userservices;
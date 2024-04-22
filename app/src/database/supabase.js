import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fzhfdnyjglsgmcpyekxr.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchData() {
    const { data, error } = await supabase.from('Books').select('*');
  
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
  
    console.log('Fetched data:', data);
  }

export { fetchData } 
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js'

config();

const SUPABASE_URL = "https://dloenkendbdcfhuemvfb.supabase.co";

const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

export default supabase;

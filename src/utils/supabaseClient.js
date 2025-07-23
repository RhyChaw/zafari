// src/utils/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qnkygllyznhzyfpxyroj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFua3lnbGx5em5oenlmcHh5cm9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NzE2ODEsImV4cCI6MjA2ODU0NzY4MX0.uSrOzMDHb1jzvGRFXMWkC7QUMqrY7pcnDRFMcMONcYg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;

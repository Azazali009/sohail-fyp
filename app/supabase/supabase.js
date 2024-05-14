import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rsdxhbjvkqscrsfvcuuj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZHhoYmp2a3FzY3JzZnZjdXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NzA5NjAsImV4cCI6MjAxOTI0Njk2MH0.8UKlGHFXlRxH4I_QJ4CWGf-RBKNgKuUMG3FglXNRLk0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

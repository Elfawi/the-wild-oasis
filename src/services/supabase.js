import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gbkuxnjrslypsdicfnrn.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdia3V4bmpyc2x5cHNkaWNmbnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NDk2NjksImV4cCI6MjA2ODQyNTY2OX0.1M1Mz6LO0StsXjayqYeG49ty33A7ZDu0yFdtNQ4y7is";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

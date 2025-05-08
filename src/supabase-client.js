import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cgpjpospmkuwhlzdoyve.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNncGpwb3NwbWt1d2hsemRveXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MTQxMjMsImV4cCI6MjA1ODk5MDEyM30.QJ_2Xsh3SZ6zKFa0gWPAIl8ZsKeB0FAE8NwBPR2Acis";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

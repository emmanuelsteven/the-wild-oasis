import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zovsztyxgmjgrsmlcpel.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvdnN6dHl4Z21qZ3JzbWxjcGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3Nzc5NjMsImV4cCI6MjA5MTM1Mzk2M30.29E2oacOKp6EfO3RK9dmehN97PUEUFUNUKm_SL8i9jo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

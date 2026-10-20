import { STAGING_CONFIG, isStagingConfigured } from "./staging-config.js";
const $ = (id) => document.getElementById(id);
const status = $("status"), login = $("login"), logout = $("logout");
const workspace = $("workspace"), identity = $("identity");
let supabase;
const show = (message) => { status.textContent = message; };
const reset = () => { workspace.hidden = true; logout.hidden = true; identity.textContent = ""; };
if (!isStagingConfigured) {
  show("БЭЛЭН БИШ: тусдаа staging Supabase project үүсгэж js/staging-config.js-д зөвхөн public URL болон publishable key тохируулна уу. Production backend руу холбогдохгүй.");
} else {
  try {
    const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
    supabase = createClient(STAGING_CONFIG.url, STAGING_CONFIG.publishableKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    const apiURL = new URL("/functions/v1/fisch-api", STAGING_CONFIG.url).href;
    async function verify() {
      reset(); login.hidden = true; show("Staging серверийн Admin+ эрхийг шалгаж байна…");
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (!session) { show("Нэвтрээгүй байна. Зөвшөөрөгдсөн тестийн account-аар нэвтэрнэ үү."); login.hidden = false; return; }
        logout.hidden = false;
        const response = await fetch(apiURL, {
          method: "POST",
          headers: { "content-type": "application/json", authorization: "Bearer " + session.access_token },
          body: JSON.stringify({ action: "admin_status" })
        });
        const result = await response.json().catch(() => null);
        if (!response.ok || result?.ok !== true || result?.role !== "Admin+") {
          await supabase.auth.signOut(); reset(); login.hidden = false;
          show("ХАНДАЛТ ХОРИГЛОГДЛОО: staging сервер энэ account-д Admin+ эрх олгоогүй."); return;
        }
        workspace.hidden = false;
        identity.textContent = "Staging account UUID: " + session.user.id;
        show("Staging сервер Admin+ эрхийг баталгаажууллаа.");
      } catch {
        reset(); login.hidden = false;
        show("Серверийн баталгаажуулалт амжилтгүй. Аюулгүй байдлын үүднээс нэвтрэхийг хориглолоо.");
      }
    }
    login.addEventListener("click", async () => {
      login.disabled = true;
      const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: location.href } });
      if (error) { show("Google OAuth тохиргоог шалгана уу."); login.disabled = false; }
    });
    logout.addEventListener("click", async () => { await supabase.auth.signOut(); login.disabled = false; login.hidden = false; reset(); show("Системээс гарлаа."); });
    await verify();
    supabase.auth.onAuthStateChange(() => { void verify(); });
  } catch {
    show("Supabase клиент ачаалж чадсангүй. Холболт болон staging тохиргоог шалгана уу.");
  }
}
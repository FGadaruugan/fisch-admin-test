// Replace these placeholders only with credentials from a SEPARATE staging Supabase project.
// Never use the production project here. Publishable/anon key only; never service-role keys.
export const STAGING_CONFIG = Object.freeze({
  url: "https://YOUR-STAGING-PROJECT.supabase.co",
  publishableKey: "YOUR_STAGING_PUBLISHABLE_KEY",
});
export const isStagingConfigured =
  !STAGING_CONFIG.url.includes("YOUR-STAGING-PROJECT") &&
  !STAGING_CONFIG.publishableKey.includes("YOUR_STAGING_PUBLISHABLE_KEY");
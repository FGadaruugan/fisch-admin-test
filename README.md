# Fisch Admin Test

Тусдаа staging/test repository. Үндсэн `fisch` production сайтад өөрчлөлт хийхгүй.

## Одоогийн байдал

- [x] Admin Studio UI + responsive CSS
- [x] Fail-closed authentication gate scaffold
- [x] GitHub Pages Actions workflow
- [x] Staging configuration placeholders
- [ ] Тусдаа staging Supabase project тохируулах
- [ ] Edge Function дээр серверийн Admin+ allowlist тохируулах
- [ ] Google OAuth redirect тохируулах
- [ ] Pages deployment амжилттай болохыг баталгаажуулах

## Нээх

Deploy амжилттай болсны дараа: `https://fgadaruugan.github.io/fisch-admin-test/admin.html`

## Аюулгүй байдал

`js/staging-config.js` нь санаатай placeholder утгатай. Тусдаа staging backend бэлэн болохоос өмнө login ажиллахгүй. Production Supabase URL/key, service-role key, OAuth secret зэргийг энд бүү оруул. Friend ID нь authentication credential биш.

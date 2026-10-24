# Campbelltown Epoxy Floors (Reachlane Media lead site)

Faceless rank-and-rent enquiry site for **epoxy flooring / garage floor epoxy / concrete epoxy coating** in Campbelltown & Macarthur (NSW).

Public brand on the page: **Campbelltown Epoxy Floors**.  
Umbrella: Reachlane Media — **not** shown on the customer-facing site yet.

Site path: `/workspace/reachlane/epoxy-campbelltown/`

## Suggested domain

**Primary pick:** `campbelltownepoxyfloors.com.au`

Why: exact-match suburb + niche keywords, easy to say on the phone, strong local SEO intent.

**Strong alternates (also appeared free on check day):**

| Domain | Notes |
|--------|--------|
| `campbelltownepoxyfloors.com.au` | **Recommended** |
| `epoxyfloorscampbelltown.com.au` | Keyword-first variant |
| `campbelltowngaragefloors.com.au` | Garage-intent focus |
| `macarthurepoxy.com.au` | Broader Macarthur brand |
| `macarthurepoxyfloors.com.au` | Macarthur + floors |
| `epoxyfloorsmacarthur.com.au` | Keyword-first Macarthur |

Do **not** buy until you confirm again in a registrar cart (auDA eligibility for `.com.au` applies).

### Availability check (do not treat as a purchase)

Checked **2026-10-24** (Sydney / AEDT) via official **auDA RDAP**:

- Endpoint: `https://rdap.cctld.au/rdap/domain/{name}`
- Controls: `google.com.au` and `asos.com.au` → HTTP **200** (registered)
- Candidates above → HTTP **404** / `Object not found` (not in registry = appears **available**)
- `.com` mirrors checked via Verisign RDAP (`https://rdap.verisign.com/com/v1/domain/{name}`) → also **404** (appears available)

Re-check in your registrar before paying. This project does **not** register or pay for domains.

## Local preview

```bash
cd /workspace/reachlane/epoxy-campbelltown
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

## Hosting (free tiers)

1. **Cloudflare Pages** — connect a Git repo or direct upload; attach custom domain + free SSL.
2. **Netlify** — drag-and-drop the folder or Git deploy; same idea.

Point DNS A/CNAME per the host’s docs after the domain is registered.

## Form handling

The form posts nowhere until you set a real `action`.

1. Create a free **Formspree** or **Getform** form.
2. Replace `action="#"` on `#lead-form` with the endpoint URL.
3. Keep the **consent checkbox** required.
4. Forward notifications to the installer (or to you for manual handoff until automation).

Optional later: Netlify Forms, Cloudflare Workers + email, or a small backend.

## SEO next steps

1. Register recommended `.com.au` (if eligibility OK) and deploy this folder.
2. Google Business Profile only if accurate (enquiry service / area served — no fake street address).
3. Replace stock photos with real local project photos (with permission) when available.
4. Publish 2–3 thin-safe local pages later (e.g. `/garage-epoxy-campbelltown/`, `/oran-park/`) — not doorway spam.
5. Build citations: True Local / Hipages profile links only when the installer relationship is live.
6. Add call tracking number when ready; keep phone optional until then.
7. Submit sitemap once live; fix canonical URL to the final domain.

## Compliance reminders

- No fake reviews, no invented ABN/phone/address.
- Footer: ABN **91 355 341 661**.
- Privacy + consent copy must stay on the form.
- Wording: **Powered by local installers** — do not claim to be the licensed contractor.


## Anti-AI redesign (2026-10-25)

Site restyled to a plain light local-business look (system fonts, navy header, safety-orange accent, real stock photos). Avoid reintroducing dark neon SaaS / glassmorphism / Outfit–Inter fonts / chip rows.

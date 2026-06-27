# SADAS Website — Launch Guide

A plain-English guide to previewing, deploying, and managing your website.
Written for someone who is technically capable but has never touched domains, DNS, or hosting.

---

## Part 1 — Preview the Website Locally (No Internet Needed)

You can see the full website on your own computer before putting it online.

1. Open the `SADAS` folder on your Desktop.
2. Double-click `index.html`. It will open in your default web browser.
3. Use the navigation links to move between pages (About, Services, Contact).
4. To preview on a phone: connect your phone to the same Wi-Fi as your computer,
   find your computer's local IP address (Settings → Network), then on your phone
   open `http://192.168.x.x/index.html` — or simply use your browser's developer
   tools (F12 → "Toggle Device Toolbar") to simulate a mobile screen.

> **Note:** The Google Fonts (Cormorant Garamond + Inter) require an internet connection
> to load. Offline, the browser will fall back to Georgia and system sans-serif — the
> layout will still look correct, just with fallback fonts.

---

## Part 2 — Deploy Online with Netlify Drop (Free, No Account Needed)

Netlify Drop lets you publish a website by dragging a folder — no account, no code.

### Steps

1. Go to **https://app.netlify.com/drop** in your browser.
2. Open a File Explorer window showing the `SADAS` folder on your Desktop.
3. Drag the entire `SADAS` folder into the Netlify Drop page.
4. Wait about 10–20 seconds. Netlify will give you a temporary URL like
   `https://sparkling-dog-abc123.netlify.app`. Your site is now live.
5. Click the link to verify everything looks correct.

### To keep the site and connect a custom domain

You will need a free Netlify account for this:

1. Create an account at **https://app.netlify.com** (free plan is sufficient).
2. After signing in, go to your deployed site and click **"Claim this site"**.
3. The site is now permanently attached to your account.

### To update the website in the future

1. Make your changes to the files in the `SADAS` folder.
2. Go back to **https://app.netlify.com**, open your site, and click **"Deploys"**.
3. Drag the updated `SADAS` folder into the deploy drop zone.
4. Netlify replaces the old version within seconds.

---

## Part 3 — Connect the sadas.sarl Domain to Netlify

Once you have registered the `sadas.sarl` domain with a registrar (e.g. Gandi, Namecheap,
or your local registrar), you need to point it at Netlify.

### Step A — Tell Netlify about your domain

1. In Netlify, open your site and go to **Site Settings → Domain management**.
2. Click **"Add a domain"** and type `sadas.sarl`. Click Verify, then Add Domain.
3. Also add `www.sadas.sarl` as an alias (Netlify will prompt you).

### Step B — Add DNS records at your registrar

Log in to wherever you bought `sadas.sarl` and find the **DNS settings** (sometimes
called "DNS Zone" or "Nameservers"). You need to add these records:

| Type  | Name            | Value                    | TTL     |
|-------|-----------------|--------------------------|---------|
| A     | @ (root domain) | 75.2.60.5                | 3600    |
| CNAME | www             | your-netlify-site.netlify.app | 3600 |

> **What these do:**
> - The **A record** points `sadas.sarl` (the bare domain) to Netlify's server.
> - The **CNAME** makes `www.sadas.sarl` an alias that also goes to your Netlify site.
> - **75.2.60.5** is Netlify's load balancer IP — this is correct as of 2025.

### Step C — Enable HTTPS (free, automatic)

1. Back in Netlify → Domain management, scroll to **HTTPS**.
2. Click **"Verify DNS configuration"**. Once DNS propagates (up to 24 hours, often
   under 1 hour), Netlify will automatically issue a free SSL certificate via Let's Encrypt.
3. You will see a green "HTTPS certificate provisioned" message when it is ready.
4. From that point, your site is live at **https://sadas.sarl**.

---

## Part 4 — Set Up a Free Business Email (info@sadas.sarl) with Zoho Mail

Zoho Mail's free plan gives you up to 5 users at your own domain with no ads.

### Step 1 — Create a Zoho Mail account

1. Go to **https://www.zoho.com/mail** and click **"Get Started"** on the free plan.
2. Click **"Add your existing domain"** and type `sadas.sarl`.
3. Create a Zoho account (use a personal email address for registration).

### Step 2 — Verify that you own the domain

Zoho needs to confirm you control `sadas.sarl`. It will show you a TXT record to add.

1. In Zoho, copy the TXT record value (it looks like `zoho-verification=zmXXXXXXXX`).
2. Log in to your domain registrar's DNS settings.
3. Add this record:

   | Type | Name             | Value                            |
   |------|------------------|----------------------------------|
   | TXT  | @ (root domain)  | zoho-verification=zmXXXXXXXXXX  |

4. Back in Zoho, click **"Verify"**. DNS changes can take a few minutes to an hour.

### Step 3 — Add the MX records (this is what makes email work)

MX records tell the internet where to deliver email for your domain.
In your registrar's DNS settings, add these records exactly:

| Type | Name | Value                  | Priority | TTL  |
|------|------|------------------------|----------|------|
| MX   | @    | mx.zoho.eu             | 10       | 3600 |
| MX   | @    | mx2.zoho.eu            | 20       | 3600 |
| MX   | @    | mx3.zoho.eu            | 50       | 3600 |

> **Why three MX records?** They are backups for each other. If the first server is
> unavailable, email automatically tries the second, then the third.
> The number in "Priority" is the order — lower number = tried first.

### Step 4 — Create the info@sadas.sarl mailbox

1. Back in Zoho Mail, go to **Control Panel → Mail Accounts**.
2. Click **"Add User"**, set the username to `info` and create a password.
3. You now have `info@sadas.sarl` ready to use.

### Step 5 — Add an SPF record (prevents your emails landing in spam)

| Type | Name | Value                                           |
|------|------|-------------------------------------------------|
| TXT  | @    | v=spf1 include:zoho.eu ~all                    |

### Step 6 — Access your email

- **Browser:** go to **https://mail.zoho.eu** and log in with `info@sadas.sarl`.
- **Mobile app:** download the **Zoho Mail** app (iOS or Android) and sign in.
- **Desktop client (Outlook, Apple Mail):** use IMAP settings from Zoho's help docs.

---

## Part 5 — Complete Placeholder Checklist

Every `<!-- REPLACE: ... -->` comment in the HTML files marks something you need to
update before going live. Here is the full list:

---

### WhatsApp Number
**Where:** Every HTML file, in 3–4 places each (floating button, footer, contact page CTA).
**What to do:** Replace `961XXXXXXXXX` with your real number in international format,
no `+` sign, no spaces. Lebanese numbers look like: `96170123456` or `96103123456`.
**Example:** `href="https://wa.me/96170123456"`

---

### Phone Number (Contact Page)
**Where:** `contact.html` — the Phone contact item.
**What to do:** Replace `+961 XX XXX XXX` with the real landline or mobile number.
Also update the `href="tel:+961XXXXXXXXX"` link to match.

---

### Address (Contact Page)
**Where:** `contact.html` — the Address contact item.
**What to do:** Fill in `[Street Name]` and `[District]` with the actual street address
of the SADAS office in Tripoli.

---

### Business Hours (Contact Page)
**Where:** `contact.html` — the Business Hours contact item.
**What to do:** Replace `[Time] – [Time]` placeholders with your real opening hours.

---

### Google Maps Embed (Contact Page)
**Where:** `contact.html` — inside `<div class="map-wrap">`.
**What to do:**
1. Go to Google Maps and search for your address.
2. Click "Share" → "Embed a map" → Copy the `<iframe>` code.
3. In `contact.html`, delete the `<div class="map-placeholder">...</div>` block.
4. Paste the iframe in its place. Add `class="map-iframe"` to the `<iframe>` tag.

---

### Founding Year (Home Hero)
**Where:** `index.html` — the `<span class="hero-eyebrow">` line.
**What to do:** Replace the comment `<!-- REPLACE: Insert founding year -->` with
the actual year SADAS was established (e.g. `Est. 1978`).

---

### Company Story (About Page)
**Where:** `about.html` — the three paragraphs in the "Our Story" section.
**What to do:** Replace the placeholder text with the real family history —
when the firm was founded, by whom, how it has evolved, and what defines it.

---

### Trust Pillars (About Page)
**Where:** `about.html` — the four pillar descriptions.
**What to do:** Review and personalise the text under Expertise, Integrity,
Local Roots, and Discretion to match your own words and specific examples.

---

### Team Photo (About Page)
**Where:** `about.html` — the `<div class="photo-placeholder">` block.
**What to do:** Delete the placeholder div and replace it with an `<img>` tag:
```html
<img src="img/team-photo.jpg"
     alt="The SADAS team"
     style="width:100%; height:auto; display:block;" />
```
Create an `img/` folder inside `SADAS/` and put the photo there.
Recommended: at least 800 × 1000 px, JPG or WebP format.

---

### Services (Services Page)
**Where:** `services.html` — any card or paragraph marked REPLACE.
**What to do:** Adjust the descriptions and tags to accurately reflect what
SADAS actually offers. Remove or rename service cards that do not apply.

---

### Meta Descriptions & OG Tags
**Where:** The `<head>` section of each HTML file.
**What to do:** The placeholder descriptions are good enough to start with,
but personalising them improves SEO and social sharing appearance.
Each page's `og:url` should also be updated once your domain is live.

---

### Social Sharing Image
**Where:** Each HTML file — the commented-out `<meta property="og:image">` tag.
**What to do:** Create a 1200 × 630 px image (your logo on a dark gold background
works well), save it as `img/og-image.jpg`, then uncomment that line on each page.

---

### Copyright Year
**Where:** Handled automatically — a small `<script>` block sets the year to the
current year at page load. No manual update needed.

---

## Quick DNS Reference

Here is every DNS record you will need, in one place:

| Purpose        | Type  | Name | Value                       | Priority |
|----------------|-------|------|-----------------------------|----------|
| Root domain    | A     | @    | 75.2.60.5 (Netlify)         | —        |
| www subdomain  | CNAME | www  | your-site.netlify.app       | —        |
| Zoho verify    | TXT   | @    | zoho-verification=zmXXXXX   | —        |
| Email (primary)| MX    | @    | mx.zoho.eu                  | 10       |
| Email (backup) | MX    | @    | mx2.zoho.eu                 | 20       |
| Email (backup) | MX    | @    | mx3.zoho.eu                 | 50       |
| Anti-spam SPF  | TXT   | @    | v=spf1 include:zoho.eu ~all | —        |

Add all of these at your domain registrar's DNS panel. They can coexist without conflict.

---

*Guide written for sadas.sarl — June 2026.*

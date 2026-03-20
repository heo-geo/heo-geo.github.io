---
slug: shopify-preview-bar
date: 2024-10-04
authors: [heo]
tags: [shopify]
---

# 🧩 Hiding or Showing the Shopify Preview Bar with pb=0 - pb=1

When sharing a **theme preview link** in Shopify, the **Preview Bar** often appears at the bottom of the page. While helpful for admins, it can be distracting during **client reviews**, **QA sessions**, or when showcasing designs externally.

<!-- truncate -->

Thankfully, you can **toggle the preview bar** with a simple query parameter:

✅ **Hide the Preview Bar:**

Add `?pb=0` to your preview URL.
**Example:**
`https://yourstore.myshopify.com/?preview_theme_id=123456789&pb=0`

🔄 **Show the Preview Bar Again:**

Use `?pb=1` to restore it.
**Example:**
`https://yourstore.myshopify.com/?preview_theme_id=123456789&pb=1`

⚠️ Important Note on Caching

Shopify **caches your preview bar preference** in your browser session. That means:

- Once you hide or show it with `pb=0` or `pb=1`, that state will persist across previews

- The preference stays **until the cache is reset** or a **new query parameter** is added to the URL


So if you're still seeing the bar (or not seeing it), try changing the parameter or clearing the cache to reset the state.

---

It's a simple tweak — but it helps create a cleaner, more professional experience when sharing your work. 💡

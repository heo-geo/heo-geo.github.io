# ☄️ Accessing Metaobjects in Liquid

I was recently working on a Shopify theme and needed to grab **Metaobjects** - first from a **Metafield reference**, then directly from the shop itself. The docs are helpful, but I figured I'd drop a quick summary here in case someone else is searching like I was.

## 🔗 Getting Metaobjects from a Metafield

If you've got a metafield on a product (or any resource) that stores **Metaobject references**, you can loop through it like this:

```liquid
{% for metaobject in product.metafields.custom.pdp_faq_items.value %}
  {% if metaobject.question_single and metaobject.answer_single %}
    <ul>
      <li>
        <strong>Q:</strong> {{ metaobject.question_single }}<br>
        <strong>A:</strong> {{ metaobject.answer_single }}
      </li>
    </ul>
  {% endif %}
{% endfor %}
```

- `.value` gives you the array of metaobjects.
- The field names like `question_single` and `answer_single` should match what's defined in your metaobject template.

## 📦 Accessing Metaobjects Directly via `shop.metaobjects`

If you're working with **site-wide or shared content** (e.g. modals, banners, color patterns, size charts), Shopify gives you direct access through the `shop.metaobjects` object.

Here's an example of grabbing a **specific metaobject** by handle:

```liquid
{% liquid
  assign upsell_popup = shop.metaobjects.pdp_upsell_pop_up_modal['handle-of-the-metaobject']

  assign modal_background_color = upsell_popup.modal_background_color
  assign modal_title = upsell_popup.modal_title
  assign modal_description = upsell_popup.modal_description | metafield_tag
  assign modal_product_image = upsell_popup.modal_product_image
  assign modal_product_title = upsell_popup.modal_product_title
  assign modal_product_cta_text = upsell_popup.modal_product_cta_text
  assign modal_upsell_product = upsell_popup.modal_upsell_product.value
%}
```

You can also loop through **all** metaobjects of a given type if needed:

```liquid
<ul>
  {% for item in shop.metaobjects['shopify--color-pattern'].values %}
    <li>{{ item.label }}</li>
  {% endfor %}
</ul>
```

- `shopify--color-pattern` is the metaobject type (replace with yours).
- You access fields like label, title, or whatever's defined in the object.

## 🧠 Final Tip

Use **Metafield references** when content is tied to specific resources (like FAQs per product), and reach for `shop.metaobjects` for reusable, global content (like modals or site-wide promotions).

✅ Always check if fields exist before rendering, especially if you're working with optional content, to prevent errors in production.

**Hope this helped you on your search! 😊**
# 🏗️ Theme Architecture

## **Layouts**

1. What is a layout?
    
2. What types of layouts do you know, and how are they used?
    
3. What are `content_for_header` and `content_for_layout`, and what content do they load?
    

## **Templates**

1. What do you know about Shopify templates?
    
2. What types of templates exist in Shopify?
    
3. What’s the difference between JSON and Liquid templates?
    
4. Where is the data from the JSON and Liquid templates stored?
    
5. How many templates can a theme contain?
    
6. What do you know about the `gift_card` template?
    
7. What are alternate templates, and how do they work?
    
8. How many sections can a JSON template include?
    
9. How can you add a wrapper to a JSON template (using a `<article>` tag) with the class “custom-template”?
    

## **Sections**

1. What is your understanding of sections?
    
2. What is required for a section to be added to a JSON template via Shopify theme customizer?
    
3. What types of inputs can be integrated through a section schema
    
    - Where can a list of available inputs be found?
        
4. What do you know about `section.id`, `block.id`, and `block.type` in Liquid?
    
    - What data do they represent?
        
    - Provide an example of how to use these in section building.
        
5. What is the default wrapper tag for a section?
    
    - How to change the wrapper tag type?
        
6. What attributes does the default section wrapper tag have?
    
7. How can a custom class be assigned to a section wrapper?
    
8. How can a block limit be set within a section?
    
9. How many blocks can a section have?
    
10. What is a section group, and what is it used for?
    
11. How can a merchant be limited to adding only one instance of a section per template?
    

## **Snippets**

1. What is a “snippet” in a Shopify theme, and how is it structured within the theme architecture?
    
2. What are common uses or applications of snippets in Shopify themes
    
    - Provide examples of scenarios where snippets are particularly beneficial.
        
3. What are the two primary methods for rendering a snippet in a Shopify theme?
    
    - Describe the differences between them.
        
4. How can you create a snippet that accepts parameters from a parent element?
    
    - Provide an example of defining and passing parameters to a snippet in a Shopify theme.
        

## **Config**

1. What are `settings_schema.json` and `settings_data.json`?
    
2. Give an example of how to use  `settings_schema.json`
    

## **Locales**

1. How do locale files work in a Shopify theme?
    
2. How can Liquid render variables based on the store’s locale file?
    
3. How can block titles on the checkout page be customized for different locales?
    

## **Cart**

1. What is a cart line item?
    
2. How can a link be created to remove all quantities of a single line item using Liquid?
    
3. How can a link be created to set the quantity of a single line item to 5 using Liquid?
    
4. What are cart notes and cart attributes?
    
    - What data can be stored there, and how is it represented in the admin panel?
        
5. What are line item properties, and what is the difference between line item properties and cart attributes?
    

## **Collection**

1. How does product filtering and sorting work in collections?
    
2. How can a collection page with filtering and sorting be retrieved using JavaScript?
    
3. What do you know about pagination on collection pages?
    
    - What are its limitations?
        
4. How can you retrieve a collection object using a JavaScript fetch request?
    

## **Products**

1. How can you retrieve a product object using a JavaScript fetch request?
    
2. What is the difference between a product ID and a variant ID?
    
3. What are “Dynamic checkout buttons”?
    
4. How do product recommendation algorithms work?
    
5. What are product type, vendor, and tag?
    
    - Give examples of how they can be used.
        

## **Discounts**

1. What types of discounts are available in Shopify?
    
2. How can you create custom discount types?
    
3. What are Shopify Scripts and Shopify Functions for discounts? What is the difference between them?
    
4. What are `discount_application` and `discount_allocation` objects? What are their uses?
    

## **Customer**

1. What data is represented in a customer account?
    
2. Is it possible to collect additional customer information during the registration flow?
    

## **Blogging**

1. What is an article template, and how is it used in themes?
    
2. How can readers add comments to an article?
    
3. Where is a blog template used?
    
4. Can you create different blog listing pages for different topics?
    
5. How can articles be filtered on a blog page?
    

## **Gift Card**

1. How does the gift card feature work in Shopify?
    
2. Is it possible to use JSON templates for gift card pages?
    

## **Notifications**

1. How do you set up a newsletter sign-up form?
    
2. How can you automatically subscribe users to a newsletter when they create an account?
    
3. Where can you adjust email templates for customers?
    

## **Additional Topics**

1. Is it possible to disable reCAPTCHA in a store?
    
    - How can this be done
        
    - When might it be useful?
        
2. What feature does Shopify offer for generating QR codes?
    
3. How can you add a custom tag to a user when they sign up using the default email sign-up form?
    
4. What is “**Dawn**” and why should merchants consider using it?
    
5. What is the “Shopify selling plan”?
    
6. If a client asks you to migrate their store to Online Store 2.0, what does this migration involve?
    
7. What is `shopify_asset_url`?
    
8. What is “**design mode”** in the context of Shopify?
    
    - Provide an example of how design mode can be used.
        
    - How can you detect design mode using a Liquid?
        
    - Can you detect design mode using JavaScript?
        
    - How can a detection of adding a new section in the Customizer be triggered to run JavaScript scripts?
        
    - How can JavaScript detect section reordering in the Customizer?
# 🚰 Liquid - Theory

## Basic

1. What is the Liquid template language?
    
2. Where in a Shopify store can the Liquid language be used?
    
3. What are the primary components of the Liquid template language?
    
4. What are Liquid objects in Shopify, and what types of data do they represent?
    
5. How can data representation logic be implemented using Liquid?
    
6. What logical and comparison operators are available in Liquid?
    
7. What types of data are supported in Liquid?
    

## Tags

1. What types of tags exist in the Liquid language?
    
2. What is the difference between double curly braces (`{{ }}`) and curly braces with percentage delimiters (`{% %}`)? When should each be used?
    
3. What types of conditional tags are there, and how can they be used?
    
4. What do you know about Liquid tags for HTML forms, and what are their uses?
    
5. What types of iteration tags are there?
    
6. What is the pagination iteration tag, and what are its limitations?
    
7. What do you know about theme tags?
    
8. How is the `layout` tag used?
    
9. What is the difference between the `render` tag and the `include` tag?
    
10. Where can the `section` tag be used?
    
11. What is a `section` tag, and what is it used for?
    
12. How can a variable be created in Liquid?
    
13. What is the difference between the `assign` and `capture` Liquid tags?
    

## Filters

1. What are filters in Liquid, and what can they be used for?
    
2. What filters do you know?
    
3. Provide an example of using array filters.
    
4. What do you know about collection filters?
    
5. How can Liquid create a link to a collection page that lists all products of a specific product type?
    
6. How can Liquid create a link to a collection page that lists all products of a specific product vendor?
    
7. How can Liquid create a link to a collection page sorted by ascending price?
    
8. What do you know about color filters?
    
9. What do you know about customer filters?
    
10. What do you know about font filters?
    
11. How can you create a section where a merchant can upload a custom font from the customizer using the `font-face` filter?
    
12. How can we convert a timestamp to a different date format using Liquid filters?
    
13. What is the `json` filter, and how is it used? Provide an example.
    
14. What is `placeholder_svg_tag`?
    
15. What do you know about the Liquid `preload` filter?
    
16. What file-hosting filters are available?
    
17. How can you create a link to a file in the theme’s `assets` folder?
    
18. How can you create a link to a file in the store's file storage?
    
19. What do you know about the `translate` filter?
    
20. What do you know about math filters? Provide an example of their usage.
    
21. How do you load images on a page using a media filter?
    
22. How does Shopify load 3D objects by default?
    
23. What does the `model_viewer_tag` do?
    
24. What do you know about metafield filters?
    
25. What do you know about money filters, and where are they used?
    
26. How can you load a dynamic payment button using Liquid filters?
    
27. What does the `| escape` filter do?
    
28. If you need to convert a string to lowercase and replace whitespaces with dashes, how would you do it (i.e., make a string-like handle)?
    
29. How do you replace all instances of one word in a string with another word?
    
30. How can you create an array from a string using a custom separator?
    
31. How can you remove all whitespace from both sides of a string?
    
32. What does the `truncate` filter do?
    
    - Provide a use case and explain the difference between `truncate` and `truncatewords`.
        

## Objects

1. What types of data can Liquid objects represent?
    
2. What object access limitations do you know of?
    
3. What does the `all_products` object do, and how can it be used?
    
    - What are its limitations?
        
4. What is the `app` object in Liquid?
    
5. How can you create a section that lists the latest blog articles in the store?
    
6. What does the `cart` object represent, and how can you check if a specific product is in the cart using Liquid?
    
7. How can you retrieve a collection’s description?
    
8. How can you get a list of all store collection titles?
    
9. What is the `content_for_layout` object?
    
10. How can you create the following condition in Liquid:
    
    - if the user is logged in, display the customer’s name; if not, display a link to the login page
        
11. What do you know about the `forloop` object, and how can it be used?
    
12. What is the `line_item` object, where can it be found, and what is it used for?
    
13. How can you retrieve the navigation object in Liquid representing the menu populated by the merchant in the Admin panel’s navigation page
    
    - How can you access subitems?
        
14. How can you check the media type that loads on a product page?
    
15. What do you know about metafields, and how can you retrieve this data using Liquid?
    
16. What are a metafield namespace and key?
    
17. How can you check if a product has text content in a specific metafield?
    
18. How can you retrieve metaobject data using Liquid?
    
19. How can you access a page’s handle, title, and content in Liquid?
    
20. How can you get a product's availability status?
    
21. How can you retrieve information about a product’s options?
    
22. How can you check if a product has only one variant?
    
23. What is the difference between a product ID and a variant ID?
    
24. How can you create a custom CSS rule for a section using the Liquid section object?
    
25. What do you know about the `settings` object, and how is it used?
    
26. If you need to add a specific link in the `<head>` tag for a product page, how would you do it?
    
27. What is the `store_availability` object, and what data does it represent?
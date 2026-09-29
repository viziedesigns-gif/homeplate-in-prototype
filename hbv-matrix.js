/* Indiana HBV Food Categorization Matrix v1.0.0 - embedded verbatim from client brief PDF (foodmarket-brief) */
window.HBV_MATRIX = {
 "$schema": "http://json-schema.org/draft-07/schema#",
 "title": "Indiana Home-Based Vendor (HBV) Food Categorization Matrix",
 "jurisdiction": "Indiana, USA",
 "governing_law": "Indiana Code § 16-42-5.3",
 "version": "1.0.0",
 "last_updated": "2026-09-29",
 "metadata": {
  "description": "Exhaustive taxonomy of foods permitted and prohibited under Indiana Home-Based Vendor cottage food laws for app menu validation.",
  "hbv_exemption_status": "Non-TCS (Time/Temperature Control for Safety) items only. Does not require kitchen inspection or health department permit."
 },
 "allowed_categories": [
  {
   "category_id": "bakery_non_perishable",
   "category_name": "Baked Goods & Pastries (Non-Perishable)",
   "tcs_status": false,
   "requires_commercial_license": false,
   "allowed_items": [
    "Bagels",
    "Baked Donuts (without perishable filling/glaze)",
    "Breads and Rolls (yeast and quick breads)",
    "Brownies and Blondies",
    "Biscuits and Scones (standard plain or dried fruit)",
    "Cakes and Cupcakes (with standard sugar/buttercream frosting)",
    "Cake Pops",
    "Cinnamon Rolls (with standard sugar icing)",
    "Cookies (chocolate chip, sugar, oatmeal, peanut butter, etc.)",
    "Crackers and Flatbreads",
    "Croissants and Danish (unfilled or fruit-filled with shelf-stable fruit jam)",
    "Fruit Pies, Tarts, and Turnovers (high-acid fruits like apple, cherry, peach, blackberry)",
    "Muffins",
    "Pound Cakes",
    "Soft and Hard Pretzels",
    "Sweet Breads (banana, zucchini, pumpkin bread - baked)",
    "Shortbread"
   ],
   "app_validation_rules": {
    "requires_filling_attribute_check": true,
    "restricted_fillings": [
     "cream_cheese",
     "custard",
     "fresh_dairy",
     "whipped_cream",
     "fresh_fruit_curd",
     "meat"
    ]
   }
  },
  {
   "category_id": "candies_confections",
   "category_name": "Candies & Confectionery",
   "tcs_status": false,
   "requires_commercial_license": false,
   "allowed_items": [
    "Brittles (peanut, pecan, walnut)",
    "Caramels and Toffees",
    "Chocolate-Covered Nuts, Dried Fruits, Pretzels, or Coffee Beans",
    "Chocolates and Truffles (with shelf-stable/non-dairy centers)",
    "Cotton Candy",
    "Fudge",
    "Hard Candies and Lollipops",
    "Marshmallows",
    "Molded Chocolates",
    "Pralines",
    "Rock Candy",
    "Taffy"
   ],
   "app_validation_rules": {
    "requires_filling_attribute_check": false
   }
  },
  {
   "category_id": "dry_goods_mixes",
   "category_name": "Dry Goods, Mixes & Seasonings",
   "tcs_status": false,
   "requires_commercial_license": false,
   "allowed_items": [
    "Baking Mixes (dry cake, cookie, pancake, bread mixes)",
    "Cereal and Granola",
    "Custom Spice Blends, Rubs, and Seasoning Salts",
    "Dehydrated / Dried Herbs and Spices",
    "Dried Fruit (plain, unflavored, shelf-stable)",
    "Dried Pasta and Dried Noodles (fully dried)",
    "Dried Soup Mixes (grains, beans, dry spices only; no meat powders)",
    "Dry Beverage Mixes (hot cocoa mix, powdered tea, chai mix)",
    "Dry Legumes and Bean Mixes",
    "Flours and Meal Mixes",
    "Popcorn, Kettle Corn, and Seasoned Popcorn",
    "Roasted and Seasoned Nuts or Seeds",
    "Trail Mixes and Snack Mixes"
   ],
   "app_validation_rules": {
    "prohibit_meat_ingredients": true
   }
  },
  {
   "category_id": "beverages_dry_roasted",
   "category_name": "Coffee, Tea & Dry Beverages",
   "tcs_status": false,
   "requires_commercial_license": false,
   "allowed_items": [
    "Dried Herbal Teas and Tea Blends",
    "Loose-Leaf Teas",
    "Roasted Coffee Beans (whole bean or ground)"
   ],
   "app_validation_rules": {
    "prohibit_liquid_beverages": true
   }
  },
  {
   "category_id": "preserves_sweeteners",
   "category_name": "Fruit Preserves & Natural Sweeteners",
   "tcs_status": false,
   "requires_commercial_license": false,
   "allowed_items": [
    "Traditional Fruit Jams (high-acid, standard full-sugar formulation)",
    "Traditional Fruit Jellies (high-acid, standard full-sugar formulation)",
    "Fruit Preserves and Marmalades (traditional full-sugar)",
    "Honey (pure, unadulterated honey)",
    "Maple Syrup",
    "Sorghum Syrup",
    "Molasses",
    "Nut Butters (peanut butter, almond butter, sunflower seed butter)"
   ],
   "app_validation_rules": {
    "requires_ph_or_sugar_declaration": true,
    "prohibit_low_sugar": true
   }
  }
 ],
 "prohibited_categories": [
  {
   "category_id": "prepared_meals_tcs",
   "category_name": "Hot / Prepared Meals & TCS Foods",
   "tcs_status": true,
   "requires_commercial_license": true,
   "prohibited_items": [
    "All Cooked Meats, Poultry, and Seafood (beef, chicken, pork, turkey, fish, shrimp)",
    "Casseroles, Lasagnas, and Baked Pasta Dishes",
    "Enchiladas, Tacos, and Tamales",
    "Cooked Rice, Quinoa, and Grain Dishes",
    "Cooked Vegetables, Beans, and Potatoes",
    "Soups, Stews, Broths, and Gravies",
    "Pizzas and Calzones",
    "Sandwiches, Wraps, and Burgers",
    "Sushi and Raw Seafood",
    "Cut Fresh Fruits and Cut Fresh Vegetables",
    "Salads (green salads, pasta salads, potato salads, egg salads)",
    "Fresh Unpasteurized Dairy Products",
    "Cooked Eggs and Egg-Based Dishes (quiches, frittatas)"
   ],
   "rejection_reason": "Perishable item requiring Time/Temperature Control for Safety (TCS). Must be prepared in an inspected commercial kitchen with a Retail Food Establishment permit."
  },
  {
   "category_id": "perishable_bakery_fillings",
   "category_name": "Perishable Bakery Products & Temperature-Sensitive Fillings",
   "tcs_status": true,
   "requires_commercial_license": true,
   "prohibited_items": [
    "Cheesecakes and Cream Cheese Pastries",
    "Cream Cheese Frostings or Fillings (unless formulation is proven non-TCS)",
    "Custard Pies, Cream Pies, and Meringue Pies (pumpkin pie, key lime pie, banana cream pie)",
    "Pastries with Whipped Cream or Fresh Dairy Fillings",
    "Eclairs, Cream Puffs, and Cannolis with Fresh Dairy Filling",
    "French Macarons with Fresh Fruit Curd (e.g., lemon curd), Cream Cheese, or Butter-Heavy Perishable Fillings",
    "Tres Leches Cakes",
    "Fresh Fruit Topped Baked Goods (where fruit is wet/uncooked on top)"
   ],
   "rejection_reason": "Contains high-moisture dairy, fresh egg, or fresh fruit fillings that require constant refrigeration."
  },
  {
   "category_id": "canned_acidified_low_acid",
   "category_name": "Canned Goods, Salsas, Pickles & Low-Acid Foods",
   "tcs_status": true,
   "requires_commercial_license": true,
   "prohibited_items": [
    "Canned Salsas (tomato, mango, corn, or pepper salsas)",
    "Pickled Vegetables (pickled cucumbers, green beans, jalapeños, onions)",
    "Canned Vegetables and Tomato Sauces",
    "Fruit Butters (pumpkin butter, apple butter, pear butter)",
    "Low-Sugar, No-Sugar, or Sugar-Free Jams/Jellies",
    "Fermented Foods (sauerkraut, kimchi, kombucha)",
    "Chutneys and Relishes"
   ],
   "rejection_reason": "High risk of Clostridium botulinum growth in low-acid or improperly sealed home-canned containers. Indiana HBV law restricts home canning strictly to traditional full-sugar high-acid fruit jams/jellies."
  },
  {
   "category_id": "cured_meats_infused_oils",
   "category_name": "Cured Meats, Jerky & Infused Oils",
   "tcs_status": true,
   "requires_commercial_license": true,
   "prohibited_items": [
    "Beef Jerky, Poultry Jerky, or Exotic Meat Jerky",
    "Cured Meats, Sausages, and Charcuterie",
    "Garlic-in-Oil, Herb-in-Oil, or Flavored Oil Infusions",
    "Compound Butters with Fresh Garlic or Fresh Herbs"
   ],
   "rejection_reason": "Jerky requires USDA/ISDH inspection protocols. Infused oils present anaerobic botulism risks."
  },
  {
   "category_id": "beverages_liquid",
   "category_name": "Ready-to-Drink Beverages",
   "tcs_status": true,
   "requires_commercial_license": true,
   "prohibited_items": [
    "Freshly Squeezed Juices and Lemonades",
    "Cold Brew Coffee (liquid)",
    "Bottled Iced Teas (liquid)",
    "Smoothies and Milkshakes",
    "Kombucha and Fermented Drinks",
    "Dairy Beverages"
   ],
   "rejection_reason": "Liquid beverages present temperature control and pasteurization compliance requirements."
  },
  {
   "category_id": "freeze_dried_perishables",
   "category_name": "Freeze-Dried Meals & Perishable Ingredients",
   "tcs_status": true,
   "requires_commercial_license": true,
   "prohibited_items": [
    "Freeze-Dried Meals containing Meat or Poultry",
    "Freeze-Dried Dairy Products (ice cream, yogurt bites, cheese)",
    "Freeze-Dried Vegetables or Cooked Grains"
   ],
   "rejection_reason": "Freeze-drying perishable/TCS ingredients does not reclassify them as exempt under Indiana HBV regulations without lab validation."
  }
 ],
 "platform_enforcement_logic": {
  "onboarding_check": "If vendor selects any prohibited_category item, set account workflow to 'Commercial Kitchen Required' and block menu publication until health permit is uploaded.",
  "mandatory_disclaimer_text": "This product was prepared and packaged in a home kitchen that has not been inspected by the state department of health. NOT FOR RESALE.",
  "delivery_restriction": "IN_STATE_ONLY"
 }
};

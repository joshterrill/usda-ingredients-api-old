# usda-ingredients-api

an express API server for the USDA food composition database that returns a list of ingredients given a UPC code

## install & start

```
git clone https://github.com/joshterrill/usda-ingredients-api
cd usda-ingredients-api/
npm install
npm run dev // or npm start
```

## methods

#### GET /api/:upc

Returns a list of ingredients, description text, how many foods found, and a link to the page queries

**Example Request**

`GET http://localhost:3000/api/853393000030`

**Example Response**
```
{
"num": "1 food found",
"link": "/ndb/foods/show/58513?fgcd=&manu=&lfacet=&format=&count=&max=50&offset=&sort=default&order=asc&qlookup=853393000030&ds=&qt=&qp=&qa=&qn=&q=&ing=",
"text": "AARDVARK HABENERO HOT SAUCE, UPC: 853393000030",
"ingredients": "TOMATOES (TOMATOES AND FIRE ROASTED TOMATOES, TOMATO JUICE, CITRIC ACID, CALCIUM CHLORIDE), WHITE WINE VINEGAR, CARROTS, WATER, YELLOW ONION, HABANERO CHILI PEPPER (HABANERO CHILI PEPPERS, WATER, SALT, CITRIC ACID), MUSTARD (DISTILLED VINEGAR, WATER, MUSTARD SEED, SALT, TURMERIC, SPICES), ORGANIC CANE SUGAR, SALT, MODIFIED FOOD STARCH, GARLIC, SUNFLOWER OIL, HERBS AND SPICES",
"ingredientsArr": [
"TOMATOES (TOMATOES AND FIRE ROASTED TOMATOES",
"TOMATO JUICE",
"CITRIC ACID",
"CALCIUM CHLORIDE)",
"WHITE WINE VINEGAR",
"CARROTS",
"WATER",
"YELLOW ONION",
"HABANERO CHILI PEPPER (HABANERO CHILI PEPPERS",
"WATER",
"SALT",
"CITRIC ACID)",
"MUSTARD (DISTILLED VINEGAR",
"WATER",
"MUSTARD SEED",
"SALT",
"TURMERIC",
"SPICES)",
"ORGANIC CANE SUGAR",
"SALT",
"MODIFIED FOOD STARCH",
"GARLIC",
"SUNFLOWER OIL",
"HERBS AND SPICES"
],
"isVegan": true
}
```
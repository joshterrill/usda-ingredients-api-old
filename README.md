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

`GET http://localhost:3000/api/044261720871`

**Example Response**
```
{
"link": "https://ndb.nal.usda.gov/ndb/foods/show/125608?fgcd=&manu=&lfacet=&format=&count=&max=50&offset=&sort=default&order=asc&qlookup=044261720871&ds=&qt=&qp=&qa=&qn=&q=&ing=",
"text": "ABE'S, COCONUT CARROT CAKE, UPC: 044261720871",
"ingredients": "NON-GMO SUGAR, NON-GMO FLOUR, CARROTS, NON-GMO CANOLA OIL, APPLE SAUCE, COCONUT, PINEAPPLE, BAKING SODA (SODIUM BICARBONATE), VANILLA, SALT, CINNAMON",
"ingredientsArray": [
  "NON-GMO SUGAR",
  "NON-GMO FLOUR",
  "CARROTS",
  "NON-GMO CANOLA OIL",
  "APPLE SAUCE",
  "COCONUT",
  "PINEAPPLE",
  "BAKING SODA (SODIUM BICARBONATE)",
  "VANILLA",
  "SALT",
  "CINNAMON"
]
}
```
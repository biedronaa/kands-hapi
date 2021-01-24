# kands-hapi
Rest API for kands project using Hapi.js, Mongoose with MongoDB.

#### Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [HTTP methods](#http-methods)

#### General info
REST API created as api for https://github.com/biedronaa/kands.

#### Technologies
* node.js 12.16.1
* hapi 18.1.0
* mongoose 5.11.12

#### Setup
Go here https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i and check how to create MongoDB database. Take your connection url and paste in app.js instead of example one. 

Next, run server typing in the terminal:
```JavaScript
node app.js
```

To run the project properly add this data to your database by using Postman, the url is <strong>http://localhost:4000/service</strong>.
```json
[
	{
		"name": "Czyszczenie kostki brukowej",
		"price": 7
	},
	{
		"name": "Dwukrotna impregnacja kostki brukowej",
		"price": 11
	},
	{
		"name": "Czyszczenie elewacji",
		"price": 11
	},
	{
		"name": "Uzupełnianie piasku w szczelinach kostki brukowej",
		"price": 3
	},
	{
		"name": "Czyszczenie dachów",
		"price": 16
	},
	{
		"name": "Czyszczenie okien",
		"price": 17
	},
	{
		"name": "Czyszczenie samochodów",
		"price": 21
	},
	{
		"name": "Czyszczenie mebli ogrodowych",
		"price": 19
	}
]
```
Example: 
<div>
	<a href="https://ibb.co/gj9Dzwy"><img src="https://i.ibb.co/QbQ6rn9/ss3.png" alt="ss3" border="0"></a>
</div>

Use API by Postman or go to https://github.com/biedronaa/kands and check it out.

#### HTTP methods
* GET (all and by ID)
* POST
* PUT
* DELETE

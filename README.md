# kands-hapi
Rest API for kands project using Hapi.js, Mongoose with MongoDB.

#### Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [HTTP methods](#http-methods)

#### General info
Project was created as a site for an imaginary company providing cleaning services of various surfaces. It has a feature of calculating the approximate cost of the service by using REST API data from another project mentioned above.

#### Technologies
* React.js 17.0.1
* Bootstrap 5
* HTML5
* CSS3

#### Setup
Go here https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i and check how to create MongoDB database. Take your connection url and paste in app.js instead of example one. 

Next, run server typing in the terminal:
```JavaScript
node app.js
```

To run the project properly add this data to your database by using Postman.
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

Use API by Postman or go to https://github.com/biedronaa/kands and check it out.

#### HTTP methods
* GET
* POST
* PUT
* DELETE

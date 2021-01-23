const Hapi = require('hapi');
const Mongoose = require('mongoose');


const server = new Hapi.server({host:"localhost", port:4000, routes: { cors: {origin: ['*']}}});

//change for yours url 
const url = `mongodb+srv://<username>:<password>@clusterapi.r1kyj.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
Mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const ServiceController = require('./serviceController')
server.route({method:"GET", path:"/service", handler: ServiceController.services_all});
server.route({method:"GET", path:"/service/{id}", handler: ServiceController.service_byID});
server.route({method:"POST", path:"/service", handler: ServiceController.service_create});
server.route({method:"PUT", path:"/service/{id}", handler: ServiceController.service_update});
server.route({method:"DELETE", path:"/service/{id}", handler: ServiceController.service_delete});

server.start((err) => {  
    if (err) {
        throw err;
    }

    console.log(`Server running at ${server.info.uri}`);
});
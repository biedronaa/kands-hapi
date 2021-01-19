const Hapi = require('hapi');
const Joi = require('joi');
const Mongoose = require('mongoose');

const server = new Hapi.server({"host":"localhost", "port":3000});

//change for yours url 
const url = '`mongodb+srv://<username>:<password>@clusterapi.r1kyj.mongodb.net/<dbname>?retryWrites=true&w=majority`';

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

const ServiceModel = Mongoose.model("service", {
    name: String,
    price: Number
});

server.route({
    method:"POST",
    path:"/service",
    handler: async (req, h) => {
        try {
            var service = new ServiceModel(req.payload);
            service.validate({});
            var result = await service.save();
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    }
});
server.start((err) => {  
    if (err) {
        throw err;
    }

    console.log(`Server running at ${server.info.uri}`);
});
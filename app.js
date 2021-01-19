const Hapi = require('hapi');
const Mongoose = require('mongoose');

const server = new Hapi.server({"host":"localhost", "port":4000});

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

const ServiceModel = require('./serviceModel');

server.route({
    method:"GET",
    path:"/service",
    handler: async (req, h) => {
        try {
            var services = await ServiceModel.find().exec();
            return h.response(services);
        } catch (error) {
            return h.response(error).code(500);
        }
    }
});
server.route({
    method:"GET",
    path:"/service/{id}",
    handler: async (req, h) => {
        try {
            var service = await ServiceModel.findById(req.params.id).exec();
            return h.response(service);
        } catch (error) {
            return h.response(error).code(500);
        }
    }
});
server.route({
    method:"POST",
    path:"/service",
    handler: async (req, h) => {
        try {
            var service = new ServiceModel(req.payload);
            var result = await service.save();
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    }
});
server.route({
    method:"PUT",
    path:"/service/{id}",
    handler: async (req, h) => {
        try {
            var service = await ServiceModel.findByIdAndUpdate(req.params.id, req.payload, {new: true}).exec();
            return h.response(service);
        } catch (error) {
            return h.response(error).code(500);
        }
    }
});
server.route({
    method:"DELETE",
    path:"/service/{id}",
    handler: async (req, h) => {
        try {
            var service = await ServiceModel.findByIdAndDelete(req.params.id).exec();
            return h.response(service);
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
const ServiceModel = require('./serviceModel');

exports.services_all = async (req, h) => {
    try {
        var services = await ServiceModel.find().exec();
        return h.response(services);
    } catch (error) {
        return h.response(error).code(500);
    }
}

exports.service_byID = async (req, h) => {
    try {
        var service = await ServiceModel.findById(req.params.id).exec();
        return h.response(service);
    } catch (error) {
        return h.response(error).code(500);
    }
}

exports.service_create =  async (req, h) => {
    try {
        var service = new ServiceModel(req.payload);
        var result = await service.save();
        return h.response(result);
    } catch (error) {
        return h.response(error).code(500);
    }
}

exports.service_update = async (req, h) => {
    try {
        var service = await ServiceModel.findByIdAndUpdate(req.params.id, req.payload, {new: true}).exec();
        return h.response(service);
    } catch (error) {
        return h.response(error).code(500);
    }
}

exports.service_delete = async (req, h) => {
    try {
        var service = await ServiceModel.findByIdAndDelete(req.params.id).exec();
        return h.response(service);
    } catch (error) {
        return h.response(error).code(500);
    }
}
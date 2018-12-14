const mongoDB = require('./index');

const models = {
    user: {
        email: {type: String, require: true, unique: true},
        firstName: {type: String, require: true},
        lastName: {type: String, require: true},
        pwd: {type: String, require:true},
        type: {type: String, require:true},
        isActive: {type: Boolean},
	    createdAt: {type: String},
	    updatedAt: {type: String},
	    updatedBy: {type: String},
	    avatar: {type: String}

    },
    tag: {
        name: {type: String},
        isActive: {type: Boolean},
        createdAt: {type: String},
	    updatedAt: {type: String},
	    updatedBy: {type: String}
    },
    blog: {

    }
};

for(var i in models) {
    mongoDB.model(i, new mongoDB.Schema(models[i]));
};

module.exports = {
    getModel: function (name) {
        return mongoDB.model(name);
    }
};


const mongose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongose.Schema;

let roleValidator = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un rol válido'
};

let usuarioSchema = new Schema({
    name: {type: String, required: [true, 'El nombre es necesario']},
    email: {type: String, unique: true, required: [true, 'El correo es necesario']},
    password: {type: String, required: [true, 'La contraseña es necesaria']},
    img: {type: String, required: false},
    role: {type: String, required: [true, 'el rol es necesaria'], default: 'USER_ROLE', enum: roleValidator},
    state: {type: Boolean, default: false},
    google: {type: Boolean, default: false},
});

// Método toJSON en un schema siempre se llama cuando se necesite imprimir
usuarioSchema.methods.toJSON = function (){
    let user = this; // referencia al schema
    let userObject = user.toObject();
    delete userObject.password; // se elimina la contraseña
    return userObject;
}

usuarioSchema.plugin(uniqueValidator,{message:'{PATH} debe de ser unico'});
module.exports = mongose.model('user',usuarioSchema);
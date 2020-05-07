const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ProductSchema = new mongoose.Schema({
    numero_de_informacoes: {
    type: Number,
    required: true
  },
  valor_da_producao: {
    type: Number,
    required: true
  },
  valor_das_vendas: {
    type: Number,
    required: true
  },
  classes_de_atividades_industriais:{
    type: String,
    required: true
},
  createdAt: {
    type: Date,
    default: Date.now
  },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);
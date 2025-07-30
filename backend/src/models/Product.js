const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    amount: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    codes: { type: [String], default: [] }
  },
  { timestamps: true }
);

productSchema.pre('save', function (next) {
  this.stock = this.codes.length;
  next();
});

productSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate();
  if (update.codes) {
    update.stock = update.codes.length;
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
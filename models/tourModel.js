const mongoose = require("mongoose")

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama tour harus ada"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4,
  },
  price: {
    type: Number,
    required: [true, "Harganya harus ada"],
  },
})

const Tour = mongoose.model("Tour", tourSchema)

// const testTour = new Tour({
//   rating: 4.8,
//   price: 2000,
// })

// testTour.save()

module.exports = Tour

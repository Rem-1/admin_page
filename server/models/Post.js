import mongoose from 'mongoose'

const bikeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    wheel_size: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Unavailable"
    },
    description: {
        type: String,
    }
})

export default mongoose.model('BikeCollection', bikeSchema);
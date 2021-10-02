import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import bikeSchema from '../models/Post.js'

const router = express.Router();

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser:true },
    console.log('Conected to DB!')
)

//GET
router.get('/', async (req, res) => {
    try {
        const post = await bikeSchema.find();
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
})

//POST
router.post('/', async (req, res) => {
    const post = new bikeSchema({
        name: req.body.name,
        type: req.body.type,
        color: req.body.color,
        wheel_size: req.body.wheel_size,
        price: req.body.price,
        id: req.body.id,
        status: req.body.status,
        description: req.body.description
    });

    try {
        await post.save()
        .then(data => {
            res.status(201).json(data)
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
})


//DELETE
router.delete("/:id", async (req, res) => {
    try {
        const post = await bikeSchema.deleteOne({_id: req.params.id})
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
})

// UPDATE
router.patch("/:id", async (req, res) => {
    try {
        const post = await bikeSchema.updateOne({
            _id: req.params.id},
            { $set: {status: req.body.status}})
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
})


export default router
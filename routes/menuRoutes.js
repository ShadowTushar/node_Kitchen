const express = require('express')
const router = express.Router()
const menuItem = require('./../models/menuItem')

router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newMenu = new menuItem(data)
        const response = await newMenu.save()
        console.log('Data Saved Successfully')
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await menuItem.find()
        console.log('Data Fetched Successfully')
        res.status(200).json(data)
    }
    catch (err) {
        console.log('Error Fetching Data')
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType
        if (tasteType == 'Spicy' || tasteType == 'Sweet' || tasteType == 'Sour') {
            const response = await menuItem.find({ taste: tasteType })
            console.log('Response Fetched')
            res.status(500).json(response)
        }
        else {
            res.status(404).json({ error: 'Invalid Work Type' })
        }
    }
    catch (err) {
        console.log('Error Fetching Data')
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const menuID = req.params.id
        const response = await menuItem.findByIdAndDelete(menuID)

        if (!response) {
            res.status(404).json({ error: 'Menu Item Not Found' })
        }

        console.log('Data Deleted')
        res.status(200).json('Menu Item Deleted Successfully')
    }
    catch {
        console.log('Error Deleting Data')
        res.status(500).json({ Error: 'Internal Server Error' })
    }
})

module.exports = router
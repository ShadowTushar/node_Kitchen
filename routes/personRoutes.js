const express = require('express')
const router = express.Router()

const Person = require('./../models/person')

router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data)
        const response = await newPerson.save()
        console.log('Data saved Successfully')
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ Error: 'Internal Server Error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find()
        console.log('Data Saved Successfully')
        res.status(200).json(data)
    }
    catch (err) {
        console.log('Error Fetching Data')
        res.status(500).json({ Error: 'Internal Server Error' })
    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType
        if (workType == 'Chef' || workType == 'Manager' || workType == 'Waiter') {
            const response = await Person.find({ work: workType })
            console.log('Response Fetched')
            res.status(200).json(response)
        }
        else
            res.status(404).json({ error: 'Invalid Work Type' })
    }
    catch (err) {
        console.log('Error Fetching Data')
        res.status(500).json({ Error: 'Internal Server Error' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id
        const updatedPersonData = req.body

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            res.status(404).json({ error: 'Person Not Found' })
        }

        console.log('Data Updated')
        res.status(200).json(response)
    }
    catch {
        console.log('Error Updating Data')
        res.status(500).json({ Error: 'Internal Server Error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id
        const response = await Person.findByIdAndDelete(personId)

        if (!response) {
            res.status(404).json({ error: 'Person Not Found' })
        }

        console.log('Data Deleted')
        res.status(200).json('Person Deleted Successfully')
    }
    catch {
        console.log('Error Deleting Data')
        res.status(500).json({ Error: 'Internal Server Error' })
    }
})

module.exports = router
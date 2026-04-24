const express = require('express')

const router = express.Router()

const randomWYRQuestion = require('../model/wyr_questions')

// this is just a placeholder.
router.get('/', (req, res, next) => {
    res.send('Request a website.')
})

// by using the /wyr after typing in the localhost webpage, you'll get the API present itself on your screen.
router.get('/wyr', function (req, res, next) {
   // const wyr = {
     //   'question': 'Travel to Chicago by using the Amtrak or Using a personal vehicle.',
       // 'Answer1': 'Using the Amtrak',
       // 'Answer2': 'Using personal vehicle', // creating two answers from the WYR section.
   // }

    const wyr = randomWYRQuestion()
    res.json(wyr) // this will come back as a .json.
})

module.exports = router // once again, this will need to be the last line of your code.
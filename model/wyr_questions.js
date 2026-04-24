const questions = [ { // these are random generated questions that I have come up with. 
    'question': 'Would you rather have a perfect memory or be able to forget anything you wanted at will',
    'answer1' : ' have a perfect memory',
    'answer2' : 'be able to forget anything you wanted at will',
},

{
    'question': 'Would you rather always be 10 minutes late or always be 20 minutes early?',
    'answer1' : 'always be 10 minutes late',
    'answer2' : 'always be 20 minutes early',
},

{
    'question': 'Would you rather spend the rest of your life with a sailboat as your home or an RV as your home?',
    'answer1' : 'Sailboat as your home',
    'answer2' : 'RV as your home ',
},

{
    'question': 'Would you rather have unlimited international first-class tickets or never have to pay for food at restaurants?',
    'answer1' : 'Unlimited international first class tickets',
    'answer2' : 'never have to pay for food at restaurants',
}
]

function randomWYRQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length)
    const randomQuestion = questions[randomIndex]
    return randomQuestion // this is using a randomized method to select a question.
}

module.exports = randomWYRQuestion // this will return a random question on the API.

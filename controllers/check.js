const hash = require('string-hash');
const data = {
    sequences: require('../models/sequences.json'),
    setEmployees: function (newData) { this.sequences = newData }
}

const check = (async (something) => {

    let somethingelse = hash(something);

    let newData = data.sequences[0];
    let answer = newData[somethingelse];

    return answer;

  });

  module.exports = check;
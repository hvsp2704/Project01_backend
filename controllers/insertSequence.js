const hash = require('string-hash');
const fs = require('fs');
const path = require('path');
const data = {
    sequences: require('../models/sequences.json'),
    setSequences: function (newData) { this.sequences = newData }
}


const insertNewSequence = (something,name) => {

    let somethingelse = hash(something);

    let newData = data.sequences[0];
    newData[somethingelse] = name;
    data.setSequences([newData]);

    fs.writeFile(path.join(__dirname, '..', 'models', 'sequences.json'), JSON.stringify([newData]), (err)=>{
        if(err){
            console.log(err);
        }
    });

    return data.sequences[0];

}

  module.exports = insertNewSequence;
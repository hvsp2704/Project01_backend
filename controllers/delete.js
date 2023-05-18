const data = {
    sequences: require('../models/sequences.json'),
    setEmployees: function (newData) { this.sequences = newData }
}
const path = require('path');
const fs = require('fs');

const deleteAll = () => {

    const newData = {};
    data.setEmployees([newData]);
    fs.writeFile(path.join(__dirname, '..', 'models', 'sequences.json'), "[{}]", (err)=>{
        if(err){
            console.log(err);
        }
    });
}

  module.exports = deleteAll;
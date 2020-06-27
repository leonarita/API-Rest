const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', { 
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(response => console.log('Conected to Database..'))
.catch(error => console.log('error ->', error.message));

mongoose.Promise = global.Promise

module.exports = mongoose
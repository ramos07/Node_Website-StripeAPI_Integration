//Test what environment we are in then produce the appropriate keys for Stripe
if(process.env.NOD_ENV === 'production'){
    module.exports = require('./keys_prod');
}
else{
    module.exports = require('./keys_dev');
}
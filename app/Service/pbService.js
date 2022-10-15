
const model = require('../Model/pbModel');
const {lineItemModel} = model;
let documentConnection = {};

documentConnection.pbLineItem = async () => {
    try{
       let lineItems = await lineItemModel();
       let lineItemDocs = await lineItems.find();
       console.log('lineItems', lineItemDocs)
       return lineItemDocs;
    }  
    catch(e){
       console.log('lineItems error'), lineItems

       return 400;
    }
}

module.exports = documentConnection;
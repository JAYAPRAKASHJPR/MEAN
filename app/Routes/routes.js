const express = require('express');
const router = express.Router();
const summaryService = require('../Service/pbService')

router.get("/test", (req,res) => {
     console.log("test working")
     res.send("Routing working")
})

router.get('/lineDetails', (req,res) => {
console.log("line details")
  summaryService.pbLineItem().then(data => {
     console.log("data",data)
     const dataObj = [{message:"Success", result : data}]
     res.status(200).send(dataObj)
  })
})

module.exports = router;
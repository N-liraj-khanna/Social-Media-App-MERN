const router = require('express').Router();
const data = require('../data');

router.get("/test", (req,res)=>{
  return  res.json(data.module);
})

module.exports = router;

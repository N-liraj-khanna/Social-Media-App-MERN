const data = require('../data');

exports.dataController = (req,res)=>{
  return  res.json(data.module);
}
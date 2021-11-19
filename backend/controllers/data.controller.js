const data = require('../data');

exports.dataController = (req,res)=>{
  return  res.json(data.module);
}

exports.singleDataController = (req,res)=>{
  const a = data.module.data.find((d)=>d._id=req.params.id);
  return res.json({data: a});
}
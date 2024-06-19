const DocumentType = require('../models/DocumentType-model');

module.exports = {

  getDocuments : async(req,res)=>{
    try{
      const result = await DocumentType.find()

      return res.status(200).json({data:result})
    }catch(err){
      return res.status(500).json({err:err})
    }
  },

  createDocumentType : async(req,res)=>{
    try{
      const documentType = new DocumentType(req.body)
      const result = await documentType.save()

      return res.status(201).json({data:result})
    }catch(err){
      return res.status(500).json({err:err})
    } 
  }
  
};

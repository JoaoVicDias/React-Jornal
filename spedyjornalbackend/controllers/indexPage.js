const classificados = require('../model/classificados')
const moment = require('moment')



exports.getIndexpage = (req,res)=>{


  const todayDate =  new Date()
  classificados.findAll().then(result=>{
    res.status(200).json({
      classificados: result.reverse()
    });
  }).catch(err=>{
    console.log(err)
  })

}

exports.postIndexPageCreate = (req,res)=>{

  const title = req.body.title
  const description = req.body.description
  
  const newdate = moment(new Date()).format('ll')


  classificados.create({
    title:title,
    description:description,
    date:newdate
  }).then(result=>{
    res.status(201).json({
      message:"Post created successfully",
      classificados: result
    })
  }).catch(err=>{
    res.status(400).json({
      message:"Something went wrong",
      error: err
    })
  })
}

exports.DeleteIndexPageClassificados = (req,res)=>{
  const itemId = req.params.id
  classificados.findOne({where : {id : itemId}} ).then(res=>{
    return res.destroy()
  }).then(()=>{
    res.status(201).json({
      message:"Post Deleted successfully"
    })
  })
}

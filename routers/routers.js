//const express = require('express');
var {Router}=require('express');
var router=Router();

router.get('/',()=>{
    console.log("Server Ready too");
});

module.exports=router;
import mongoose from 'mongoose'

function initDB(){
//difKtG7IEfwpUsIa

    if(mongoose.connections[0].readyState){
        console.log("Already connected to mongo")
        return 
    }

    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true

    })

    mongoose.connection.on('connected',()=>{
        console.log("connected to mongo")
        
    })
    mongoose.connection.on('error',(err)=>{
        console.log("not connected to mongo",err)
        
    })
    
}

export default initDB
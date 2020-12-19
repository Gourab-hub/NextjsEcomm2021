import mongoose from 'mongoose'


const productsSchema = new mongoose.Schema({
    name:{
        type  : String ,
        requireed: true

    },
    price:{

        type : Number,
        requireed: true
    },
    description:{

        type : String,
        requireed: true
    },
    mediaUrl:{

        type : String,
        requireed: true
    },

})

export default mongoose.models.product || mongoose.model('product',productsSchema)
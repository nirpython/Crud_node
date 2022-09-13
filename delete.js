const dbConnect = require('./configDB');



const del =async ()=>{
    const db= await dbConnect();
    const result = await  db.deleteOne({name:"kalank4"})
    if (result.acknowledged){
        console.log("data is detedted now" )
    }

}

del();
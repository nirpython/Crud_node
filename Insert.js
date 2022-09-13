const dbConnect = require('./configDB')


const main = async ()=>{
   let db = await dbConnect();
   data =await db.find().toArray();
   console.warn(data);
}

main()

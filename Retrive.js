const dbConnect = require('./configDB')

const insart =async () =>{
    const db = await dbConnect();
    const result = await db.insert({name:"kalank5",imdb:3.5});
    if (result.acknowledged);
    {
        console.warn("data inserted")
    }
    
}

insart();
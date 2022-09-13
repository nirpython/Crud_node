const dbConnect = require('./configDB')


const update = async ()=> {
    const db = await dbConnect();
    const result = await db.update({name:"ddlj"}, {$set:{ imdb : 9.5}})
    if (result.acknowledged);
    {
        console.warn("data updated");
    
}
}

update();
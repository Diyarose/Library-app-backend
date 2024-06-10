const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "category":String,
        "pubyear":String,
        "author":String,
        "bookdesc":String,
        "disname":String,
        "pubname":String,
        "price":String,
        "edition":String
    }
)
let librarymodel=mongoose.model("libraries",schema);
module.exports={librarymodel}
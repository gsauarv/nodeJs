const fs = require('fs');
fs.readFile('./docs/text.txt' , (err,data) => 
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data.toString())
    }
});
// Write file
const message = "Hello World";
fs.writeFile('./docs/text1.txt' , message ,()=>
{
    console.log("File Written");
});


// Dir

if(!fs.existsSync('./assets'))
{
    fs.mkdir('./assets' ,(err)=>
    {
    if(err)
        {
        console.log(err);

        }
    console.log("Created");
    })
}
else
{
    fs.rmdir('./assets', (err) => 
    {
        if(err)
        {
            console.log(err);
        }
        console.log("Removed")
       
    });
    
}

if(fs.existsSync('./docs/text1.txt'))
{
    fs.unlink('./docs/text1.txt', (err) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("FIle Deleted")
    })
}







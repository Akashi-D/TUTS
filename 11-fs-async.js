const { readFile, writeFile} = require('fs')

console.log('start');
readFile('./content/first.text', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.text', 'utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the new result : ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }console.log('done with this task');
        })
    })
})
console.log('starting next task');
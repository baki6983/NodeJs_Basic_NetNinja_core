const delfs=require('fs')
console.log(delfs.readFileSync('./File_Module/ReadMe.txt','utf8'));


delfs.unlink('./File_Module/ReadMe.txt',(err)=>{
    if (err) {
        console.log('No file found to delete')
        if (delfs.existsSync('./AddedFile.txt'),(err)=>{
            throw err
        }){
         delfs.rename('./AddedFile.txt','./AddedRenamedFile.txt',function(err){
            if (err) throw err;
            console.log('File Renamed!');
         })
        }
        else{
            delfs.appendFile('AddedFile.txt','Hello added new file')
        }
       
    }
        else{ console.log('Successfully deleted file');}
       
})
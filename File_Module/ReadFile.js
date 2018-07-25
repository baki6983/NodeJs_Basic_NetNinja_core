var fsRead=require('fs')
console.log(fsRead.readFileSync('./File_Module/ReadMe.txt','utf-8'));

const fd=fsRead.openSync('./File_Module/ReadMe.txt','r+')
fsRead.ftruncate(fd,4,(err)=>{
    assert.ifError(err);
    console.log(fsRead.readFileSync('./File_Module/ReadMe.txt'),'utf-8')
});
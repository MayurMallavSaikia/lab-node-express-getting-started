let http=require('http')                                        // Node Server
http.createServer(function(req,res){
    res.write('<h1>Hello Node Server !!</h1>')
    res.end()
     
}).listen(8000,()=>{console.log('Node Server running at the port 8000')})



let express=require('express')
let app=express()

app.get('/', function(req,res){

    res.send('<h1>Hello Express Server !!</h1>')
})
app.listen(8050,()=>{console.log('Express Server running at port 8050')})
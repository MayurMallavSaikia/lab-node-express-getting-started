let http=require('http')                                        // Node Server
http.createServer(function(req,res){
    res.write('<h1>Hello Node Server !!</h1><br><a href="progradexpress.herokuapp.com/express">Click to see Express Server results</a>')
    res.end()
     
}).listen(process.env.PORT || 8000,()=>{console.log('Node Server running at the port 8000')})



// let express=require('express')                              // express server
// let app=express()

// app.get('/express', function(req,res){

//     res.send('<h1>Hello Express Server !!</h1>')
// })
// app.listen(process.env.PORT || 8050,()=>{console.log('Express Server running at port 8050')})

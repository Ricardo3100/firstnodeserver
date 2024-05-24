const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/about')
        res.end('The about page')
        else if (req.url ==='/contact')
        res.end('The Contact Page')
        else if (req.url === '/')
        res.end('The home page')
        else { res.writeHead(404)
        res.end('page not found')
        }
        
console.log(req.url)
}
)
// to run the server run the command "node" and then the name of the file in all lowercase)
server.listen(8080)

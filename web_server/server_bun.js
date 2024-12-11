// This is code to make a simple server using Bun
import {serve} from 'bun'
serve({
    fetch(request){
        const url = new URL(request.url)
        if(url.pathname === '/'){
            return new Response('Start Bun Server',{status : 200})
        }else if(url.pathname === '/login'){
            return new Response('Send Bun Login Response',{status : 200})
        }else{
            return new Response('404 Not Found on Bun server',{status : 404})
        }
    },
    port:3000,
    hostname:'127.0.0.1'
})
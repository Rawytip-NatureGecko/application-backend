import WebSocket from "App/services/WebSocket";

WebSocket.boot();

WebSocket.io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' })
    socket.emit('position',{x:200,y:400})

    socket.on('sendMSG',data=>{
        WebSocket.io.emit('getMSG',data);
    })

    socket.on('news',()=>{
        return {hello:'another'}
    })
    socket.on('my other event', (data) => {
        console.log(data)
    })
})
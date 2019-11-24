module.exports = function(io){

    io.on("connection", socket => {
    socket.on("message",message => {
        console.log("message", message)
        io.emit("message",message)
    })


        socket.on ("disconnect",() =>{
        console.log("disconnected")
    })
})
}
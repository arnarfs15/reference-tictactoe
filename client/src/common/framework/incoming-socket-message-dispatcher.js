module.exports=function(injected){
    const socketIoVerb = injected('socketIoVerb');
    const messageRouter = injected('messageRouter');

    return {
        startDispatching: function(_socket, _session){
            var socket = _socket;
            var session = _session;

            console.debug("Start dispatching ", socketIoVerb, messageRouter);

            var listener;
            listener = (message)=>{
                console.debug("Routing message from socket IO", message);
                message._session = session;
                messageRouter.routeMessage(message);
            };

            socket.on(socketIoVerb, listener);
            return {
                stopDispatching:function(){
                    socket.removeListener(socketIoVerb, listener);
                }
            }
        }
    };
};
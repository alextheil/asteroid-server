const colyseus = require('colyseus');



exports.MyRoom = class extends colyseus.Room {
	
	
	

  onCreate (options) {
	  
  }

  onJoin (client, options) {
	  
  }

  onMessage (client, message) {
	  
	  //same will be done for acceleration and turning right
	  if (message.move === "left") {
		  //recieve request that ship wants to move left
		  console.log(client.sessionId + "is turning left");
		  //send acknowledgement back to client, let them update themselves moving left
		  this.send(client, "You moved left." );
		  //tell all other ships to make this ship move left
		  this.broadcast("yo everyone, update this ship on your screens to turn left. sending out the client's ID", client.sessionId, { except: client });
	  }
	  
	  if (message.hit) {
		  //update ship's HP locally on server
		  console.log (client.sessionId + "hit ship with Id #" + message.hit);
		  //send broadcast to tell all clients to reduce that ship's HP on their screens
		  this.broadcast(client.sessionId + " hit ship # " + message.hit);
	  }
	  
  }
  
  

  onLeave (client, consented) {
  }

  onDispose() {
  }

}

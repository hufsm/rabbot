module.exports = {
	connection: {
		name: "foppen",
		user: "guest",
		pass: "guest",
		host: "127.0.0.1",
		port: 5672,
		vhost: "%2f",
    //replyQueue: "customReplyQueue"
    replyQueue: {
      name: "customReplyQueue",
      //autoDelete: true,
      //durable: false,
      //exclusive: true,
      //subscribe: true,
    }
	},

  noReplyQueue: {
    name: "noReplyQueue",
    user: "guest",
    pass: "guest",
    server: "127.0.0.1",
    port: 5672,
    vhost: "%2f"
  }
};

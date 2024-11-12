const mongoose = require('mongoose');

//connecting mongoose with database
const connectToMongo = async () => {
	const connectdb = await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => { console.log("Connected to MongoDB Successfully") })
		.catch((error) => { console.log('Database not connected successfully') })
}

module.exports = connectToMongo;

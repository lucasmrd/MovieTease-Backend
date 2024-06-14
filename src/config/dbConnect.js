import mongoose from "mongoose";

async function conectaNoDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.rbdqjbz.mongodb.net/movieteasedb?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
};

export default conectaNoDatabase;
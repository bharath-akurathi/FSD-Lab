const mongoose = require("mongoose");

// Connect to MongoDB (creates DB if not exists)
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// Model (creates collection)
const Student = mongoose.model("Student", studentSchema);

// Main Function
async function run() {

    // CREATE (Insert Data)
    await Student.insertMany([
        { name: "Bharath", age: 20, course: "Btech-CSE" },
        { name: "Sneha", age: 19, course: "MBBS" },
        { name: "abc", age: 19, course: "CA" }
    ]);
    console.log("Data Inserted");

    // READ (Fetch Data)
    const students = await Student.find();
    console.log("All Students:", students);

    // UPDATE
    await Student.updateOne(
        { name: "Bharath" },
        { $set: { course: "B.Tech - Computer Science" } }
    );
    console.log("Data Updated");

    // DELETE
    await Student.deleteOne({ name: "abc" });
    console.log("Data Deleted");

    // Display Final Data
    const finalData = await Student.find();
    console.log("Final Data:", finalData);

    mongoose.connection.close();
}

run();
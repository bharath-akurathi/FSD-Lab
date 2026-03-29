const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/students")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    marks: Number
});

// Model
const Student = mongoose.model("Student", studentSchema);

// Main Function
async function run() {

    // Insert Data
    await Student.deleteMany();

    await Student.insertMany([
        { name: "Bharath", age: 20, course: "CSE", marks: 85 },
        { name: "Rahul", age: 21, course: "IT", marks: 78 },
        { name: "Sneha", age: 20, course: "CSE", marks: 92 },
        { name: "Anita", age: 22, course: "ECE", marks: 88 },
        { name: "Kiran", age: 19, course: "CSE", marks: 75 }
    ]);

    // COUNT
    const count = await Student.countDocuments();
    console.log("Total Students:", count);

    // LIMIT
    const limited = await Student.find().limit(3);
    console.log("Limit (3):", limited);

    // SORT ; marks: -1 means descending order
    const sorted = await Student.find().sort({ marks: -1 });
    console.log("Sorted by Marks (Descending):", sorted);

    // SKIP
    const skipped = await Student.find().skip(2);
    console.log("After Skipping 2:", skipped);

    //Write a Mongoose query to retrieve student records sorted by marks in 
    // descending order, skip the first record, and display the next two records.
    const customQ = await Student.find().sort({marks:-1}).skip(1).limit(2);
    console.log("Custom query:",customQ);

    mongoose.connection.close();
}

run();
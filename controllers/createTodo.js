// importing Todo from models
const Todo = require('../models/Todo');

// defining route handler
exports.createTodo = async (req, res) => {
    try {
        // extracting title and description from request body
        const { title, description } = req.body;
        // creating a new Todo object and inserting it into the DB
        const response = await Todo.create({ title, description });
        // sending a response with a success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created successfully" 
        });
    } catch (error) {
        console.error(error); 
        res.status(500).json({
            success: false,
            data: "Internal server issue",
            message: error.message 
        });
    }
};

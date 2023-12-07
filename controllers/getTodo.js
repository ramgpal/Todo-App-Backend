// importing Todo from models
const Todo = require('../models/Todo');
 
// defining route handler
exports.getTodo = async (req, res) => {
    try {
        // fetch all todo items from DB
        const todos = await Todo.find({});

        // updating response
        res.status(200).json({
            success:true,
            data:todos,
            messege:"Entire data is fetched",
        }) 
    } catch (error) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            messege:err.messege,
        })
    }
};


exports.getTodosById = async (req, res) => {
    try {
        // extracting todo item basis on id
        const id = req.params.id; // Changed from req.param.id to req.params.id
        const todo = await Todo.findById({ _id: id });

        // data for given id is not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found with the given id",
            });
        }
        // data for given id is found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Server error",
            message: error.message, 
        });
    }
};

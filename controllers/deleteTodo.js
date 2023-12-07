// importing Todo from models
const Todo = require('../models/Todo');

// defining route handler
exports.deleteTodo = async (req, res) => {
    try {
       const {id} = req.params;

       // deleting 
       await Todo.findByIdAndDelete(id);

       res.json(200).json({
        success:true,
        messege:"Todo deleted",
       })

    } catch (error) {
        console.error(error); 
        res.status(500).json({
            success: false,
            data: "Internal server issue",
            message: error.message 
        });
    }
};

// importing Todo from models
const Todo = require("../models/Todo");

// defining route handler
exports.updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const{title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt: Date.now()},
        )

        res.status(200).json({
            success:true,
            data:Todo,
            message:"Updated successfully"
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

const router = require('express').Router()
const Todo = require('./todoModel')

router.post('/', (req,res)=>{
    try {
        const newTodo = new Todo({
            title: req.body.title
        })
        
        const isSaved = newTodo.save()
        res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
})


router.delete('/:id', async(req,res)=>{
    const todoId = req.params.id
    await Todo.findByIdAndRemove(todoId)
    res.redirect('/')
})

router.get('/', async (req,res)=>{
    const todo = await Todo.find()
    
    res.render('index', {todo: todo})
    

})
module.exports = router;
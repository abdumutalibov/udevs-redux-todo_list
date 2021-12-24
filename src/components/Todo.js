import { Box, Button, Checkbox, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteItem } from '../redux/actions'
import './todo.css'
import todos from '../redux/reducer/todos'
export const  Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const [cheked, setCheked] = useState(false);
    const handleCheked = () => dispatch(toggleTodo(todo.id))
   useEffect(() => {
    setCheked(todo.completed);
}, [todo]);
    
    return (
        <Box className='box' mb={1} bgColor='lightblue' p={2} >
            <div className='check'>
                <Checkbox className='ch' onChange={handleCheked} colorScheme='teal' isChecked={cheked}>
                <Text as={todo.completed && 'del'}>{todo.content} </Text>
            </Checkbox>
              <div onClick={() => dispatch(deleteItem(todo.id))} className='X'>X</div>
            </div>
            
        </Box>
    )
}
export default Todo;
import TodoItemEmpty from './TodoItemEmpty.jsx';
import TodoItem from './TodoItem.jsx';

export default function TodoList( { todos } ) {
    return (
        <ul className='todo__list'>
            { todos.length === 0 && <TodoItemEmpty />}
            <TodoItem />
        </ul>
    )
}
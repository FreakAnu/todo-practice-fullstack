/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import TodoChild from "../components/TodoChild"
// eslint-disable-next-line no-unused-vars
// const todos = [
//     {
//         title:"Go to gym",
//         description:" 7 to 9pm"
//     },
//     {
//         title:"Go to date",
//         description:" 10 to 12pm"
//     }]


function Todos({todos}) {
    return (
        <div>
            { todos.map((todo) => ( <TodoChild todoobj ={todo}/>))}
        </div>
    )
}

export default Todos

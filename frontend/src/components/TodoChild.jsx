/* eslint-disable react/prop-types */
function TodoChild({todoobj}) {
    return (
        <div>
            <h1>{todoobj.title}</h1>
            <h2>{todoobj.description}</h2>
            <button>completed</button>
        </div>
    )
}

export default TodoChild

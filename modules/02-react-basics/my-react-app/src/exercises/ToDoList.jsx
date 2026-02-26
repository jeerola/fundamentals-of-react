import { useState } from "react";
import styles from "../styles/TodoItem.module.css";

function AddTask( {setItem} ) {
    const [input, setInput] = useState("");

    return (
        <div className={styles.addTask}>
            <button onClick={ () => setItem(prev => [...prev, input])}>Add task</button>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
        </div>
    )

}

function TodoItem( { index, task, setItem }) {

    return (
        <div className={styles.item}>
            <button onClick={ () => setItem(prev => prev.filter((_, i) => i !== index))}>Remove</button>
            TO DO: {task}
        </div>
    )
}

function TodoList( { item, setItem }) {

    return (
      <div>
        {item.map((task, index) => (
          <TodoItem key={index} task={task} setItem={setItem} index={index} />
        ))}
      </div>
    );
}

function TodoApp() {
    const [item, setItem] = useState([]);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", minHeight: "50px" }}>
            <TodoList item={item} setItem={setItem}/>
            <AddTask setItem={setItem}/>
        </div>
    )
}

export default TodoApp;
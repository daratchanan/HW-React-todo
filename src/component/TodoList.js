import React, { Component } from 'react'

export default class TodoList extends Component {
   state = {
      inputValue: "",
      todoList: [
         {
            id: 1,
            task: "Do Homework"
         },
         {
            id: 2,
            task: "Swimming"
         },
         {
            id: 3,
            task: "Shopping"
         }
      ]
   };

   createNewTask = () => {
      const newTask = this.state.inputValue;
      const newTodoList = [...this.state.todoList];
      newTodoList.push({ task: newTask, id: Math.round(Math.random() * 1000) });
      this.setState({ todoList: newTodoList });
      this.setState({ inputValue: "" });
   };

   deleteTask = (id) => {
      const newTodoList = this.state.todoList.filter(e => e.id !== id);
      this.setState({ todoList: newTodoList });
   }

   editTask = (id) => {
      const todoList = this.state.todoList;
      const targetTodo = todoList.find(e => e.id === id);

      const newTask = prompt(`id ${id} : ${targetTodo.task}`);
      if (newTask) {
         const newTodoLists = todoList.map(todo => todo.id === id ? { ...todo, task: newTask } : todo);
         this.setState({ todoList: newTodoLists });
      }
   }
   render() {
      const { todoList, inputValue } = this.state;
      const btnStyle1 = {
         backgroundColor: "lightblue",
         fontSize: "15px",
         border: "none"
      }

      const btnStyle2 = {
         backgroundColor: "pink",
         fontSize: "15px",
         border: "none"
      }

      const liStyle = {
         display: "flex",
         justifyContent: "space-between",
         width: "400px",
         backgroundColor: "lightgray",
      }

      return (
         <div>
            <div>
               <input
                  value={inputValue}
                  onChange={e => this.setState({ inputValue: e.target.value })}
               />
               <button onClick={this.createNewTask}>Add todo</button>
            </div>
            <ul style={{ width: "400px", margin: "0 auto", listStyle: "none" }}>
               {todoList.map(({ id, task }) => (
                  <li style={liStyle} key={id}>
                     {id}:{task}
                     <div>
                        <button style={btnStyle1} onClick={() => this.editTask(id)}>Edit</button>
                        <button style={btnStyle2} onClick={() => this.deleteTask(id)}>Delete</button>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      )
   }
}

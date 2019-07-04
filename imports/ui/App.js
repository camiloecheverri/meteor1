import React, { Component } from 'react';
import Task from './Task';
class App extends Component {
    getTask(){
      return [
        {
          id:1, text:'Levantarse'
        },
        {
          id:2, text:'Bañarse'
        },
        {
          id:3, text:'Desayunar'
        }
      ];
    }
    renderTask(){
      return this.getTask().map(task => <Task key={task._id} task={task}/>);
    }
    render (){
      return (
        <div className='container'>
          <header>
            <h1> Todo list </h1>
          </header>
          <ul>{this.renderTask()}</ul>
        </div>
      )
    }
}

export default App;

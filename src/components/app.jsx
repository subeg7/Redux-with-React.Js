import React,{Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className = "App">
        <div className = "titile">
          Reminder pro
        </div>

        <div className="from-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="i have to..."
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
          >Add Reminder
          </button>
        </div>
      </div>
    )
  }
}


export default App;

import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
import { bindActionCreators } from 'redux';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      text:''
    }
  }

  addReminder(){
    // console.log("addReminder function of App");
    this.props.addReminder(this.state.text);
    // console.log("addReminder function of App ended");

  }


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
              onChange={event =>this.setState({text:event.target.value})}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={()=>this.addReminder()}
          >Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

// function mapDisptachToProps(dispatch){
//   return bindActionCreators({addReminder},dispatch);
// }
// export default App;

export default connect(null,{addReminder}) (App);

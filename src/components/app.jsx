import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
// import { bindActionCreators } from 'redux';


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

  renderReminders(){
    let reminders = this.props.reminder;
    console.log("props@renderReminders",reminders);
     // reminders=this.props.reminder;
    return(
      <ul className = "list-group col-sm-4">
        {
          reminders.map(reminder =>{
            console.log("reminder found");
            return(
              <li key={reminder.id} className ="list-group-item">
                <div>{reminder.text}</div>
              </li>
            )
          })
        }
      </ul>
    )
  }


  render(){

    // this.renderReminders();
    // console.log("props@main_render",this.props)

    return(
      <div className = "App">
        <div className = "titile">
          Todays Transactions
        </div>

        <div className="from-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="File Name"
              onChange={event =>this.setState({text:event.target.value})}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={()=>this.addReminder()}
          >Download Excel File
          </button>

          { this.renderReminders() }
          
        </div>
      </div>
    )
  }
}

function  mapStateToProps(state){
  // console.log("mapping state to props");
  console.log("state obtained",state);
  return{
    reminder:state
  }
}

// function mapDisptachToProps(dispatch){
//   return bindActionCreators({addReminder},dispatch);
// }
// export default App;

export default connect(mapStateToProps,{addReminder}) (App);

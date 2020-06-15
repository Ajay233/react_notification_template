import React from 'react'
import { connect } from 'react-redux'
import { setNotification } from './notification/actions'
import Notification from './notification/notification'

class Home extends React.Component {

  test = () => {
    this.props.setNotification("Test success message", "success", true)
  }

  test2 = () => {
    this.props.setNotification("Test error message", "error", true)
  }

  test3 = () => {
    this.props.setNotification("Test warning message", "warning", true)
  }

  render(){
    return(
      <div>
        <Notification />
        Home page
        <div>
          <button onClick={this.test}>show success message</button>
          <button onClick={this.test2}>show error message</button>
          <button onClick={this.test3}>show warning message</button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState
  }
}

export default connect(mapStateToProps, { setNotification })(Home)

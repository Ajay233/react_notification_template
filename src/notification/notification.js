import React from 'react'
import { connect } from 'react-redux'

import '../stylesheets/notification.css'

class Notification extends React.Component{

  buildNotification = () => {
    const { message, type } = this.props.notificationState;
    return(
      <div className={`notification ${type}`}>
        {message}
      </div>
    );
  }

  renderNotification = () => {
    const { show } = this.props.notificationState;
    return show ? this.buildNotification() : null;
  }

  render(){
    return(
      <div>
        {this.renderNotification()}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState
  }
}

export default connect(mapStateToProps)(Notification)

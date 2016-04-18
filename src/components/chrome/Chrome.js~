import React, {Component, PropTypes} from 'react'
import Link from '../link/Link'
import MessageList from '../message-list/MessageList'

export default class Chrome extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    messages: PropTypes.array.isRequired,
    removeMessage: PropTypes.func.isRequired
  }

  render () {
    const {messages, removeMessage} = this.props
    return (
      <div>
        <h1><Link route='home'>J-Diversity</Link></h1>
        <h4>Welcome To Diversity Expense Registration App</h4>
        <p>
        Sincere Thanks to .....Irshad,Insaf,Irfan,Najmu,Anshad
        </p>
        {this.props.children}
        <MessageList messages={messages} removeMessage={removeMessage}/>
      </div>
    )
  }
}

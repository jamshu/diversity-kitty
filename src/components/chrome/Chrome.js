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
        <h4>This Project Mainly done due to Complicated Expense entry of Diversity Group </h4>
        {this.props.children}
        <MessageList messages={messages} removeMessage={removeMessage}/>
      </div>
    )
  }
}

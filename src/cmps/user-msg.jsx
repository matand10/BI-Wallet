import React from 'react'

import { eventBusService } from '../services/event-bus.service.js'
import { TiDeleteOutline } from 'react-icons/ti'

export class UserMsg extends React.Component {

    removeEvent;

    state = {
        msg: null
    }

    componentDidMount() {
        this.removeEvent = eventBusService.on('show-user-msg', (msg) => {
            this.setState({ msg })
            setTimeout(() => {
                this.setState({ msg: null })
            }, 2000)
        })
    }

    componentWillUnmount() {
        this.removeEvent()
    }

    render() {
        if (!this.state.msg) return <span></span>
        const msgClass = this.state.msg.type || ''
        return (
            <section className={'user-indicate-msg ' + msgClass}>
                <button onClick={() => {
                    this.setState({ msg: null })
                }}><TiDeleteOutline /></button>
                {this.state.msg.txt}
            </section>
        )
    }
}

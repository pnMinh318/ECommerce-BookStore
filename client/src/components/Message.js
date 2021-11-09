import React from 'react'
import { Alert } from 'react-bootstrap'
function Message({ variant, msg }) {
    return (
        <Alert variant={variant}>
            {msg}
        </Alert>
    )
}
Message.defaultProps ={
    variant : 'info'
}
export default Message

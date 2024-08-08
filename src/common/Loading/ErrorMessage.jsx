import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({error}) => {
  return (
    <div>
      <Alert variant="danger">{error.message}</Alert>
    </div>
  )
}

export default ErrorMessage

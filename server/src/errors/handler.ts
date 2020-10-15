import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (
  error,
  _request,
  response,
  _next,
) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {}
    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })
    return response.status(400).json({ message: 'Validation fails', errors })
  }
  // eslint-disable-next-line no-console
  console.error(error)

  return response.status(500).json({ message: 'Internal Server Error' })
}

export default errorHandler

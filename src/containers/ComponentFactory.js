import React, { Component, PropTypes } from 'react'
import AddTodo from './AddTodo'

const componentFactory = ({...args}) => {
  return React.createElement(AddTodo, {...args});
}

export default componentFactory
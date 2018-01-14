// @flow
import React from 'react'
import classnames from 'classnames'

const Icon = ({ className, ...rest } : { className: string }) => (
  <i {...rest} className={classnames(className, "material-icons")} />
)

export default Icon

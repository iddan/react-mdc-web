// @flow

import type { ComponentType } from 'react'

export type ClassNamed = {
  className?: string,
}

export const classNameVar = (name : string, variable : any) =>
  (typeof variable === 'string' || typeof variable === 'number') && variable ? name + variable : ''


export type WrappedComponent<Props> =
  | string
  | ComponentType<$Shape<Props>>

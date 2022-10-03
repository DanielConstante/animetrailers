import React from 'react'

import styles from './Heading.module.css'

interface HeadingOwnProps<E extends React.ElementType> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  children: React.ReactNode
  variant?: 'base' | 'primary' | 'secondary'
  as?: E
}

type HeadingProps<E extends React.ElementType> = HeadingOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof HeadingOwnProps<E>>

export default function Heading<E extends React.ElementType = 'h2'>({
  size = 'md',
  children,
  variant = 'base',
  as,
}: HeadingProps<E>) {
  const Component = as ?? 'h2'

  return (
    <Component className={`${styles[size]} ${styles[variant]}`}>
      {children}
    </Component>
  )
}

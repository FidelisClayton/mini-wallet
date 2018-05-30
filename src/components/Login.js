import React from 'react'
import { css } from 'emotion'

import Button from './Button'
import LabeledInput from './LabeledInput'
import Card from './Card'

const styles = css({
  transition: `
    500ms ease margin-top 200ms,
    500ms ease transform
  `,

  '&.login--inactive': {
    position: 'absolute',
    marginTop: '-100px',
    transform: 'scale(0.90)',
    zIndex: 0
  }
})

const Login = ({
  active,
  onClick,
  ...props
}) => {
  const classNames = [
    'login',
    !active && 'login--inactive',
    styles
  ]
    .filter(className => !!className)
    .join(' ')

  return (
    <Card
      className={classNames}
      {...props}
    >
      <h4
        className="card__title"
        onClick={onClick}
      >
        Login
      </h4>

      <form>
        <LabeledInput
          label="Email"
          inputType="email"
        />

        <LabeledInput
          label="Senha"
          inputType="password"
        />

        <div className="card__submit">
          <Button>
            Entrar
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login

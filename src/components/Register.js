import React from 'react'
import { css } from 'emotion'

import Button from './Button'
import LabeledInput from './LabeledInput'
import Card from './Card'

const styles = css({
  transition: `
    500ms ease margin-top 300ms,
    500ms ease transform
  `,

  '&.register--inactive': {
    position: 'absolute',
    transform: 'scale(0.90)',
    marginTop: '45px',
    paddingBottom: 0,
    zIndex: 0,
  }
})

const Register = ({
  active,
  onClick,
  ...props
}) => {
  const classNames = [
    'register',
    !active && 'register--inactive',
    styles
  ]
    .filter(className => !!className)
    .join(' ')

  return (
    <Card
      className={classNames}
      {...props}
    >
      <h4 className="card__title">
        Criar Conta
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

        <LabeledInput
          label="Repita a senha"
          inputType="password"
        />

        { active && (
          <div className="card__submit">
            <Button>
              Registrar
            </Button>
          </div>
        )}

        { !active && (
          <h4
            className="card__title card__title--bottom"
            onClick={onClick}
          >
            Criar Conta
          </h4>
        )}
      </form>
    </Card>
  )
}

export default Register

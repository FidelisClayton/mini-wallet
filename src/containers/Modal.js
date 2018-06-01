import React from 'react'
import { connect } from 'react-redux'
import { css } from 'emotion'

import * as colors from '../helpers/colors'

const styles = css({
  background: colors.white,
  height: '100vh',
  width: '100%',
  position: 'fixed',
  top: 0,
  transition: `
    500ms ease-in-out transform,
    300ms ease-in-out opacity
  `,
  transformOrigin: 'bottom center',

  '&.modal': {
    '&--hidden': {
      opacity: 0,
      transform: 'translateY(100%) scale(0)',
    }
  },

  '.modal': {
    '&__title': {
      textAlign: 'center'
    },

    '&__close': {
      border: 0,
      background: 'transparent',
      position: 'fixed',
      right: '20px',
      top: '22px',
      fontSize: '2rem',
      color: colors.darkGrey,
      outline: 'none'
    },

    '&__body': {
      paddingLeft: '15px',
      paddingRight: '15px'
    },
  }
})

const Modal = ({
  visible,
  close,
  children,
  ...props
}) => {
  const classNames = [
    'modal',
    !visible && 'modal--hidden',
    styles
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames}>
      <div className="modal__header">
        <h1 className="modal__title">Sell Bitcoin</h1>
        <button
          className="modal__close"
          onClick={close}
        >
          X
        </button>
      </div>

      <div className="modal__body">
        { children }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  children: state.modal.children,
  visible: state.modal.visible,
  ...state.modal.props
})

export default connect(mapStateToProps)(Modal)

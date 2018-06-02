import React from 'react'
import { connect } from 'react-redux'
import { css } from 'emotion'

import * as colors from '../helpers/colors'
import * as breakpoints from '../helpers/breakpoints'
import { closeModal } from '../store/actions/modal'

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
  zIndex: 999,

  ...breakpoints.medium({
    maxWidth: '460px',
    maxHeight: '450px',
    margin: '0 auto',
    left: 'calc(50% - 230px)',
    top: 'calc(50% - 225px)',
  }),

  '&.modal': {
    '&--hidden': {
      opacity: 0,
      transform: 'translateY(100%) scale(0)',
    }
  },

  '.modal': {
    '&__title': {
      textAlign: 'center',
      color: colors.darkBlue
    },

    '&__close': {
      border: 0,
      background: 'transparent',
      position: 'absolute',
      right: '20px',
      top: '22px',
      fontSize: '2rem',
      color: colors.darkBlue,
      outline: 'none'
    },

    '&__body': {
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingTop: '15px'
    },
  }
})

const backdropStyle = css({
  position: 'fixed',
  width: '100%',
  height: '100%',
  background: 'black',
  top: '0',
  left: '0',
  opacity: '0.6',
  display: 'none',

  ...breakpoints.medium({
    display: 'block'
  })
})

const Modal = ({
  visible,
  children,
  closeModal,
  title,
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
    <React.Fragment>
      <div className={classNames}>
        <div className="modal__header">
          <h1 className="modal__title">{ title }</h1>
          <button
            className="modal__close"
            onClick={closeModal}
          >
            X
          </button>
        </div>

        <div className="modal__body">
          { children }
        </div>
      </div>
      { visible && (
        <div
          className={`modal__backdrop ${backdropStyle}`}
          onClick={closeModal}
        />
      )}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  ...state.modal
})

export default connect(
  mapStateToProps,
  { closeModal }
)(Modal)

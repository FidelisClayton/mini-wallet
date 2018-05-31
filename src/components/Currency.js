import React from 'react'
import { css } from 'emotion'

import Button from './Button'
import ArrowIcon from './ArrowIcon'

const styles = css({
  display: 'flex',
  marginTop: '10px',
  borderRadius: '5px',
  backgroundColor: '#FFF',
  border: '1px solid #d8e0ea',

  '.currency': {
    '&__data': {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,

      '&--right': {
        textAlign: 'right'
      }
    },

    '&__info': {
      display: 'flex',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: '15px',
      paddingRight: '15px',
      flex: 1,
      width: '100%',
    },

    '&__actions': {
      display: 'flex'
    },

    '&__action-button': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      borderRadius: 0,
      width: '70px',
      fontSize: '0.7rem',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      border: 0,
      outline: 'none',

      '&--sell': {
        background: '#344760'
      }
    },

    '&__action-icon': {
      marginBottom: '5px',
      width: '15px',
      height: '15px',

      '&--sell': {
        transform: 'rotate(180deg)'
      }
    },

    '&__coin, &__total': {
      fontWeight: 'bold',
      color: '#344760'
    },

    '&__price, &__amount': {
      fontWeight: 'bold',
      fontSize: '0.8rem',
      color: '#7a95b9'
    }
  }
})

const Currency = (props) => {
  return (
    <div className={`currency ${styles}`}>
      <div className="currency__info">
        <div className="currency__data">
          <label className="currency__label currency__coin">Brita</label>
          <label className="currency__label currency__price">R$ 3,75</label>
        </div>

        <div className="currency__data currency__data--right">
          <label className="currency__label currency__total">R$ 200</label>
          <label className="currency__label currency__amount">54</label>
        </div>
      </div>

      <div className="currency__actions">
        <Button className="currency__action-button">
          <ArrowIcon className="currency__action-icon" />
          Comprar
        </Button>
        <Button className="currency__action-button currency__action-button--sell">
          <ArrowIcon className="currency__action-icon currency__action-icon--sell" />
          Vender
        </Button>
      </div>
    </div>
  )
}

export default Currency

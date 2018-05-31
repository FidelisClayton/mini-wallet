import React from 'react'

import Currency from './Currency'

const Currencies = (props) => {
  return (
    <div className="home__currencies">
      <Currency
        name="Real"
        total={100000}
        exchangeable={false}
      />
      <Currency
        name="Brita"
        price={3.73}
        total={67.14}
        amount={18}
        currency="BRT"
      />
      <Currency
        name="Bitcoin"
        price={28000}
        total={250}
        amount={0.00892857}
        currency="BTC"
      />
    </div>
  )
}

export default Currencies

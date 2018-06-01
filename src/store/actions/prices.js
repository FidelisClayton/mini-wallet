import {
  getBitcoinPrice,
  getBritaPrice
} from '../../api'

export const FETCH_PRICES_REQUEST = 'FETCH_PRICES_REQUEST'
export const FETCH_PRICES_SUCCESS = 'FETCH_PRICES_SUCCESS'
export const FETCH_PRICES_FAIL = 'FETCH_PRICES_FAIL'

export const SET_PRICES = 'SET_PRICES'

export const setPrices = (payload) => ({
  type: SET_PRICES,
  payload
})

const fetchPricesRequest = payload => ({
  type: FETCH_PRICES_REQUEST,
  payload
})

const fetchPricesSuccess = payload => ({
  type: FETCH_PRICES_SUCCESS,
  payload
})

const fetchPricesFail = payload => ({
  type: FETCH_PRICES_FAIL,
  payload
})

export const fetchPrices = (date) => dispatch => {
  dispatch(fetchPricesRequest(date))

  // Fetch bitcoin and brita and wait the 2 requests to procceed
  return Promise.all([ getBitcoinPrice(), getBritaPrice(date) ])
    .then(([
      bitcoinResponse,
      britaResponse
    ]) => {
      const lastBritaIndex = britaResponse.value.length - 1
      const britaData = britaResponse.value[lastBritaIndex]

      const bitcoin = {
        buy: Number(bitcoinResponse.ticker.buy),
        sell: Number(bitcoinResponse.ticker.sell),
      }

      const brita = {
        buy: Number(britaData.cotacaoCompra),
        sell: Number(britaData.cotacaoVenda)
      }

      const real = {
        buy: 1,
        sell: 1
      }

      localStorage.setItem('prices', JSON.stringify({
        btc: bitcoin,
        brt: brita,
        brl: real
      }))

      dispatch(fetchPricesSuccess({
        btc: bitcoin,
        brt: brita,
        brl: real
      }))
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchPricesFail(error))
    })
}

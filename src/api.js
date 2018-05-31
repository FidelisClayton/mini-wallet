import axios from 'axios'
import moment from 'moment'

const bitcoinEndpoint = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
const britaEndpoint =
  'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)'

export const getBitcoinPrice = () => {
  return axios.get(bitcoinEndpoint).then(response => response.data)
}

export const getBritaPrice = date => {
  const momentDate = moment(date)
  const formattedDate = momentDate.format('MM-DD-YYYY')

  return axios.get(britaEndpoint, {
    params: {
      '@moeda': `'USD'`,
      '@dataCotacao': `'${formattedDate}'`,
      '@format': 'json',
    },
  })
  .then(response => response.data)
  .then(data => {
    // If the current date doesn't have data yet, we will fetch
    // the data from the previous day
    if (data.value.length === 0) {
      return getBritaPrice(momentDate.subtract(1, 'days'))
    } else {
      return data
    }
  })
}

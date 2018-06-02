import accounting from 'accounting'

export const formatBRL = value => accounting.formatMoney(value, '', 2, '.', ',')
export const formatBTC = value => accounting.formatMoney(value, '', 8, '.', ',')
export const formatBRT = value => accounting.formatMoney(value, '', 2, '.', ',')

export default {
  brl: formatBRL,
  btc: formatBTC,
  brt: formatBRT
}

import PouchDB from 'pouchdb'

PouchDB.debug.disable()

const db = new PouchDB('mini-wallet')

export default db

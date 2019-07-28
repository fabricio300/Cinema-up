'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BoletosSchema extends Schema {
    up() {
        this.create('boletos', (table) => {
            table.increments()
            table.integer('idCartelera').nullable()
            table.string('JSON').nullable()
            table.string('token').nullable()
            table.integer('cantidadBoletos').nullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('boletos')
    }
}

module.exports = BoletosSchema
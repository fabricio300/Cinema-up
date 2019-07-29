'use strict'
const Boleto = use('App/Models/Boleto')

class BoletoController {
    async getAllBoletos({ response }) {
        let boleto = await Boleto.all()

        return response.json(boleto)
    }
    async getBoletoByID({ params, response }) {
        const boleto = await Boleto.find(params.id)

        return response.json(boleto)
    }
    async getBoletoByIDCartelera({ params, response }) {
        const boleto = await Boleto.findBy('idCartelera', params.id)
        return response.json(boleto)
    }
    async addNewBoleto({ request, response }) {
        const boletoInfo = request.only(['idCartelera', 'JSON', 'token', 'cantidadBoletos'])

        const boleto = new Boleto()
        boleto.idCartelera = boletoInfo.idCartelera
        boleto.JSON = boletoInfo.JSON
        boleto.token = boletoInfo.token
        boleto.cantidadBoletos = boletoInfo.cantidadBoletos

        await boleto.save()

        return response.status(201).json(boleto)
    }
}

module.exports = BoletoController
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
    async getBoletoByIDPeliculas({ params, response }) {
        const boleto = await Boleto.findBy('idPelicula', params.id)

        return response.json(boleto)
    }
    async getBoletoByIDSala({ params, response }) {
        const boleto = await Boleto.findBy('IDSala', params.id)
        return response.json(boleto)
    }
    async addNewBoleto({ request, response }) {
        const boletoInfo = request.only(['idPelicula', 'IDSala', 'JSON', 'cantidadBoletos'])

        const boleto = new Boleto()
        boleto.idPelicula = boletoInfo.idPelicula
        boleto.IDSala = boletoInfo.IDSala
        boleto.JSON = boletoInfo.JSON
        boleto.cantidadBoletos = boletoInfo.cantidadBoletos

        await boleto.save()

        return response.status(201).json(boleto)
    }
}

module.exports = BoletoController
'use strict'
const Boleto = use('App/Models/Boleto')
const stripe = require('stripe')('sk_test_WPxp1ZDJ23xC0gywfy6S3fgZ00421Q9xmz');
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
        console.log(boleto)
        const token = boletoInfo.token;
        try {
            (async() => {
                const charge = await stripe.charges.create({
                    amount: parseFloat(boleto.cantidadBoletos),
                    currency: 'usd',
                    description: "Compra boletos",
                    source: token,
                });
            })();
        } catch (error) {
            console.error(error)
        }


        await boleto.save()

        return response.status(201).json(boleto)
    }
}

module.exports = BoletoController
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User } from 'App/Models'

export default class SearchController {
  public async index({ request }: HttpContextContract) {
    const resultado = request.only(['keyword'])

    return User.query()
      .where('name', 'like', `%${resultado.keyword}%`)
      .orWhere('username', 'like', `%${resultado.keyword}%`)
  }
}

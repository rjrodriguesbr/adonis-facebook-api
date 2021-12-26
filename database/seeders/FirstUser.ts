import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class FisrtUserSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      email: 'admin@demo.com',
      password: 'admin123456',
    })
  }
}

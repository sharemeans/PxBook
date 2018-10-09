'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let top30 = await this.ctx.service.devices.getTops(30)
    await this.ctx.render('home.nj', {
      devices: top30
    });
  }
  // async filter() {
    
  // }
}

module.exports = HomeController;

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let { session } = ctx
    if(session.visited) {
      session.visited += 1
    } else {
      session.visited = 1
    }
    ctx.body = {
      session,
    }
  }
}

module.exports = HomeController;

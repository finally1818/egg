'use strict'

const { Controller } = require('egg')

class NewsController extends Controller {
  async list() {
    // const dataList = {
    //   list: [
    //     {
    //       id: 1,
    //       title: 'this is news 1',
    //       url:
    //         'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588829278926&di=d696d1fb1e30a5740b62f7a781ffc06e&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
    //     },
    //     {
    //       id: 2,
    //       title: 'this is news 2',
    //       url:
    //         'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588829278926&di=fc8cb54a6aee5d8bc8c013462130cc56&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg',
    //     },
    //   ],
    // }
    const {
      ctx: {
        query: { page = 1 },
        service: {
          news: { getList },
        },
      },
    } = this
    const list = await getList(page)
    await this.ctx.render('news/list.tpl', { list })
  }
}

module.exports = NewsController

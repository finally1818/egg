'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  /** sequelize mysql */
  sequlize: {
    enable: true,
    package: 'egg-sequelize',
  },
}

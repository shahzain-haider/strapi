'use strict';

/**
 * employee-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-site.employee-site');

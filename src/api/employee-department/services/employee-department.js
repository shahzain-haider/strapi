'use strict';

/**
 * employee-department service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-department.employee-department');

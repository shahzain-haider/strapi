'use strict';

/**
 * employee-designation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-designation.employee-designation');

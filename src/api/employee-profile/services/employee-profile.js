'use strict';

/**
 * employee-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-profile.employee-profile');

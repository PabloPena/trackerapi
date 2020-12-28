/**
 * Define express app routes
 * @type {exports|module.exports}
 */
import express from 'express';
import crawlerController from './controllers/crawler.controller';
import indexController from './controllers/index.controller';

const router = express.Router();

/* Index */
router.route('/api/v2').get(indexController.index);
router.route('/api/v2/crawl').post(crawlerController.crawl);

export default router;
/**
 * Define express app routes
 */


/**
 * Module dependencies.
 */
import express from 'express';
import crawlerController from './controllers/crawler.controller';
import indexController from './controllers/index.controller';


const router = express.Router();

/* Routes */
router.route('/api/v2').get(indexController.index);
router.route('/api/v2/crawl').post(crawlerController.crawl);

export default router;
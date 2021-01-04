Crawler API
====================

This backend application responds to the requeriments of crawling websites URLs and listing the links retrieved.

The app is developed in NodeJS using socket.io for living communication with web clients in order to notify crawling process errors or completions. Also use express as http manager and middleware.

The project contains several test cases building in mocha.

Its already set for deployment as docker image. Check intructions above.

### Demo

Demo application deployed on heroku. (https://calm-wildwood-04416.herokuapp.com/)

### Swagger

Check Api constract and test it from web interface:  
http://[host]:[port]/api-docs/

### Build&Run Commands

**Install packages and globals**

`$ npm install`

**Utility for server reloading when detecting file changes**

`$ npm install -g nodemon`

**Build the application**

`$ npm run build`

**Run a local dev server**

`$ npm run start:dev`

### Test 

Run `npm test` for testing api with mocha. The tests are located in `tests/` folder.

### Docker

Docker container files should be created in `docker/`. Docker commands below:

**Build Image:**

`$ docker build -t [tag_name] -f docker/dockerfile .`

For this project, a sample build would be:

`$ docker build -t [user]/trackerappapi:0.0.1 -f docker/dockerfile .`

**Creating and running the container:**

To run this image, a container must be created.

`$ docker run -d --name [container_name] -p [host_port]:[container_port] [tag_name]`

For the previous example, the final command would be:

`$ docker run -d --name  -p 3000:3000 [user]/trackerappapi:0.0.1`

__ 
  
##### TO DO TASKS

**Add lint build**

Pending

**Add versioning build to streamline the process**

Pen

**Review xmldom error returned after each mocha test build** 

Pending

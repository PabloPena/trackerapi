Crawler API
====================

This backend-oriented applications responds to the requeriments of crawling websites URLs and listing the links retrieved.

The app is developed in NodeJS using socket.io for living communication with clients in order to notify crawling process errors or completions.

### Install packages and globals

`$ npm install`

Utility for server reloading when detecting file changes

`$ npm install -g nodemon`

##### Commands

Run a local dev server

`$ npm start`

### Docker

Docker container files should be created in `docker/`. A new file should be created for each environment. At this moment
this application mantains two enviroments: *dev* and *prod*.

**Build Image:**

`$ docker build -t [tag_name] -f docker/dockerfile .`

For this project, a sample build would be:

`$ docker build -t tracker/api:0.0.1 -f docker/dockerfile .`

**Creating and running the container:**

To run this image, a container must be created.

`$ docker run -d --name [container_name] -p [host_port]:[container_port] [tag_name]`

For the previous example, the final command would be:

`$ docker run -d --name trackerapi -p 3000:3000 tracker/api:0.0.1`

## TO DO TASKS

## Environment support

Pending

## Docker

Pending

**Build Image Instructions:**

Pending

**Creating and running the container instructions:**

Pending

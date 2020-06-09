## About
`JavaScript crypto miner` with an `HTML` interface, and a
`Dockerfile` for deploying in `Docker`.

## Status
`Current Completed Items`:
  + **Basic Terminal**

`Queued Items`:
  + **Example Crypto Miner**
  + **Production Crypto Miner**
  + **Distributed Mining**
  + **Advanced Terminal Features**

## Docker
Various `docker-related` commands.

### Build
To build the image locally with name `minerjs`:
```
$ git clone https://github.com/RagingTiger/minerJS
$ cd minerJS
$ docker build -t minerjs .
```

### Run
To run `container` of local image named `minerjs`:
```
$ docker run --name mnrjs -p 8080:80 minerjs
```
Access at http://localhost:8080

## Usage
This repository was designed to provide an `interface` (via  `HTML`, `NGINX`,
and `Docker`) for exploring, testing, and learning about `browser-based` /
`JavaScript crypto mining`.

Hence you are meant to either [build](#build) and [run](#run) the `docker image`
(`e.g` accessing it at http://localhost:8080), or directly opening the
`index.html` page in a browser (`e.g.` on `macOS` you can use
`$ open -a Google\ Chrome minerJS/static/index.html`).

If you purely want to view the `JavaScript` source, then navigate to the
`static/scripts` directory where you will find it.

# podil-example
A Node.js example of using Podil

In order to use this example, you need to have Node.js and Docker
on your machine.

## How to run

Start the database container:

```shell
docker-compose up
```
This will start PostgresQL in a container available on the `5432` port.

Start the application:

```shell
npm install
npm start
```

This will start the application, execute Podil migrations from [migrations](./migrations),
and expose a REST endpoint that would fetch data from the database.

You can test it with `curl`:

```shell
curl http://localhost:8080/languages
```
You will get a responce like this:
```shell
[
  {"id":"1","name":"English","symbol":"EN"},
  {"id":"2","name":"Ukrainian","symbol":"UA"},
  {"id":"3","name":"German","symbol":"DE"}
]
```

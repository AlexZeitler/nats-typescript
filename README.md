# NATS-Typescript

This repo is a test and should be seen as a foundation for discussion to have typed Events/Messages for [NATS](https://nats.io) in Node.js using TypeScript.

## Running the code
### Install TypeScript
```npm install -g typescript```

### Build the sample app
```bash
npm install
tsc 
```

### Run NATS in a Docker container
```docker run -d -p "4222:4222" --name nats-main nats```

### Run the sample app
```npm run watch```

The output should like this (wait for 10s to get the last line):

```bash
[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `./node_modules/typescript/bin/tsc && docker-compose kill && docker-compose up`
Starting natstypescript_pubsub_1 ... done
Starting natstypescript_nats_1   ... done
Attaching to natstypescript_pubsub_1, natstypescript_nats_1
nats_1    | [1] 2018/04/04 07:00:51.311838 [INF] Starting nats-server version 1.1.0
nats_1    | [1] 2018/04/04 07:00:51.311866 [INF] Git commit [add6d79]
nats_1    | [1] 2018/04/04 07:00:51.312010 [INF] Starting http monitor on 0.0.0.0:8222
nats_1    | [1] 2018/04/04 07:00:51.312067 [INF] Listening for client connections on 0.0.0.0:4222
nats_1    | [1] 2018/04/04 07:00:51.312078 [INF] Server is ready
nats_1    | [1] 2018/04/04 07:00:51.312280 [INF] Listening for route connections on 0.0.0.0:6222
pubsub_1  | npm info it worked if it ends with ok
pubsub_1  | npm info using npm@3.10.10
pubsub_1  | npm info using node@v6.11.1
pubsub_1  | npm info lifecycle nats-typescript@0.1.0~predebug: nats-typescript@0.1.0
pubsub_1  | npm info lifecycle nats-typescript@0.1.0~debug: nats-typescript@0.1.0
pubsub_1  | 
pubsub_1  | > nats-typescript@0.1.0 debug /server
pubsub_1  | > node --debug=5858 build/app.js
pubsub_1  | 
pubsub_1  | Debugger listening on [::]:5858
pubsub_1  | Received a message: PDMLab
```

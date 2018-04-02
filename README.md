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
```node build/app.js```

The output should like this:

```bash
Received a message: PDMLab
```

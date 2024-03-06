# Portafolio

In this repository you will find all the code used for building and deploying my personal portfolio. If anyone finds it useful, feel free to use it as you like.

## Running locally
  
You will need the following tools to run this repo in your personal machine:
* docker
* make

```bash
# create a new project in the current directory
make build

# For running in develop mode
make start

# For starting the project in develop mode (run this once you are inside the container)
npm run dev
```

## Building

Once you are inside the container you can use the following command to create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

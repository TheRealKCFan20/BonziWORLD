# BonziWORLD

This respository is a fork of the [original](https://github.com/heyjoeway/BonziWORLD), [patched](https://github.com/duckduckstab1/BonziWORLD-patched), and [fully patched](https://github.com/Rafafrias2012/BonziWORLD-patched). It will be updated frequently to be fully secure and fix problems with either the server or the client.

This project was discontinued by heyjoeway due to his time being taken up by other responsibilities. _Thanks for all the laughs and memes along the way._

All the source code for the server and client is publically available here. If you want to run your own BonziWORLD, by all means go ahead. Do whatever you'd like with this code. _Just try to put me somewhere in the credits._

## Dependencies
- Node.js and npm
- Ruby
- Sass
- Git
- Cordova (Optional)
- Grunt

## Setup
In a terminal and/or command prompt, navigate to where you'd like BonziWORLD to be placed and run the following:
```
git clone https://github.com/felipeangeloben-create/BonziWORLD
cd BonziWORLD
```

### Client
```
cd src
npm install
grunt build_www
cd ..
```

### Server
```
cd server
npm install
node index.js
```

### Server (nginx)
```
For an example nginx configuration and a step-by-step tutorial on using nginx as a reverse proxy for a Node.js app, see: [How To Set Up Nginx as a Reverse Proxy for Node.js on Ubuntu 20.04 - DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-as-a-reverse-proxy-on-ubuntu-20-04)
```

After this, BonziWORLD will be accessible on port 3000. (http://localhost:3000/)

## Disclaimer
I'm not responsible if you screw up anything with your computer while setting this up. I have no idea how you would, but someone will find a way. I also will not provide support for installing dependencies. If you have everything installed properly, the above commands will work. (Like seriously, How can you even do that?)

## License
MIT

# BonziWORLD

This repository is a fork of the [original](https://github.com/heyjoeway/BonziWORLD), [patched](https://github.com/duckduckstab1/BonziWORLD-patched), and [fully patched](https://github.com/Rafafrias2012/BonziWORLD-patched). It will be updated frequently to be fully secure and fix problems with either the server or the client.

This project was discontinued by heyjoeway due to his time being taken up by other repositories. ~~Thanks for all the laughs and memes along the way.~~

All the source code for the server and client is publicly available here. If you want to run your own BonziWORLD, by all means go ahead. Do whatever you'd like with this code. _Just try to put me somewhere in the credits._

## Dependencies
- Node.js and npm
- Ruby
- Scss/Sass
- Git
- Cordova (Optional)
- Grunt
- Winston

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
<pre><span><code>Check out this <a href="https://www.youtube.com/watch?v=krcYPrjIDzU" alt="Tutorial" title="Tutorial">tutorial</a> below.
</code></span></pre>

### Deploy GitHub Project on Render
You can deploy this project on Render (https://render.com) for automatic builds and hosted runtime. The steps below guide you through a simple Web Service deployment that builds the client and runs the Node server.

1. Create a Render account and connect your GitHub account.
2. In Render, click New -> Web Service and select the `felipeangeloben-create/BonziWORLD` repository (choose the branch you want to deploy).
3. Configure the service:
   - Environment: Node
   - Build Command:
     ```bash
     # from the repository root, build the client and install server deps
     bash -lc "cd src && npm install && npx grunt build_www && cd ../server && npm install"
     ```
   - Start Command:
     ```bash
     node server/index.js
     ```
   - Instance Type / Plan: choose according to your traffic needs (Free tier available on Render).
4. Environment variables (optional): If your server expects any secrets or environment variables (e.g. session secrets, API keys), add them under Environment in Render.
5. Port handling: Render provides a PORT environment variable for web services. Ensure `server/index.js` uses `process.env.PORT || 3000` when binding the HTTP server. If it does not, update the server code to read `process.env.PORT` so Render can route traffic properly.
6. Deploy: click Create Web Service. Render will run the build command and start the service. Subsequent pushes to the selected branch will trigger automatic deploys.

Notes:
- The build command above uses `npx grunt` so you don't need a global Grunt CLI install on Render. If your repo defines npm scripts to build the client or start the server, you can replace the Build/Start commands with those scripts.
- If you need HTTPS, custom domains, or background workers, Render provides those features in the service settings.

After this, BonziWORLD will be accessible on port 3000. (http://localhost:3000/)

## Disclaimer
I'm not responsible if you screw up anything with your computer while setting this up. I have no idea how you would, but someone will find a way. I also will not provide support for installing dependencies. If you have everything installed properly, the above commands will work.

## License
MIT

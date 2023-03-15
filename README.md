
How to check that esbuild is properly installed:

`./node_modules/.bin/esbuild --version`

To transpile the application run the commands

./node_modules/.bin/esbuild sigurd.ts --outfile=sigurd.js


Then to run you can the file by doing

node sigurd.js

_______________________________________

If you want to compare how much quicker esbuild is, in comparison to TS. Do this

Install TS globally,

npm install -g typescript

type in tsc (stands for typescript compiler)
you should see the list of commands below.

__________________________________________

Command for compiling the app.jsx file

./node_modules/.bin/esbuild ./src/app.tsx --bundle --outfile=out.js

You can see in the file there will be loads of React code bundled up etc and at bottom you will see
the code I wrote.

To execute the file you run:

node out.js

__________________________________________

To run the browser builder file, execute the command:

node browser-builder.js

The out directory is the the public/dist folder
Have a look there to see what is generated

_____________________________________________

npx http-server

This is a zero config webserver that will serve up whatever is in the public folder.


________________________________________________

esbuild-register

This is what enables on the fly transpilation.

If we run the command: node -r esbuild-register sigurd.ts

This will exectue that code, show we can transpile and run out application straight away.

So. If we run 'node -r esbuild-register src/index.ts':
This will run the index.ts file and we will be able to see our application on localhost:3000

However, if we do a chance to the index.ts or to the application we will not be able to see our changes unless we.
Change the console.log message in the index.ts file.
Change something in the app2.tsx file, rebuild the assets and then restart the server.

So how to make hot reloading?

Download Nodemon

See the 'dev' command.
This allows us to run again the file which will regenerate the assets and then runs the index.ts file again
(This will redeploy the application using the express server)
which means that we just need to refresh the page and we will see the changes.

Then of course as we are using ESBuild this will be super fast.



MORE INFO....




Which will in turn make hot-reloading possible
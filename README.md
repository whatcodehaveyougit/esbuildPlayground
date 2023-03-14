
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

This is what enables hot-reloading (on the fly transpilation)

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


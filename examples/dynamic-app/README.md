A ES6 Simple bundling of the Rythan Presentation Library

This will import but NOT build exhibit. Be sure that Exhibit is also built. If you are planning to create a prod build be sure to build exhibit prod

To build

using npm version 14.5.0 >=

npm install

For prod:

(goto exhibit)
npm run-script build-prod
(goto examples\bundle-es6\)
npm run-script build-prod

For dev:
npm run start

To import exhibit this npm install ..\.. in this folder.


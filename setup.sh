#!/bin/bash
set -e

npm init -y
npm install --save-dev webpack webpack-cli
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
npm install --save-dev webpack-dev-server

npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"

npm init @eslint/config@latest

echo "✅ Done!"

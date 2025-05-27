#!/bin/bash

set -xe
rm -rf generated lib
tsimp ./converter/index.ts
dts-bundle-generator ./src/global.d.ts -o ./lib/global.d.ts --no-check --inline-declare-global
dts-bundle-generator ./node_modules/weight-balanced-tree/index.d.ts -o ./lib/weight-balanced-tree.d.ts --external-inlines weight-balanced-tree
sed -i.bak 's/weight-balanced-tree/.\/weight-balanced-tree.js/' ./lib/global.d.ts
rm ./lib/global.d.ts.bak
echo -e "// THIS FILE IS GENERATED FROM THIRD-PARTY https://www.npmjs.com/package/weight-balanced-tree (to reduce dependencies)\n// SPDX-License-Identifier: MIT" | cat - ./lib/weight-balanced-tree.d.ts > ./lib/temp
mv ./lib/temp ./lib/weight-balanced-tree.d.ts
tsc -p tsconfig.build.json

const fs = require('fs');
const feather = require('feather-icons');

const icon = (name, path) => `
  '${name}': {path: <>${path}</>,},`;

const template = icons => `
/* This is a generated file, use \`yarn gen-icons\` to regenerate it */

import * as React from 'react';

export const icons = {${icons}};`;

let icons = '';

Object.keys(feather.icons).forEach(name => {
  const { contents } = feather.icons[name];

  icons += icon(name, contents);
});

fs.writeFileSync(`${process.cwd()}\\src\\Theme\\system\\icons\\index.tsx`, template(icons));

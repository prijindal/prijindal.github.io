#!/bin/sh
node render.ts "/about" > dist/browser/about.html
node render.ts "/contact" > dist/browser/contact.html
node render.ts "/works" > dist/browser/works.html
node render.ts "/404" > dist/browser/404.html
node render.ts "/" > dist/browser/index
mv dist/browser/index dist/browser/index.html

#!/bin/bash

npm run build
netlify deploy --dir=./build

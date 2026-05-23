#!/usr/bin/env bash

# Build script for alugatuci.org

hugo build -d dist
cp -r static/images dist/images
zip -r dist.zip dist
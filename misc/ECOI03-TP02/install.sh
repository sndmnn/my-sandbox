#!/bin/bash

mkdir -p build

# silently calls make, avoiding any logs and only printing
# in case of an error
make >/dev/null || make

# cleans up the object files
rm -rf build

# creates a directory to store test files
mkdir -p tests

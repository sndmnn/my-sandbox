# What is This Project?

This is a boilerplate to help you quickly set up a Node.js project intended to run on AWS Lambda infrastructure and start writting code fast, without worrying too much about the development environment.

Somewhat like [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) for React, though this project isn't nearly as complex.

## Disclaimer

You will find a notable abscence of tests in this repository and that's due to the fact that I'm still figuring out how to write them (feel free to help with that).

I have used this template to build a few projects of mine, and though I haven't had any issues with it, you may very well stumble into bugs. Feel free to open an issue if that's the case, or submit a PR if you want to fix the problem yourself.

For that reason I don't encourage you to use this boilerplate if you have an already solid workflow that works well for you. And for those of you willing to give it a try, please remember: I'm just a guy who did a thing that might help you and wanted to share it.

# Requirements to Use This Template

## Docker and Docker Compose

Though you don't need a lot of familiarity with Docker, you'll need to have it installed if you want to use pretty much anything other than `assemble` and `build:zip` (which may perfectly suit your needs).

Docker Compose v2 is required as well. This project was built with it in mind and I'll not add support for Compose v1 as it's reaching the end of its lifecycle in June 2023.

If you really need to use Docker Compose v1, you can dig into the included `.tools` and modify them to use `docker-compose` instead of `docker compose`.

## Node.js

If you're intending to use this template I think this is obvious to you, but you'll need to have Node.js installed. Also, this project relies on ES Modules, so Node >= 14.0.0 is recommended.

You don't necessarily need to use ES Modules on your source code, but you'll need a version of Node.js that supports it in order to run the included scripts. If you're using a version of Node.js that had experimental support for ES Modules, you can add the `--experimental-modules` flag to the [Included Scripts]() in your `package.json`.

# Quick Start

Make sure you have Node.js installed (preferrably version >= 14.0.0) and Docker, as well as Docker Compose V2.

Clone the repo

```
git clone https://
```

And run the setup script

```
yarn setup
```

or

```
npm run setup
```

Optionally you can also customize your [config.json]().

# How to Use This Boilerplate?

You should place your code inside a source folder on the project root. You can choose any name for that folder as long as you specify it in `config.json` (by default `src` is assumed to be the name for the source folder).

There's a bunch of included scripts that should cover the basic use cases for this template, but you can always modify and add more of them to better suit your workflow.

## Included Scripts

This template provides a script to put together the code you actually use on a specific handler, and a few others to make it distribution ready (by zipping the code or building a Docker image).

I leave it up to you to put anything else in-between (TypeScript transpilation, code minification, or any other transformation you wish to apply). Though I do intend to support other use cases in the future.

### `assemble`

Assembles the project copying relevant files to `lambdaFolder`. This is useful if you intend to use other transformations to your code before shipping it (if you're using babel for instance).

| Argument | Description |
| `-e`, `--entryPoint`\* | Path to the entry point of your application relative to the project root. |
| `-l`, `--lambdaFolder` | Path to output the assembled Lambda, relative to the project root. |
| `-a`, `--apiMode` | If this flag is passed will assemble every entry point inside your `config.json`.`api`. |

### `build:zip`

Packs a single Lambda handler into a zip folder. This script is useful for people using the `.zip` deploy method on AWS Lambda.

| Argument | Description |
| -l, --lambdaFolder | Path to your assembled project relative to the project root. If omitted, `lambdaFolder` from `config.json` will be used. |
| -z, --zipOutput | Path to output the generated zip file. If omitted, output will be directed to `<project root>/out/lambda-<timestamp>` |
| -e, --entryPoint | Path to the entry point of your application relative to the project root. If specified, this script will assemble the project before zipping it. |

### `build:docker`

Builds a single Lambda handler into a docker image.

| Argument | Description |
| -p, --printStdout | Print standard output from build script to console. Defaults to `true` |
| -l, --lambdaFolder | Path to your assembled project relative to the project root. If omitted, `lambdaFolder` from `config.json` will be used. |
| -e, --entryPoint | Path to the entry point of your application relative to the project root. If specified, this script will assemble the project before building the image. |

### `dev:api`

Spins up a development environment with Docker and Compose that emulates AWS API Gateway integrated with AWS Lambda.

## Configuration

| Key | Description |
| `srcFolder` | Folder that contains the source code to your project, relative to the project root. |
| `lambdaFolder` | Path to a folder containing your execution-ready code. This will be used to determine what code to run on development and to build your docker images or `.zip` files on single mode. |
| `codeExtensions` | An array containing the extensions of the types of files `assemble` should look into and extract dependencies. Default: ['js', 'jsx'] |
| `ecmaVersion` | Required by `acorn` to correctly parse files |
| `dockerBuildScript` | Path to a script file that will be executed instead of the default `docker build` command when using `build:docker`. |
| `apiModeLambdasFolder` | Path to a folder containing your execution-ready code. This will be used to determine what code to run on development and to build your docker images or `.zip` files on API mode. |
| `apiRoutes` | An object in the format `"route": "entryPoint"` that specifies the entry points to the handler that will be used on each route |

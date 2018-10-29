documentation-feedback-cli
==========================

Box Documentation Feedback CLI for pulling data from SurveyMonkey

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/documentation-feedback-cli.svg)](https://npmjs.org/package/documentation-feedback-cli)
[![Downloads/week](https://img.shields.io/npm/dw/documentation-feedback-cli.svg)](https://npmjs.org/package/documentation-feedback-cli)
[![License](https://img.shields.io/npm/l/documentation-feedback-cli.svg)](https://github.com/box-devrel/documentation-feedback-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g documentation-feedback-cli
$ bdf  COMMAND
running command...
$ bdf  (-v|--version|version)
documentation-feedback-cli/0.1.0 darwin-x64 node-v11.0.0
$ bdf  --help [COMMAND]
USAGE
  $ bdf  COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bdf  hello [FILE]`](#bdf-hello-file)
* [`bdf  help [COMMAND]`](#bdf-help-command)
* [`bdf  stats [FILE]`](#bdf-stats-file)

## `bdf  hello [FILE]`

describe the command here

```
USAGE
  $ bdf  hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ bdf  hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/box-devrel/documentation-feedback-cli/blob/v0.1.0/src/commands/hello.ts)_

## `bdf  help [COMMAND]`

display help for bdf

```
USAGE
  $ bdf  help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_

## `bdf  stats [FILE]`

describe the command here

```
USAGE
  $ bdf  stats [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/stats.ts](https://github.com/box-devrel/documentation-feedback-cli/blob/v0.1.0/src/commands/stats.ts)_
<!-- commandsstop -->

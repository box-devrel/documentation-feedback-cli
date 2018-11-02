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
documentation-feedback-cli/0.2.0 darwin-x64 node-v11.0.0
$ bdf  --help [COMMAND]
USAGE
  $ bdf  COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bdf  help [COMMAND]`](#bdf-help-command)
* [`bdf  latest [AMOUNT]`](#bdf-latest-amount)
* [`bdf  responses [PATH]`](#bdf-responses-path)
* [`bdf  setup ACCESS_TOKEN`](#bdf-setup-access-token)
* [`bdf  stats`](#bdf-stats)

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

## `bdf  latest [AMOUNT]`

Prints the latest responses

```
USAGE
  $ bdf  latest [AMOUNT]

ARGUMENTS
  AMOUNT  [default: 5] the number of responses to fetch

OPTIONS
  -N, --with-notes  Only show messages with notes
  -h, --help        show CLI help
```

_See code: [src/commands/latest.ts](https://github.com/box-devrel/documentation-feedback-cli/blob/v0.2.0/src/commands/latest.ts)_

## `bdf  responses [PATH]`

Prints the responses for an endpoint

```
USAGE
  $ bdf  responses [PATH]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/responses.ts](https://github.com/box-devrel/documentation-feedback-cli/blob/v0.2.0/src/commands/responses.ts)_

## `bdf  setup ACCESS_TOKEN`

Sets up the auth token for this CLI

```
USAGE
  $ bdf  setup ACCESS_TOKEN

ARGUMENTS
  ACCESS_TOKEN  the API access token
```

_See code: [src/commands/setup.ts](https://github.com/box-devrel/documentation-feedback-cli/blob/v0.2.0/src/commands/setup.ts)_

## `bdf  stats`

Prints some basic stats for our survey

```
USAGE
  $ bdf  stats

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/stats.ts](https://github.com/box-devrel/documentation-feedback-cli/blob/v0.2.0/src/commands/stats.ts)_
<!-- commandsstop -->

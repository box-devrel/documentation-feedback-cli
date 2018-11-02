import {Command} from '@oclif/command'
import * as fs from 'fs'
import * as os from 'os'

export default class Setup extends Command {
  static description = 'Sets up the auth token for this CLI'

  static args = [
    {
      name: 'access_token',
      required: true,
      description: 'the API access token'
    }
  ]

  async run() {
    const {args} = this.parse(Setup)

    fs.writeFileSync(`${os.homedir}/.dfcrc`, JSON.stringify({
        access_token: args.access_token
    }))

    this.log('Access token written to ~/.dfcrc')
  }
}

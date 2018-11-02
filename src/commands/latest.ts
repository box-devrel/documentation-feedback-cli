import {Command, flags} from '@oclif/command'

import {feedbackFor, printFeedback} from '../utils/feedback'
import {fetchAllResponses, uniqueResponses, withNotes} from '../utils/responses'

export default class Latest extends Command {
  static description = 'Prints the latest responses'

  static flags = {
    help: flags.help({char: 'h'}),
    'with-notes': flags.boolean({char: 'N', description: 'Only show messages with notes'}),
  }

  static args = [
    {
      name: 'amount',
      required: false,
      description: 'the number of responses to fetch',
      default: "5",
      
    }
  ]

  async run() {
    const {args, flags} = this.parse(Latest)

    let responses: Array<Object> = await fetchAllResponses(this, [], 'DESC', 1, args.amount, args.amount)
    responses = uniqueResponses(responses)
    if (flags['with-notes']) { responses = withNotes(responses) }
    responses = responses.reverse()

    let feedback: Array<Object> = responses.map((response: any) => {
      return feedbackFor(response)
    })

    printFeedback(this, feedback)
  }
}

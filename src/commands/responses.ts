import {Command, flags} from '@oclif/command'

import {feedbackFor, printFeedback} from '../utils/feedback'
import {fetchAllResponses, uniqueResponses} from '../utils/responses'

export default class Responses extends Command {
  static description = 'Prints the responses for an endpoint'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'path'},
  ]

  async run() {
    const {args} = this.parse(Responses)

    let responses: Array<Object> = await fetchAllResponses(this)
    responses = uniqueResponses(responses)
    responses = responses.filter(this.forPath(args.path))

    let feedback: Array<Object> = responses.map((response: any) => {
      return feedbackFor(response)
    })

    printFeedback(this, feedback)
  }

  forPath(filter: String) {
    return (response: any) => {
      let questions = response.pages[0].questions
      let url = questions.filter((answer: any) => answer.id == '164337216')[0].answers[0].text
      let path = url.replace('https://developer.box.com', '')

      return filter == path
    }
  }
}

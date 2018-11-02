import {Command, flags} from '@oclif/command'
import * as AsciiTable from 'ascii-table'

import {fetchAllResponses, uniqueResponses} from '../utils/responses'

export default class Stats extends Command {
  static description = 'Prints some basic stats for our survey'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    let responses: Array<Object> = await fetchAllResponses(this)
    responses = uniqueResponses(responses)

    let table = new AsciiTable()
    table.setHeading('Page', '% positive', '# of negative', '# of responses')

    let feedback: Array<Object> = responses.map((response: any) => {
      return this.feedbackFor(response)
    })

    let stats: Array<any> = this.statsFor(feedback)
    stats.sort((a, b) => a[2] - b[2])

    stats.forEach((stat: any) => {
      table.addRow(stat)
    })

    this.log(table.toString())
  }

  feedbackFor(response: any): Object {
    let questions = response.pages[0].questions
    let url = questions.filter((answer: any) => answer.id == '164337216')[0].answers[0].text
    let path = url.replace('https://developer.box.com', '')
    let choiceId = questions.filter((answer: any) => answer.id == '164337720')[0].answers[0].choice_id
    let positive = choiceId === '1155084831'
    return {path, positive}
  }

  statsFor(feedback: Array<any>): Array<Object> {
    let stats = feedback.reduce((accumulator: any, entry: any) => {
      accumulator[entry.path] = accumulator[entry.path] || {
        positive: 0,
        negative: 0,
        total: 0
      }

      if (entry.positive) { accumulator[entry.path].positive += 1 }
      if (!entry.positive) { accumulator[entry.path].negative += 1 }
      accumulator[entry.path].total += 1

      return accumulator
    }, {})

    return Object.keys(stats).map((key: any) => {
      let percentage = stats[key].positive / stats[key].total * 100
      return [key, `${percentage}%`, stats[key].negative, stats[key].total]
    })
  }
}

import {Command} from '@oclif/command'

let printFeedback = async (command: Command, feedback: Array<Object>) => {
  command.log('---------------------------------------------------')

  feedback.forEach((entry: any) => {
      command.log('')
      command.log(`${entry.positive} - ${entry.name || 'Anonymous'} <${entry.email || '...'}>`)
      command.log(entry.url)
      command.log(new Date(entry.date).toLocaleString())
      command.log(`#${entry.id}`)
      if (entry.note) {
          command.log('')
          command.log(entry.note)
        }
      command.log('')
      command.log('---------------------------------------------------')
    })
}

let feedbackFor = (response: any): Object => {
  let feedback: any = {}

  let questions = response.pages[0].questions
  feedback.url = questions.filter((answer: any) => answer.id == '164337216')[0].answers[0].text
  let choiceId = questions.filter((answer: any) => answer.id == '164337720')[0].answers[0].choice_id
  feedback.positive = choiceId === '1155084831' ? '✅' : '❌'
  let name = questions.filter((answer: any) => answer.id == '164337973')[0]
  if (name) { feedback.name = name.answers[0].text }
  let email = questions.filter((answer: any) => answer.id == '164338049')[0]
  if (email) { feedback.email = email.answers[0].text }
  let note = questions.filter((answer: any) => answer.id == '164338156')[0]
  if (note) { feedback.note = note.answers[0].text }
  feedback.date = response.date_modified
  feedback.id = response.id
  return feedback
}

export {feedbackFor, printFeedback}

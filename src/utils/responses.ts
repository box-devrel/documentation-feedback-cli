import {Command} from '@oclif/command'

import client from '../utils/client'

/**
 * Fetches all responses for a survey
 * @param responses the responses to the API
 * @param page by default starts at page 0
 * @param perPage by default does 100 responses per page
 */
let fetchAllResponses = async (command: Command, responses = [], sortOrder = 'ASC', page = 1, perPage = 100, limit = null): Promise<Array<Object>> => {
    // Let's start with a response object
  let response

    // Try to fetch one page of responses
  try {
      response = await client.get(`https://api.surveymonkey.com/v3/surveys/160430451/responses/bulk?per_page=${perPage}&page=${page}&sort_order=${sortOrder}`)
        // Add the responses to the output
      responses = responses.concat(response.data.data)
    } catch (error) {
      response = error.response
      command.error(`[${response.status}] ${response.statusText}\n${response.data.error.message}`)
    }

    // Return all responses if we reached the end
  if (responses.length >= response.data.total) { return responses }
  if (limit != null && responses.length >= limit) { return responses }
    // otherwise fetch the next command
  return fetchAllResponses(command, responses, page + 1, perPage)
}

let uniqueResponses = (responses: Array<any>) => {
  return Object.values(responses.reduce((object: any, response: any) => {
      object[response.id] = response
      return object
    }, {}))
}

let withNotes = (responses: Array<any>) => {
  return responses.filter(response => {
      let questions = response.pages[0].questions
      let note = questions.filter((answer: any) => answer.id == '164338156')[0]
      return note != null
    })
}

export {fetchAllResponses, uniqueResponses, withNotes}

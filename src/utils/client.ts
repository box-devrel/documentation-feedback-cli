import axios from 'axios'
import * as fs from 'fs'
import * as os from 'os'

let file = fs.readFileSync(`${os.homedir}/.dfcrc`)
let data = JSON.parse(file.toString())

axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`

export default axios

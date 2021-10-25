import { ADDPERSON } from '../constan'
import { nanoid } from 'nanoid'

const init = [
  {
    id: nanoid(),
    name: '小邓',
  },
]
function personReducer(preState = init, action) {
  const { type, data } = action
  switch (type) {
    case ADDPERSON:
      return [...preState, { id: nanoid(), name: data }]
    default:
      return preState
  }
}
export default personReducer

import { store } from '@things-factory/shell'
import serviceBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    serviceBase
  })
}

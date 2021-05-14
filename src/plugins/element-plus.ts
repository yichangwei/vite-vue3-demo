import { App } from 'vue'
import {
  ElButton,
} from 'element-plus'

const components = [
  ElButton,
]

export default {
  install: (app: App) => {
    components.forEach(component => {
      app.component(component.name, component)
    })
  },
}

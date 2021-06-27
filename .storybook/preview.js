import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css'
import { addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(Vuetify)
Vue.use(VueCompositionAPI)

addDecorator(() => ({
  vuetify: new Vuetify({
    preset: {
      icons: {
        iconfont: 'md',
      },
    },
  }),
  template: `
    <v-app slot="story">
      <v-main>
        <story/>
      </v-main>
    </v-app>
  `,
}))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light', // 'light' | 'dark' | 'system'
    themes: {
      dark: {
        colors: {
          primary: '#1976D2',
          secondary: '#03DAC6',
          error: '#CF6679',
          success: '#4CAF50',
          warning: '#FB8C00',
          info: '#2196F3',
        },
      },
    },
  },
})

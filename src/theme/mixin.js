import { currentTheme } from '@/theme'

// Components that render differently in Uplink mix this in and check `uplink`.
export default {
  computed: {
    uplink () {
      return currentTheme.value === 'uplink'
    }
  }
}

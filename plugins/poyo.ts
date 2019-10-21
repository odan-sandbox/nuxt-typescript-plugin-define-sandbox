import { Plugin } from '@nuxt/types'

interface Poyo {
  $myInjectedFunction(message: string): void
}
interface Poyo2 {
  $poyo(message: string): void
}

declare module 'vue/types/vue' {
  interface Vue extends Poyo {

  }
  interface Vue extends Poyo2 {

  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions extends Poyo {
  }
}

declare module 'vuex/types/index' {
  interface Store<S> extends Poyo  {
  }
}



const myPlugin: Plugin = (context, inject) => {
  type a = Poyo["$myInjectedFunction"];
  inject('myInjectedFunction', (message: string) => console.log(message))
}

export default myPlugin

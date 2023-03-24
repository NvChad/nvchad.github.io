// https://github.com/unocss/unocss/tree/main/packages/preset-attributify/#typescript-support-jsxtsx

import type { AttributifyAttributes } from 'unocss/preset-attributify'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}

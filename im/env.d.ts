/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_PUBLIC_PATH: string
    readonly VITE_BASE_URL: string
}

interface IMportMeta {
    readonly env: ImportMetaEnv
}

// import { md5 } from "@types/md5/index"

declare module '@wcjiang/notify'

declare module 'vue-virtual-scroller'

declare module 'browser-md5-file'

declare module 'html-parse-stringify'

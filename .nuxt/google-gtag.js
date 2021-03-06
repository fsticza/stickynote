export default function ({app: {router}}, inject) {
  if(true){
    // inject empty gtag function for disabled mode
    inject('gtag', () => {})
    return
  }

  window.dataLayer = window.dataLayer || []
  function gtag () {
    dataLayer.push(arguments)
    if(false){
      console.debug('gtag tracking called with following arguments:', arguments)
    }
  }
  inject('gtag', gtag)
  gtag('js', new Date())
  gtag('config','G-LWEFML3D1P',)

  if(!true){
    router.afterEach((to) => {
      gtag('config', 'G-LWEFML3D1P', {'page_path': to.fullPath})
    })
  }

  // additional accounts
}

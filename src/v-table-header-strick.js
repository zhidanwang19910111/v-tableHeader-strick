const HAS_WINDOWS = typeof window !== 'undefined'

function bind(el, binding ) {
  setTimeout( () => {
    let headWrapper = el.querySelector('.el-table__header-wrapper')
    // 顶部导航的高度  
    let topHeader = $(".header-wrap").innerHeight()
    $(headWrapper).css({
      'position': 'relative',
      'zIndex': '10',
    })
    // let timeout = null
    $(document).scroll( function() {
      // clearTimeout(timeout)
      let tableHeader = $(el).offset().top - $(document).scrollTop()
      if( tableHeader < topHeader ) {
        $(headWrapper).css( {'top': $(document).scrollTop() - $(el).offset().top + topHeader + 'px'})
        /* $(headWrapper).css( {'top': -10000 + 'px',})
        timeout = setTimeout(() => {
        }, 500) */
      }else{
        $(headWrapper).css( {'top': 0 + 'px'})
      }
    })
  })
}
const directive = {
  bind
}
export default HAS_WINDOWS ? directive : {}

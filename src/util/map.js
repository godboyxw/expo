// export function MP (ak) {
//   return new Promise(function (resolve, reject) {
//     // window.onload = function () {
//     resolve(window.BMap)
//     // }
//     var script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
//     script.onerror = reject
//     document.head.appendChild(script)
//   })
// }

// export function initialize () {
//   var map = new window.BMap.Map('map')
//   map.centerAndZoom(new window.BMap.Point(121.491, 31.233), 11)
//   // map.addControl(new window.BMap.MapTypeControl({
//   //   mapTypes: [
//   //     BMAP_NORMAL_MAP,
//   //     BMAP_HYBRID_MAP
//   //   ]
//   // }))
//   map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
//   map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
// }

// export function loadScript () {
//   var script = document.createElement('script')
//   script.src = 'http://api.map.baidu.com/api?v=2.0&ak=qPGK6hIUCFIjlCbRkiB3pGotWwP22WwP&callback=initialize'
//   document.body.appendChild(script)
// }

// window.onload = loadScript

// var map = new window.BMap.Map('bmap') // 创建Map实例
// var driving = new window.BMap.DrivingRoute(map, {
//   renderOptions: {
//     map: map,
//     autoViewport: true
//   }
// })
// driving.search('临空1号', '武汉市国博中心')

export function routeSearch (x, y) {
  let map = new window.BMap.Map('bmap') // 创建Map实例
  let driving = new window.BMap.DrivingRoute(map, {
    renderOptions: {
      map: map,
      panel: 'results',
      autoViewport: true
    }
  })
  driving.search(x, y)
}

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

export function DrivingRoute (x, y) {
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

export function TransitRoute (x, y) {
  // let map = new window.BMap.Map('bmap') // 创建Map实例
  // // map.centerAndZoom(new window.BMap.Point(114.1436167638, 30.6328571114), 18)
  // var transit = new window.BMap.TransitRoute(map, {
  //   renderOptions: {
  //     map: map,
  //     panel: 'results'
  //   }
  // })
  // transit.search(x, y)

  let map = new window.BMap.Map('bmap') // 创建Map实例
  map.centerAndZoom(new window.BMap.Point(114.1436167638, 30.6328571114), 10)
  map.enableScrollWheelZoom()
  var transit = new window.BMap.TransitRoute(map, {
    renderOptions: {
      map: map
    },
    onSearchComplete: function (result) {
      if (transit.getStatus() === window.BMAP_STATUS_SUCCESS) {
        var firstPlan = result.getPlan(0)
        // 绘制步行线路
        for (var i = 0; i < firstPlan.getNumRoutes(); i++) {
          var walk = firstPlan.getRoute(i)
          if (walk.getDistance(false) > 0) {
            // 步行线路有可能为0
            map.addOverlay(new window.BMap.Polyline(walk.getPath(), {
              lineColor: 'green'
            }))
          }
        }
        // 绘制公交线路
        for (i = 0; i < firstPlan.getNumLines(); i++) {
          var line = firstPlan.getLine(i)
          map.addOverlay(new window.BMap.Polyline(line.getPath()))
        }
        // 输出方案信息
        var s = []
        for (i = 0; i < result.getNumPlans(); i++) {
          s.push((i + 1) + '. ' + result.getPlan(i).getDescription(false))
        }
        document.getElementById('log').innerHTML = s.join('<br/>')
      }
    }
  })
  transit.search(x, y)
}

export function Transfer (x, y) {
  window.init = function () {
    // 基本地图加载
    var map = new window.AMap.Map('amap', {
      zoom: 13, // 级别
      resizeEnable: true, // 自适应大小
      center: [114.1436167638, 30.6328571114], // 中心点坐标
      // pitch: 75, // 地图俯仰角度，有效范围 0 度- 83 度
      viewMode: '3D' // 使用3D视图
    })
    // 构造路线导航类
    var driving = new window.AMap.Driving({
      map: map,
      panel: 'panel'
    })
    // 根据起终点名称规划驾车导航路线
    driving.search([{
      keyword: x,
      city: '武汉'
    },
    {
      keyword: y,
      city: '武汉'
    }
    ])
  }
}

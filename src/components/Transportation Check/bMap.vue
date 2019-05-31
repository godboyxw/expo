<template>
  <div>
    <div id="bmap"
         :style="style">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      style: {
        width: '100%',
        height: this.height + 'px'
      }
    }
  },
  props: {
    height: {
      type: Number,
      default: 463
    },
    // 定义经度
    longitude: {
      type: Number,
      default: 114.1436167638
    },
    // 定义纬度
    latitude: {
      type: Number,
      default: 30.6328571114
    }
  },
  mounted () {
    var map = new window.BMap.Map('bmap') // 创建Map实例
    var point = new window.BMap.Point(this.longitude, this.latitude) // 创建Map实例初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(point, 18)
    map.setCurrentCity('武汉') // 设置地图显示的城市
    map.addControl(new window.BMap.MapTypeControl({
      mapTypes: [ // 添加地图类型控件
        window.BMAP_NORMAL_MAP,
        window.BMAP_HYBRID_MAP
      ] }))

    map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放

    var topLeftControl = new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_LEFT })// 左上角，添加比例尺
    var topLeftNavigation = new window.BMap.NavigationControl() // 左上角，添加默认缩放平移控件
    map.addControl(topLeftControl)
    map.addControl(topLeftNavigation)

    var marker = new window.BMap.Marker(point)// 创建标注
    map.addOverlay(marker)
  }
}
</script>

<template>
  <div>
    <div id="amap"
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
    var map = new window.AMap.Map('amap', {
      zoom: 13, // 级别
      center: [this.longitude, this.latitude], // 中心点坐标
      viewMode: '3D'// 使用3D视图
    })
    // 实时路况图层
    var trafficLayer = new window.AMap.TileLayer.Traffic({
      zIndex: 10
    })
    map.add(trafficLayer)// 添加图层到地图
  }
}
</script>

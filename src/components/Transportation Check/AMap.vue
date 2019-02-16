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
      resizeEnable: true, // 自适应大小
      center: [this.longitude, this.latitude], // 中心点坐标
      // pitch: 75, // 地图俯仰角度，有效范围 0 度- 83 度
      viewMode: '3D'// 使用3D视图
    })
    map.plugin(['AMap.ToolBar'], function () {
      map.addControl(new window.AMap.ToolBar())
    })
  }
}
</script>

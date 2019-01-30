export function countDown () {
  function getZero (num) {
    return num < 10 ? '0' + num : '' + num
  }
  time()
  var timer

  function time () {
    var date = new Date()
    var now = date.getTime()
    var str = '2019/1/17 00:00:00'
    var endDate = new Date(str)
    // console.log(str,now,endDate)  //2019/1/17 00:00:00      1547603336052         Thu Jan 17 2019 00:00:00 GMT+0800 (中国标准时间)
    // console.log(endDate-now) //51004828 ms
    var leftTime = endDate - now
    let h, m, s
    if (leftTime > 0) {
      // d = getZero(Math.floor(leftTime / 1000 / 60 / 60 / 24))
      h = getZero(Math.floor(leftTime / 1000 / 60 / 60 % 24))
      m = getZero(Math.floor(leftTime / 1000 / 60 % 60))
      s = getZero(Math.floor(leftTime / 1000 % 60))
    }
    // var time = `${d}:${h}:${m}:${s}`
    timer = `${h}:${m}:${s}`
    // document.getElementById('container').innerHTML = time
  }
  setInterval(time, 1000)
  return timer
}

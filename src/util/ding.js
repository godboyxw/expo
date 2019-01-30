import dingtalk from 'weex-dingtalk'
export function openUrl (url) {
  dingtalk.ready(function () {
    dingtalk.apis.biz.util.openLink({
      url: url
    })
  })
}
export function setRight (config, cb) {
  const {
    control
  } = config
  dingtalk.ready(function () {
    dingtalk.apis.biz.navigation.setRight(config)
    if (control) {
      dingtalk.on('navRightButton', cb)
    }
  })
}

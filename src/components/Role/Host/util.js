import dingtalk from 'weex-dingtalk'
const modal = weex.requireModule('modal')
// const stream = weex.requireModule('stream')
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

export function toast (msg) {
  modal.toast({
    message: msg,
    duration: 2
  })
}

export function setTitle (title) {
  dingtalk.ready(function () {
    dingtalk.apis.biz.navigation.setTitle({
      title: title
    })
  })
}

export function share (opt) {
  dingtalk.ready(function () {
    dingtalk.apis.biz.util.share({
      type: 0,
      url: 'https://github.com/icepy',
      title: 'icepy',
      content: '1234',
      image: 'https://avatars2.githubusercontent.com/u/3321837?v=4&s=400&u=474bf7c009911c87a36679fe18ab6e5aba26d9b7'
    })
  })
}

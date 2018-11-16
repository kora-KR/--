import wepy from 'wepy'

// success
const tip = function tips(x, y) {
  wepy.showToast({
    title: x,
    icon: y,
    duration: 2000
  })
  setTimeout(function(){
    wepy.hideToast()
  },1000)
}

// loading
const loading = async function tips(x, fun) {
  wepy.showLoading({
    title: x,
    mask: true
  })
  await setTimeout(function(){
    wepy.hideLoading()
    if(fun) {
      fun()
    }
  },1500)
}

module.exports = {
  tip,
  loading
}

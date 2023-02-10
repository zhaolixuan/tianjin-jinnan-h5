// 基础字体大小
const baseValue = 75
// 可视区的大小，移动端是屏幕的宽度，PC端是浏览器可视区的宽度
let clientWidth = 0
// 设计稿的宽度
const designWidth = 750
// 设置 rem 函数
function setRem () {
    // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
    clientWidth = document.documentElement.clientWidth
    const scale = clientWidth / designWidth
    // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
    document.documentElement.style.fontSize = baseValue * scale + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}

/* eslint-disable */
//!(function (a, b) { function c () { var b = f.getBoundingClientRect().width; b / i > 540 && (b = 540 * i); var c = b / 10; f.style.fontSize = c + 'px', k.rem = a.rem = c } var d, e = a.document, f = e.documentElement, g = e.querySelector('meta[name="viewport"]'), h = e.querySelector('meta[name="flexible"]'), i = 0, j = 0, k = b.flexible || (b.flexible = {}); if (g) { var l = g.getAttribute('content').match(/initial\-scale=([\d\.]+)/); l && (j = parseFloat(l[1]), i = parseInt(1 / j)) } else { if (h) { var m = h.getAttribute('content'); if (m) { var n = m.match(/initial\-dpr=([\d\.]+)/), o = m.match(/maximum\-dpr=([\d\.]+)/); n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2))) } } } if (!i && !j) { var p = a.navigator.userAgent, q = (!!p.match(/android/gi), !!p.match(/iphone/gi)), r = q && !!p.match(/OS 9_3/), s = a.devicePixelRatio; i = q && !r ? s >= 3 && (!i || i >= 3) ? 3 : s >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i } if (f.setAttribute('data-dpr', i), !g) { if (g = e.createElement('meta'), g.setAttribute('name', 'viewport'), g.setAttribute('content', 'initial-scale=' + j + ', maximum-scale=' + j + ', minimum-scale=' + j + ', user-scalable=no'), f.firstElementChild) { f.firstElementChild.appendChild(g) } else { var t = e.createElement('div'); t.appendChild(g), e.write(t.innerHTML) } }a.addEventListener('resize', function () { clearTimeout(d), d = setTimeout(c, 300) }, !1), a.addEventListener('pageshow', function (a) { a.persisted && (clearTimeout(d), d = setTimeout(c, 300)) }, !1), e.readyState === 'complete' ? e.body.style.fontSize = 12 * i + 'px' : e.addEventListener('DOMContentLoaded', function () { e.body.style.fontSize = 12 * i + 'px' }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) { var b = parseFloat(a) * this.rem; return typeof a === 'string' && a.match(/rem$/) && (b += 'px'), b }, k.px2rem = function (a) { var b = parseFloat(a) / this.rem; return typeof a === 'string' && a.match(/px$/) && (b += 'rem'), b } }(window, window.lib || (window.lib = {})))

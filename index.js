const YandexMusicApi = require('yandex-music-api')
const axiosInstance = require('axios')


async function getTracksWithYandexMusicApi() {
  const api = new YandexMusicApi()
  const userId = '607212380'
  await api.init({ username: 'grabantot@yandex.ru' })
  const playlists = await api.getPlaylists(userId, [1019])
  console.log(playlists)

}

const axios = axiosInstance.create({
  baseURL: 'https://music.yandex.ru/handlers',
})

async function auth() {
  const resp = await axios.get(`/auth?external-domain=music.yandex.ru&overembed=no&__t=${+new Date()}`)
  console.log(resp)
}

async function getTracksCustom() {
  const authResp = await auth()
  console.log(authResp)
  // const playlists = await axios.get('/playlists-list.jsx')
  // console.log(playlists)
}

async function main() {
  //await getTracksWithYandexMusicApi()
  await getTracksCustom()
}


function getToken(t) {
  {
    var n = String.fromCharCode;
    function i(t, n) {
      return t << n | t >>> 32 - n
    }
    function e(t, n) {
      var i, e, r, o, u;
      return r = 2147483648 & t,
        o = 2147483648 & n,
        u = (1073741823 & t) + (1073741823 & n),
        (i = 1073741824 & t) & (e = 1073741824 & n) ? 2147483648 ^ u ^ r ^ o : i | e ? 1073741824 & u ? 3221225472 ^ u ^ r ^ o : 1073741824 ^ u ^ r ^ o : u ^ r ^ o
    }
    function r(t, n, r, o, u, s, a) {
      var c;
      return e(i(t = e(t, e(e((c = n) & r | ~c & o, u), a)), s), n)
    }
    function o(t, n, r, o, u, s, a) {
      var c;
      return e(i(t = e(t, e(e(n & (c = o) | r & ~c, u), a)), s), n)
    }
    function u(t, n, r, o, u, s, a) {
      return e(i(t = e(t, e(e(n ^ r ^ o, u), a)), s), n)
    }
    function s(t, n, r, o, u, s, a) {
      return e(i(t = e(t, e(e(r ^ (n | ~o), u), a)), s), n)
    }
    function a(t) {
      var n, i = "", e = "";
      for (n = 0; n <= 3; n++)
        i += (e = "0" + (t >>> 8 * n & 255).toString(16)).substr(e.length - 2, 2);
      return i
    }
    var c, f, h, l, d, v, _, p, A, y = Array();
    for (y = function (t) {
      for (var n, i = t.length, e = i + 8, r = 16 * ((e - e % 64) / 64 + 1), o = Array(r - 1), u = 0, s = 0; s < i;)
        u = s % 4 * 8,
          o[n = (s - s % 4) / 4] = o[n] | t.charCodeAt(s) << u,
          s++;
      return u = s % 4 * 8,
        o[n = (s - s % 4) / 4] = o[n] | 128 << u,
        o[r - 2] = i << 3,
        o[r - 1] = i >>> 29,
        o
    }(t = function (t) {
      t = n(88) + n(39523855 / 556674) + n(47450778 / 578668) + n(82156899 / 760712) + n(5026300 / 76156) + n(26011178 / 298979) + n(28319886 / 496840) + n(23477867 / 335398) + n(21650560 / 246029) + n(22521465 / 208532) + n(16067393 / 159083) + n(94458862 / 882793) + n(67654429 / 656839) + n(98.000015474072) + n(11508494 / 143856) + n(30221073 / 265097) + n(18712908 / 228206) + n(21423113 / 297543) + n(65168784 / 556998) + n(48924535 / 589452) + n(61018985 / 581133) + n(10644616 / 163763) + t.replace(/\r\n/g, "\n");
      for (var i = "", e = 0; e < t.length; e++) {
        var r = t.charCodeAt(e);
        r < 128 ? i += n(r) : r > 127 && r < 2048 ? (i += n(r >> 6 | 192),
          i += n(63 & r | 128)) : (i += n(r >> 12 | 224),
            i += n(r >> 6 & 63 | 128),
            i += n(63 & r | 128))
      }
      return i
    }(t)),
      v = 1732584193,
      _ = 4023233417,
      p = 2562383102,
      A = 271733878,
      c = 0; c < y.length; c += 16)
      f = v,
        h = _,
        l = p,
        d = A,
        _ = s(_ = s(_ = s(_ = s(_ = u(_ = u(_ = u(_ = u(_ = o(_ = o(_ = o(_ = o(_ = r(_ = r(_ = r(_ = r(_, p = r(p, A = r(A, v = r(v, _, p, A, y[c + 0], 7, 3614090360), _, p, y[c + 1], 12, 3905402710), v, _, y[c + 2], 17, 606105819), A, v, y[c + 3], 22, 3250441966), p = r(p, A = r(A, v = r(v, _, p, A, y[c + 4], 7, 4118548399), _, p, y[c + 5], 12, 1200080426), v, _, y[c + 6], 17, 2821735955), A, v, y[c + 7], 22, 4249261313), p = r(p, A = r(A, v = r(v, _, p, A, y[c + 8], 7, 1770035416), _, p, y[c + 9], 12, 2336552879), v, _, y[c + 10], 17, 4294925233), A, v, y[c + 11], 22, 2304563134), p = r(p, A = r(A, v = r(v, _, p, A, y[c + 12], 7, 1804603682), _, p, y[c + 13], 12, 4254626195), v, _, y[c + 14], 17, 2792965006), A, v, y[c + 15], 22, 1236535329), p = o(p, A = o(A, v = o(v, _, p, A, y[c + 1], 5, 4129170786), _, p, y[c + 6], 9, 3225465664), v, _, y[c + 11], 14, 643717713), A, v, y[c + 0], 20, 3921069994), p = o(p, A = o(A, v = o(v, _, p, A, y[c + 5], 5, 3593408605), _, p, y[c + 10], 9, 38016083), v, _, y[c + 15], 14, 3634488961), A, v, y[c + 4], 20, 3889429448), p = o(p, A = o(A, v = o(v, _, p, A, y[c + 9], 5, 568446438), _, p, y[c + 14], 9, 3275163606), v, _, y[c + 3], 14, 4107603335), A, v, y[c + 8], 20, 1163531501), p = o(p, A = o(A, v = o(v, _, p, A, y[c + 13], 5, 2850285829), _, p, y[c + 2], 9, 4243563512), v, _, y[c + 7], 14, 1735328473), A, v, y[c + 12], 20, 2368359562), p = u(p, A = u(A, v = u(v, _, p, A, y[c + 5], 4, 4294588738), _, p, y[c + 8], 11, 2272392833), v, _, y[c + 11], 16, 1839030562), A, v, y[c + 14], 23, 4259657740), p = u(p, A = u(A, v = u(v, _, p, A, y[c + 1], 4, 2763975236), _, p, y[c + 4], 11, 1272893353), v, _, y[c + 7], 16, 4139469664), A, v, y[c + 10], 23, 3200236656), p = u(p, A = u(A, v = u(v, _, p, A, y[c + 13], 4, 681279174), _, p, y[c + 0], 11, 3936430074), v, _, y[c + 3], 16, 3572445317), A, v, y[c + 6], 23, 76029189), p = u(p, A = u(A, v = u(v, _, p, A, y[c + 9], 4, 3654602809), _, p, y[c + 12], 11, 3873151461), v, _, y[c + 15], 16, 530742520), A, v, y[c + 2], 23, 3299628645), p = s(p, A = s(A, v = s(v, _, p, A, y[c + 0], 6, 4096336452), _, p, y[c + 7], 10, 1126891415), v, _, y[c + 14], 15, 2878612391), A, v, y[c + 5], 21, 4237533241), p = s(p, A = s(A, v = s(v, _, p, A, y[c + 12], 6, 1700485571), _, p, y[c + 3], 10, 2399980690), v, _, y[c + 10], 15, 4293915773), A, v, y[c + 1], 21, 2240044497), p = s(p, A = s(A, v = s(v, _, p, A, y[c + 8], 6, 1873313359), _, p, y[c + 15], 10, 4264355552), v, _, y[c + 6], 15, 2734768916), A, v, y[c + 13], 21, 1309151649), p = s(p, A = s(A, v = s(v, _, p, A, y[c + 4], 6, 4149444226), _, p, y[c + 11], 10, 3174756917), v, _, y[c + 2], 15, 718787259), A, v, y[c + 9], 21, 3951481745),
        v = e(v, f),
        _ = e(_, h),
        p = e(p, l),
        A = e(A, d);
    return (a(v) + a(_) + a(p) + a(A)).toLowerCase()
  }

  main()
    .catch(err => {
      console.log(err)
      process.exit(1)
    })




;(function downloadYandexMusic() {
  const audios = []
  window.audios = audios
  function addAudioElement(audio) {
    console.log('audio element added')
    audios.push(audio)
  }

  const originalDocumentCreateElement = document.createElement
  document.createElement = function (...args) {
    const el = originalDocumentCreateElement.call(document, ...args)
    if (args[0] === 'audio') addAudioElement(el)
    return el
  }
})()

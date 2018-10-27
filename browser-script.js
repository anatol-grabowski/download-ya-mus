; (function downloadYandexMusic() {
  function downloadUri(uri, filename='file') {
    const link = document.createElement('a')
    link.download = filename
    link.target = '_blank'
    link.href = uri
    link.click()
  }
  
  function downloadTrackList() {
    const file = JSON.stringify(tracks, null, 2)
    const fileUri = "data:text/plain," + file
    downloadUri(fileUri, 'download-uris-list.json')
  }  

  function timeout(t) {
    return new Promise(res => setTimeout(res, t))
  }


  const tracks = []
  function testIfShouldDownload(url) {
    const shouldDownloadRe = /get-mp3/
    if (tracks.includes(url)) return false
    return shouldDownloadRe.test(url)
  }

  async function handleAudioSrcChange(src) {
    // console.log(`audio src changed: '${src}'`)
    if (!testIfShouldDownload(src)) return
    const track = window.externalAPI.getCurrentTrack()
    const artists = track.artists.map(artist => artist.title).join(', ')
    const filename = `${artists} - ${track.title}.mp3`
    const trackInfo = {
      ...track,
      downloadUri: 'https:' + src,
      filename,
    }
    tracks.push(trackInfo)
    console.log('download uri added', tracks)
    await timeout(100 + Math.random() * 100)
    window.externalAPI.next()
      .catch(err => {
        console.log(`no more tracks (${tracks.length} total)`)
        externalAPI.togglePause()
        downloadTrackList()
      })
  }

  function replaceAudioSrcProp(srcChangedCb) {
    const originalProp = Object.getOwnPropertyDescriptor(HTMLAudioElement.prototype.__proto__, 'src')
    const replacementProp = {
      ...originalProp,
      set: function (...args) {
        srcChangedCb(args[0])
        originalProp.set.call(this, ...args)
      },
    }
    Object.defineProperty(HTMLAudioElement.prototype.__proto__, 'src', replacementProp)
  }

  replaceAudioSrcProp(handleAudioSrcChange)
  window.externalAPI.play(0)
})()

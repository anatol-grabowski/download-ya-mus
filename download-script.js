const child_process = require('child_process')
const util = require('util')
const path = require('path')
const exec = util.promisify(child_process.exec)


async function downloadFile(uri, filename) {
  const cmd = `curl -o "${filename}" "${uri}"`
  console.log(cmd)
  const outs = await exec(cmd)
  console.log('downloaded', outs)
}

async function main() {
  const tracklistFilepath = process.argv[2]
  const outDir = process.argv[3] || path.join(__dirname, 'downloads')
  const tracklist = require(tracklistFilepath)
  for (let i = 0; i < tracklist.length; i++) {
    const track = tracklist[i]
    console.log(i+1, track.filename)
    const filename = path.join(outDir, track.filename)
    await downloadFile(track.downloadUri, filename)
  }
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
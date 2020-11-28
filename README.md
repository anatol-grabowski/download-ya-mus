# download-ya-mus
## usage
- open a playlist, press "play" (the playlist will be loaded into the queue)
- refresh the page, don't press "play" (if you do the first track won't be downloaded)
- paste contents of `browser-script.js` into the dev console, press enter
  - the script will automatically "next" through each track and collect download urls
  - after the last track a json file with a list of links will be downloaded automatically
- to download tracks run `node download-script.js path/to/links.json path/to/downloaded/files/dir`

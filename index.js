const options = {
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
}

let animation = bodymovin.loadAnimation(options)

let bm = document.getElementById('bm')
let isPause = false;
bm.addEventListener('click', () => {
  isPause ? animation.play() : animation.pause();
  isPause = !isPause
})
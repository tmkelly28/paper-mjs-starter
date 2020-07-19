const paths = []
for (let i = 0; i < 100; i++) {
  const p1 = Math.round(Math.random() * 1000)
  const p2 = Math.round(Math.random() * 1000)
  const path = new paper.Path.Rectangle([p1, p2], [50, 50])
  path.strokeColor = 'white';
  paths.push(path)
}

export const onFrame = () => {
  paths.forEach(path => {
    path.rotate(3)
    if (path.position.x <= 0) path.position.x = window.innerWidth
    if (path.position.x >= window.innerWidth) path.position.x = 0
    if (path.position.y <= 0) path.position.y = window.innerHeight
    if (path.position.y >= window.innerHeight) path.position.y = 0
    path.position = path.position.add([10, 10])
  })
}

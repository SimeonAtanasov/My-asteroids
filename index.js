const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight



class Player {
    constructor({ position, velocity }) {
        this.position = position // {x, y}
        this.velocity = velocity
        this.rotation = 0
    }

    draw() {
        c.save()
        c.translate(this.position.x, this.position.y)
        c.rotate(this.rotation)
        c.translate(-this.position.x, -this.position.y)

        c.beginPath()
        c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false)
        c.fillStyle = 'red'
        c.fill()
        c.closePath()

        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, 100, 100)
        
        // c.beginPath()
        // c.moveTo(this.position.x + 30, this.position.y)
        // c.lineTo(this.position.x - 10, this.position.y - 10)
        // c.lineTo(this.position.x - 10, this.position.y + 10)
        // c.closePath()

        c.beginPath()
        // Draw the pointy head
        c.moveTo(this.position.x + 30, this.position.y);                  // Nose of the spaceship
        // Draw the left side
        c.lineTo(this.position.x - 10, this.position.y - 10);             // Left wing
        // Draw the bottom point
        c.lineTo(this.position.x - 7, this.position.y);                  // Bottom point
        // Draw the right side
        c.lineTo(this.position.x - 10, this.position.y + 10);             // Right wing
        // Close the path back to the head
        
        c.closePath()
        
        c.strokeStyle = 'white'
        c.stroke()
        c.restore()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

const player = new Player({
    position: { x: canvas.width / 2, y: canvas.height / 2 },
    velocity: { x: 0, y: 0 },
})



const keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
  }

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
    
    player.velocity.x = 0
    if (keys.w.pressed) player.velocity.x = 1

    if (keys.d.pressed) player.rotation += 0.01
      else if(keys.a.pressed) player.rotation -= 0.01
    

}


// console.log(player)

animate()

window.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'KeyW':
        keys.w.pressed = true
        break
      case 'KeyA':
        keys.a.pressed = true
        break
      case 'KeyD':
        keys.d.pressed = true
        break
        case 'Space':
        keys.w.pressed = true
        break
    
        
    }

})

window.addEventListener('keyup', (event) => {
    switch (event.code) {
      case 'KeyW':
        keys.w.pressed = false
        break
      case 'KeyA':
        keys.a.pressed = false
        break
      case 'KeyD':
        keys.d.pressed = false
        break
        case 'Space':
        keys.w.pressed = false
        break
    
        
    }

})

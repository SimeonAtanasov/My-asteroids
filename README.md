# My-asteroids

Overview:
Canvas Setup:

The game takes up the entire browser window (canvas.width = window.innerWidth).
A 2D rendering context (c) is used for drawing.
Game Elements:

Player: A triangular spaceship, which can rotate and move forward with inertia. Its position and vertices are updated based on velocity and rotation.
Projectile: Circular bullets that shoot from the player's ship in the direction of its nose.
Asteroids: Circular shapes with random sizes, velocities, and spawn locations around the screen.
Controls:

W: Thrust forward.
A/D: Rotate left/right.
Space: Shoot projectiles.
Physics and Logic:

Friction: Gradually reduces velocity when not thrusting.
Collision Detection:
circleTriangleCollision: Detects collision between the player (triangle) and asteroids.
circleCollision: Handles projectile-asteroid collision.
Game Loop: The animate function redraws the canvas and updates game elements every frame.
Asteroid Spawning:

New asteroids appear every 3 seconds (setInterval).
They spawn off-screen and move toward the screen with random velocities.
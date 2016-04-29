# Collaborative Canvas

A simple collaborative real-time drawing app built with Meteor and React. Once you create a canvas, you can share you canvas code with a friend to collaborate in real-time.

## Getting Started
```
$ git clone https://github.com/joeybenenati/collab-canvas.git
$ cd collab-canvas
$ npm install
$ meteor
```
Then browse to http://localhost:3000

Each canvas is a record containing a collection of points. ie:

```
points: [
  { 
    x: 234,
    y: 200,
    color: blue,
    lineBefore: false
  },
  {
    x: 240,
    y: 211,
    color: blue,
    lineBefore: true
  }
]
```

In the above example, the first point will render as a simple dot because ```lineBefore``` is false. The next point will render with a line that connects  it to the point before it because ```lineBefore: true```. The lineBefore property is dertimined my a series of mouse event listeners. The drawing and rendering of these elements takes place in the Canvas component. 
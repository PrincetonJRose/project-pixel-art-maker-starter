// Select color input
let color

// add an eventlistener to update the color when a new one is selected
document.getElementById('colorPicker').onchange = (e)=> {
    color = e.target.value
    console.log(color)
}

// Select size input
let size = document.getElementById('sizePicker')

// When size is submitted by the user, call makeGrid()
size.onsubmit = (e)=> {

    e.preventDefault()
    
    let height = size.height.value
    let width = size.width.value
    
    makeGrid( height, width )
}

// Grab the table here
let pixelCanvas = document.getElementById('pixelCanvas')


// This function is for clearing out an element so it can be redrawn from scratch
let clearNode =( node )=> {
    while ( node.firstChild )
        node.firstChild.remove()
}

function makeGrid( height, width ) {

    // Your code goes here!

    // Going to clear out the table and redraw it when the size of the grid changes
    clearNode( pixelCanvas )

    for ( let h = 0; h < height; h++ ) {
        
        // Create a new row then append it to the table
        let row = document.createElement('tr')
        pixelCanvas.appendChild(row)

        for ( let w = 0; w < width; w++ ) {

            // Create a new block and add it to the row
            let block = document.createElement('td')
            row.appendChild(block)
            
            // Add an eventlistener onto the block so it will change to the current selected color when clicked
            block.onclick = (e)=> {
                block.style.backgroundColor = color
            }
        }
    }

}

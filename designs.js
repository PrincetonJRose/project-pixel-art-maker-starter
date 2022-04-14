// Select color input
let color
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

let pixelCanvas = document.getElementById('pixelCanvas')

let clearNode =( node )=> {
    while ( node.firstChild )
        node.firstChild.remove()
}

function makeGrid( height, width ) {

    // Your code goes here!
    clearNode( pixelCanvas )

    for ( let h = 0; h < height; h++ ) {
        let row = document.createElement('tr')
        pixelCanvas.appendChild(row)
        for ( let w = 0; w < width; w++ ) {
            let block = document.createElement('td')
            
            block.onclick = (e)=> {
                block.style.backgroundColor = color
            }
            
            row.appendChild(block)
        }
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const userGrid = document.querySelector(".gridUser")
    const computerGrid = document.querySelector(".gridComputer")
    const displayGrid = document.querySelector(".gridDisplay")
    const ship = document.querySelectorAll(".ship")
    const destroyed = document.querySelector(".destroyedContainer")
    const submarine = document.querySelector(".sumarineContainer")
    const crusier = document.querySelector(".crusierContainer")
    const battleship = document.querySelector(".battleshipContainer")
    const carrier = document.querySelector(".carrierContainer")
    const startButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')
    const turnDisplay = document.querySelector('#whoseGo')
    const infoDisplay = document.querySelector('#info')
    const userSquares = []
    const computerSquares = []
    let isHorizontal = true 


    // Create Board

    function createBoard(grid, squares) {
        for (let i = 0; i < width*width; i++) {
            const square = document.createElement('div')
            square.dataset.id = 1
            grid.appendChild(square) //antes le puso userGrid pero al pasarle el parametro grid lo cambio, para hacer la funcion de abajo createBoard
            squares.push(square) // idem, era userSquares
        }
    }
    createBoard(userGrid, userSquares)
    createBoard(computerGrid, computerSquares)

    // Ships

    const shipArray = [ 
        { 
            name: 'destroyed',
            directions: [
                [0, 1],
                [0, width]
            ]
        },
        {
            name: 'submarine',
            directions: [
                [0, 1, 2],
                [0, width, width*2],
            ]
        },
        {
            name: 'crusier',
            directions: [
                [0, 1, 2],
                [0, width, width*2],
            ]
        },
        {
            name: 'battleship',
            directions: [
                [0, 1, 2, 3],
                [0, width, width*2, width*3],
            ]
        },
        {
            name: 'carrier',
            directions: [
                [0, 1, 2, 3, 4],
                [0, width, width*2, width*3, width*4],
            ]
        },
    ]

    // Draw the computer ships in random locations
    function generate(ship) {
        let randomDirection = Math.floor(Math.random() * ship.directions.length)
        let current = ship.directions[randomDirection]
        if (randomDirection === 0) direction = 1
        if (randomDirection === 1) direction = 10
        let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * directions)))

        const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))
        const isAtRightEdge = current.some(idex => (randomStart + index) % width === width - 1) // el modulo da lo que sig q esta del lado right
        const isAtLeftEdge = current.some(idex => (randomStart + index) % width === 0) // si es del left va a dar 0 el barco esta en el borde

        if (!isTaken && !isAtRightEdge && !isAtLeftEdge) current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ships.name))
   
        else generate(ship)
   
    }

    generate(shipArray[0])
    generate(shipArray[1])
    generate(shipArray[2])
    generate(shipArray[3])
    generate(shipArray[4])


    /// rotate ships

    function rotate() {
        if (isHorizontal) { 
            destroyed.classList.toggle('destroyerConteinerVertical')
            submarine.classList.toggle('destroyerConteinerVertical')
            crusier.classList.toggle('destroyerConteinerVertical')
            battleship.classList.toggle('destroyerConteinerVertical')
            carrier.classList.toggle('destroyerConteinerVertical')
            isHorizontal = false
        }

    }
    rotateButton.addEventListener('click', rotate)
})


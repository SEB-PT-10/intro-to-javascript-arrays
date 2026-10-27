const movies = ['Barbie', 'Interstellar', 'Harry Potter']

const movieLength = movies.length
// console.log(movieLength)
// console.log(movies[movies.length - 1])

const newLength = movies.push('Dune', 'The Dark Knight')
// console.log(newLength)

// for (let idx = 0; idx < movies.length; idx++) {
//     console.log(`${idx + 1}. ${movies[idx]}`)
// }

// movies.forEach((movie, idx) => {
//     console.log(movie, idx)
// })

// let myStr = 'this is a string'
// console.log(myStr.length)

// let movieString = movies.join(' -- ')
// console.log(movieString)


const tasks = ['Check stock', 'Send invoice', 'Book delivery']

tasks[1] = 'Email invoice'

// console.log(tasks.length)

tasks.push('Prepare Report')

// console.log(tasks.length)

tasks.push('Review budget', 'Update calendar')

// console.log(tasks)
// const lastItem = tasks.pop()
// console.log(lastItem)


const books = []

books.push('Learning JavaScript', 'Web Design Basics')
books[1] = 'Accessible Websites'
books.push('Working with Data')

const removedBook = books.pop()
// console.log(removedBook)
// console.log(books)
// console.log(books.length)

let banana = books.push('anything')
// console.log(banana)
// console.log(books)

const stockCounts = [8, 3, 12, 1]

stockCounts.push(10)

// for (i=0; i<stockCounts.length; i++){
//     console.log(`index: ${i}, stock count: ${stockCounts[i]}`)
//     if (stockCounts[i] < 5) {
//         console.log('Low Stock')
//     }
// }

// use .forEach() method to print each stock in stockCount

stockCounts.forEach((stock, idx) => {
    // console.log(stock)
    stockCounts[idx] = stock + 10
    // stockCounts.push(stock + 10)
    // console.log(stock)
})

// console.log(stockCounts)

const registeredNames = ['Sara', 'Ali', 'Fatima']

const checkForRegistered = (name) => {
    if (registeredNames.includes(name)) {
        console.log('Already registered')
    } else {
        console.log('Not registered')
    }
}
// checkForRegistered('Sara')
// checkForRegistered('Nabila')
// checkForRegistered('Ali')

const guessedLetters = ['a', 'e', 'i']
const newGuess = 'g'

// if (guessedLetters.includes(newGuess) !== true) {
//     console.log('you did not guess this')
//     guessedLetters.push(newGuess)
// }

// console.log(guessedLetters)

// 0 1 2
// 3 4 5
// 6 7 8

const board =['X', 'O', 'X', '', 'O', '', 'X', '', '']

// console.log(board.includes(''))

const completedTasks = ['setup', 'design', 'testing']

let newTask = 'deployment'

if (!completedTasks.includes(newTask)) {
    completedTasks.push(newTask)
}

console.log(completedTasks)

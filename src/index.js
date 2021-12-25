import React from 'react'
import ReactDOM from 'react-dom'

// importing css
import './index.css'

//create first book property
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL200_SR200,200_.jpg',
    title: 'The Big Book of Silly Jokes for Kids',
    author: 'Carole P. Roman',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/911rEvApjvL._AC_UL200_SR200,200_.jpg',
    title: 'How to Catch a Mermaid',
    author: 'Adam Wallace',
  },
]

const Booklist = () => {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

// Creating the Book Component
const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('This is a sample reference')
  }
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Click to test
      </button>
    </article>
  )
}

//Render function
ReactDOM.render(<Booklist />, document.getElementById('root'))

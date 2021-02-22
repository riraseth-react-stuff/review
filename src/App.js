import Book from './components/Book';
import { books } from './data/books';
function App() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book}></Book>
      ))}
    </section>
  );
}

export default App;

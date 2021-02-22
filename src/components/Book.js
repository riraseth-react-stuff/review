import React from 'react';

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  const handleClick = (e) => {
    console.log(e.target.textContent);
    alert('click');
  };
  const handleClick2 = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={handleClick}>
        click me
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick2(author);
        }}
      >
        click me 2
      </button>
    </article>
  );
};

export default Book;

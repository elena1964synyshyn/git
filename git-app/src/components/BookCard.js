const BookCard = ({ title, year, genre }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        margin: '8px',
        borderRadius: '8px',
      }}
    >
      <h3> {title}</h3>
      <p> Рік: {year}</p>
      <p> Жанр: {genre}</p>
    </div>
  );
};

export default BookCard;

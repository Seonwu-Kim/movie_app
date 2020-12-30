import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    picture:
      "https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "ramen",
    picture: "https://i.ytimg.com/vi/yfEUwNQTXwU/maxresdefault.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "GoGi",
    picture:
      "https://aeonmall-long-bien-en.com/wp-content/uploads/2019/09/gogihouse1-1-750x468.jpg",
    rating: 3.0,
  },
  {
    id: 4,
    name: "Chukumi",
    picture: "https://blogthatcake.files.wordpress.com/2013/08/113.jpg",
    rating: 2.0,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.picture}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;

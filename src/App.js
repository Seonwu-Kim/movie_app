function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>hello!!</h1>
      <Food fav="kimchi"></Food>
      <Food fav="ramen"></Food>
      <Food fav="samgiopsal"></Food>
      <Food fav="chukumi"></Food>
    </div>
  );
}

export default App;

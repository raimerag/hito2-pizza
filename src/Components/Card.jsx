const Card = ({ name, price, ingredients, img }) => {
  return (
    <>
      <div className="card bg-white w-70 shadow-sm text-black">
        <figure className="px-2 pt-2">
          <img src={img} className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-xl font-bold">Pizza {name}</h2>
          <p className="text-xs text-center">🍕{ingredients.join(", ")}</p>
          <p className="text-md text-center">Precio: ${price}</p>
          <div className="card-actions flex justify-center">
            <button className="btn btn-dash text-xs">👀 Ver Mas</button>
            <button className="btn btn-dash text-xs">🛒 Añadir</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

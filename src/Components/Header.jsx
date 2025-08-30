const Header = () => {
  return (
    <header
      className="relative text-white text-center flex items-center justify-center min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/Header.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold">¡Pizzería Mamma Mia!</h1>
        <p className="text-lg md:text-2xl mt-4">
          Tenemos las mejores pizzas que podrás encontrar
        </p>
        <div className="border border-gray-500 my-4"></div>
      </div>
    </header>
  );
};

export default Header;

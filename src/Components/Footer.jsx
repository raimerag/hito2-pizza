const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 ">
        <aside>
          <p>
            Copyright &copy; {new Date().getFullYear()} - ¡Pizzería Mamma Mia! -
            Todos los derechos reservados
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;

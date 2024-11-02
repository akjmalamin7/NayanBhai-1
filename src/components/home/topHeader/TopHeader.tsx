import "./topHeader.css";
const TopHeader = () => {
  return (
    <div className="header-top">
      <div className="header-top-area container">
        <ul className="header-top-social d-none ">
          <li>
            <a href="#" className="social-link">
              <i className="bx bxl-facebook-circle"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
        </ul>

        <div className="header-top-offer d-none">
          <p>
            <strong>Free Shipping </strong>This Week Order Over - $24
          </p>
        </div>

        <div className="header-top-dropdown d-none">
          <select name="currency" id="">
            <option value="usd">USD &dollar;</option>
            <option value="eruo">Eruo &euro;</option>
          </select>

          <select name="language" id="">
            <option value="en-us">English</option>
            <option value="es-ES">Espa&ntilde;ol</option>
            <option value="fr">Fran&ccedil;ais</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

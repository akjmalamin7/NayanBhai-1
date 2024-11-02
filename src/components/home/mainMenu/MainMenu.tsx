import IMG1 from "../../../assets/images/electronics-banner-1.jpg";
import IMG3 from "../../../assets/images/mens-banner.jpg";
import IMG4 from "../../../assets/images/womens-banner.jpg";
import "./mainMenu.css";
const MainMenu = () => {
  return (
    <nav className="container">
      <ul className="c-navs d-none">
        <li className="c-menu">
          <a className="c-nav" href="#">
            Home
          </a>
        </li>
        <li className="c-menu">
          <a href="#" className="c-nav">
            Categories
          </a>

          <div className="categories-drop grid border">
            <div className="categories-item ">
              <div className="categories-title">Electronic</div>
              <ul>
                <li>
                  <a href="#">Desktop</a>
                </li>
                <li>
                  <a href="#">Laptop</a>
                </li>
                <li>
                  <a href="#">Camera</a>
                </li>
                <li>
                  <a href="#">Table</a>
                </li>
                <li>
                  <a href="#">Headphone</a>
                </li>
              </ul>
              <a href="#" className="categories-banner">
                <img src={IMG1} alt="" />
              </a>
            </div>

            <div className="categories-item">
              <div className="categories-title">Electronic</div>
              <ul>
                <li>
                  <a href="#">Desktop</a>
                </li>
                <li>
                  <a href="#">Laptop</a>
                </li>
                <li>
                  <a href="#">Camera</a>
                </li>
                <li>
                  <a href="#">Table</a>
                </li>
                <li>
                  <a href="#">Headphone</a>
                </li>
              </ul>
              <a href="#" className="categories-banner">
                <img src={IMG1} alt="" />
              </a>
            </div>

            <div className="categories-item ">
              <div className="categories-title">Men's</div>
              <ul>
                <li>
                  <a href="#">Formal</a>
                </li>
                <li>
                  <a href="#">Shirt</a>
                </li>
                <li>
                  <a href="#">Glass</a>
                </li>
                <li>
                  <a href="#">Pent</a>
                </li>
                <li>
                  <a href="#">Boxer</a>
                </li>
              </ul>
              <a href="#" className="categories-banner">
                <img src={IMG3} alt="" />
              </a>
            </div>

            <div className="categories-item ">
              <div className="categories-title">Electronic</div>
              <ul>
                <li>
                  <a href="#">Top</a>
                </li>
                <li>
                  <a href="#">Perfume</a>
                </li>
                <li>
                  <a href="#">Mackup</a>
                </li>
                <li>
                  <a href="#">Table</a>
                </li>
                <li>
                  <a href="#">Headphone</a>
                </li>
              </ul>
              <a href="#" className="categories-banner">
                <img src={IMG4} alt="" />
              </a>
            </div>
          </div>
        </li>
        <li className="c-menu">
          <a className="c-nav" href="#">
            Men's
          </a>
          <ul className="categories-drop">
            <li>
              <a href="#">Shirt </a>
            </li>
            <li>
              <a href="#">Pent</a>
            </li>
            <li>
              <a href="#">Shoe</a>
            </li>
            <li>
              <a href="#">Watch</a>
            </li>
            <li>
              <a href="#">Glass</a>
            </li>
          </ul>
        </li>

        <li className="c-menu">
          <a href="#" className="c-nav">
            {" "}
            Women's
          </a>
          <ul className="categories-drop">
            <li>
              <a href="#">Shirt </a>
            </li>
            <li>
              <a href="#">Pent</a>
            </li>
            <li>
              <a href="#">Shoe</a>
            </li>
            <li>
              <a href="#">Watch</a>
            </li>
            <li>
              <a href="#">Glass</a>
            </li>
          </ul>
        </li>

        <li className="c-menu">
          <a className="c-nav" href="">
            Jewelry
          </a>
          <ul className="categories-drop">
            <li>
              <a href="#">Shirt </a>
            </li>
            <li>
              <a href="#">Pent</a>
            </li>
            <li>
              <a href="#">Shoe</a>
            </li>
            <li>
              <a href="#">Watch</a>
            </li>
            <li>
              <a href="#">Glass</a>
            </li>
          </ul>
        </li>
        <li className="c-menu">
          <a className="c-nav" href="#">
            Perfume
          </a>
          <ul className="categories-drop">
            <li>
              <a href="#">Shirt </a>
            </li>
            <li>
              <a href="#">Pent</a>
            </li>
            <li>
              <a href="#">Shoe</a>
            </li>
            <li>
              <a href="#">Watch</a>
            </li>
            <li>
              <a href="#">Glass</a>
            </li>
          </ul>
        </li>
        <li className="c-menu">
          <a className="c-nav" href="#blog">
            Blog
          </a>
        </li>
        <li className="c-menu">
          <a className="c-nav" href="#">
            Hot Offer
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;

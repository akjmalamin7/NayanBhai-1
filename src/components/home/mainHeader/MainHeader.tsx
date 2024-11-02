import LOGO from "../../../assets/images/logo/logo.svg";
import "./mainHeader.css";
const MainHeader = () => {
  return (
    <div className="header-main ">
      <div className="header-main-wrapp flex-column container">
        <a className="logo" href="index.html">
          <img src={LOGO} alt="" />
        </a>

        <div className="search my-4">
          <input
            type="search"
            name="search"
            className="input-controls"
            placeholder="Enter your product name..."
          />
          <button className="search-btn">
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>

        <div className="header-main-right d-none">
          <div className="header-main-actions">
            <button className="action-btn">
              <i className="bx bx-user"></i>
            </button>

            <button className="action-btn">
              <i className="bx bx-heart"></i>
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <i className="bx bx-cart-alt"></i>
              <span className="count">0</span>
            </button>
          </div>
        </div>

        <div className="mobile-bottom-header flex-between">
          <button className="action-btn" id="mobile-menu-open-btn">
            <i className="bx bx-menu"></i>
          </button>
          <button className="action-btn">
            <i className="bx bx-cart"></i>
            <span>0</span>
          </button>
          <button className="action-btn">
            <i className="bx bx-home"></i>
          </button>
          <button className="action-btn">
            <i className="bx bx-heart"></i> <span>0</span>
          </button>
          <button className="action-btn" id="mobile-catagoris-open-btn">
            <i className="bx bx-grid-alt"></i>
          </button>
        </div>

        <div
          className="mobile-navigation  has-scrollbar"
          id="mobile-navigation"
        >
          <div className="mobile-navigation-head flex-between">
            <div className="menu-text">Menu</div>
            <button className="menu-close-btn" id="mobile-menu-close-btn">
              <i className="bx bx-x"></i>
            </button>
          </div>

          <div className="mobile-navigation-body ">
            <ul className="flex-column gap-5">
              <li className="nav-item">
                <a className="w-100" href="index.html">
                  Home
                </a>
              </li>

              <li className="nav-item  w-100">
                <button className="nav-item-btn flex-between w-100">
                  Men's
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                <div className="nav-item-content d-none">
                  <ul>
                    <li>
                      <a href="#">Shirt</a>
                    </li>
                    <li>
                      <a href="#">Shorts & Jeans</a>
                    </li>
                    <li>
                      <a href="#">Safety Shoe</a>
                    </li>
                    <li>
                      <a href="#">Wallet</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item  w-100">
                <button className="nav-item-btn flex-between w-100">
                  Women's
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                <div className="nav-item-content d-none">
                  <ul>
                    <li>
                      <a href="#">Dress</a>
                    </li>
                    <li>
                      <a href="#">Earrings</a>
                    </li>
                    <li>
                      <a href="#">Makeup Kit</a>
                    </li>
                    <li>
                      <a href="#">Chain</a>
                    </li>
                    <li>
                      <a href="#">Tops</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item  w-100">
                <button className="nav-item-btn flex-between w-100">
                  Jewelry
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                <div className="nav-item-content d-none">
                  <ul>
                    <li>
                      <a href="#">Ring</a>
                    </li>
                    <li>
                      <a href="#">Earrings</a>
                    </li>
                    <li>
                      <a href="#">Couple Ring</a>
                    </li>
                    <li>
                      <a href="#">Chain</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item  w-100">
                <button className="nav-item-btn flex-between w-100">
                  Perfume
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                <div className="nav-item-content d-none">
                  <ul>
                    <li>
                      <a href="#">Clothes Perfume</a>
                    </li>
                    <li>
                      <a href="#">Deodorant</a>
                    </li>
                    <li>
                      <a href="#">Exe</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item  w-100">
                <button className="nav-item-btn flex-between w-100">
                  Baby
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                <div className="nav-item-content d-none">
                  <ul>
                    <li>
                      <a href="#">Dress</a>
                    </li>
                    <li>
                      <a href="#">Earrings</a>
                    </li>
                    <li>
                      <a href="#">Makeup Kit</a>
                    </li>
                    <li>
                      <a href="#">Chain</a>
                    </li>
                    <li>
                      <a href="#">Tops</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item  w-100">
                <a className="w-100" href="#">
                  Blogs
                </a>
              </li>

              <li className="nav-item  w-100">
                <a className="w-100" href="#">
                  Hot Offers
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-navigation-footer mt-4 ">
            {/* Dropdowns */}
            <div className="dropdowns flex-column gap-15">
              <div className="dropdown-item">
                <button className="dropdown-button flex-between w-100">
                  Language{" "}
                  <span>
                    <i className="bx bx-caret-left"></i>
                  </span>
                </button>

                <ul className="flex-column dropdown-content d-none mt-2 gap-5">
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Bangla</a>
                  </li>
                  <li>
                    <a href="#">Hindi</a>
                  </li>
                </ul>
              </div>

              <div className="dropdown-item">
                <button className="dropdown-button flex-between w-100">
                  Currency{" "}
                  <span>
                    <i className="bx bx-caret-left"></i>
                  </span>
                </button>

                {/* <!-- Dropdown Content --> */}
                <ul className="flex-column dropdown-content d-none mt-2 gap-5">
                  <li>
                    <a href="#">USD $</a>
                  </li>
                  <li>
                    <a href="#">EUR E</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Social Links --> */}
            <div className="socials mt-4">
              <ul className="flex-center  gap-15">
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
            </div>
          </div>
        </div>

        {/* <!-- ___________||  Mobile Catagories  ||___________ --> */}
        <div className="mobile-catagoris has-scrollbar" id="mobile-catagoris">
          <div className="mobile-catagoris-head flex-between my-2">
            <div className="catagoris-text uppercase">Category</div>
            <button className="catagoris-close-btn" id="close-mobile-catagoris">
              <i className="bx bx-x"></i>
            </button>
          </div>

          {/* <!-- Catagoris Items --> */}
          <div className="mt-4">
            <ul className="my-4 flex-column gap-15">
              {/* <!-- ________  Single Catagoris Item  ________ --> */}
              <li className="catagoris-item  w-100">
                {/* <!-- Button --> */}
                <button className="catagoris-item-btn flex-between w-100">
                  <div className="d-flex gap-15">
                    <img src="images/icons/bag.svg" width="20px" alt="" />
                    <span>Bags</span>
                  </div>
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                {/* <!-- Content --> */}
                <div className="catagoris-item-content d-none border-top mt-3">
                  <ul className="mt-2 flex-column gap-5">
                    <li className="flex-between">
                      <span>Shopping Bag</span>
                      <span>61</span>
                    </li>
                    <li className="flex-between">
                      <span>Wallet</span>
                      <span>21</span>
                    </li>
                    <li className="flex-between">
                      <span>Purse Bag</span>
                      <span>24</span>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <!-- ________  Single Catagoris Item  ________ --> */}
              <li className="catagoris-item  w-100">
                {/* <!-- Button --> */}
                <button className="catagoris-item-btn flex-between w-100">
                  <div className="d-flex gap-15">
                    <img src="images/icons/cosmetics.svg" width="20px" alt="" />
                    <span>Cosmetics</span>
                  </div>
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                {/* <!-- Content --> */}
                <div className="catagoris-item-content d-none border-top mt-3">
                  <ul className="mt-2 flex-column gap-5">
                    <li className="flex-between">
                      <span>Shampoo</span>
                      <span>61</span>
                    </li>
                    <li className="flex-between">
                      <span>Body Wash</span>
                      <span>21</span>
                    </li>
                    <li className="flex-between">
                      <span>Makeup</span>
                      <span>24</span>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <!-- ________  Single Catagoris Item  ________ --> */}
              <li className="catagoris-item  w-100">
                {/* <!-- Button --> */}
                <button className="catagoris-item-btn flex-between w-100">
                  <div className="d-flex gap-15">
                    <img src="images/icons/perfume.svg" width="20px" alt="" />
                    <span>Perfume</span>
                  </div>
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                {/* <!-- Content --> */}
                <div className="catagoris-item-content d-none border-top mt-3">
                  <ul className="mt-2 flex-column gap-5">
                    <li className="flex-between">
                      <span>Clothes Perfuem</span>
                      <span>12 pcs</span>
                    </li>
                    <li className="flex-between">
                      <span>Room Perfuem</span>
                      <span>21 Pcs</span>
                    </li>
                    <li className="flex-between">
                      <span>Jacket Dress</span>
                      <span>24 Pcs</span>
                    </li>
                  </ul>
                </div>
              </li>

              {/* <!-- ________  Single Catagoris Item  ________ --> */}
              <li className="catagoris-item  w-100">
                {/* <!-- Button --> */}
                <button className="catagoris-item-btn flex-between w-100">
                  <div className="d-flex gap-15">
                    <img src="images/icons/jewelry.svg" width="20px" alt="" />
                    <span>Jewelry</span>
                  </div>
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                {/* <!-- Content --> */}
                <div className="catagoris-item-content d-none border-top mt-3">
                  <ul className="mt-2 flex-column gap-5">
                    <li className="flex-between">
                      <span>Couple Rings</span>
                      <span>21</span>
                    </li>
                    <li className="flex-between">
                      <span>Necklace</span>
                      <span>12</span>
                    </li>
                    <li className="flex-between">
                      <span>Purse Bag</span>
                      <span>24</span>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <!-- ________  Single Catagoris Item  ________ --> */}
              <li className="catagoris-item  w-100">
                <button className="catagoris-item-btn flex-between w-100">
                  <div className="d-flex gap-15">
                    <img src="images/icons/glasses.svg" width="20px" alt="" />
                    <span>Glasses</span>
                  </div>
                  <div>
                    <i className="bx bx-plus"></i>
                    <i className="bx bx-minus"></i>
                  </div>
                </button>

                {/* <!-- Content --> */}
                <div className="catagoris-item-content d-none border-top mt-3">
                  <ul className="mt-2 flex-column gap-5">
                    <li className="flex-between">
                      <span>Sunglasses</span>
                      <span>20</span>
                    </li>
                    <li className="flex-between">
                      <span>Lenses Bag</span>
                      <span>14</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* <!-- Best seller --> */}
          <div className="best-seller mt-4 border-top">
            <div className="best-seller-title uppercase">best seller</div>

            <ul className="mt-3 flex-column gap-15">
              {/* <!-- Single Catagory item --> */}
              <li className="best-seller-item flex-between gap-20">
                <a href=" #">
                  <img width="89px" src="images/products/1.jpg" alt="" />
                </a>
                <div className="content flex-column gap-5">
                  <p className="name">Baby Farbic Shoes</p>
                  <div className="rating flex-center">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bx-star"></i>
                  </div>
                  <div className="prices flex-center gap-20">
                    <del className=" old-price">$14.00</del>
                    <strong className="new-price">$12.00</strong>
                  </div>
                </div>
              </li>

              {/* <!-- Single Catagory item --> */}
              <li className="best-seller-item flex-between gap-20">
                <a href=" #">
                  <img width="89px" src="images/products/2.jpg" alt="" />
                </a>
                <div className="content flex-column gap-5">
                  <p className="name">Men's Hoodies </p>
                  <div className="rating flex-center">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bx-star"></i>
                  </div>
                  <div className="prices flex-center gap-20">
                    <del className=" old-price">$14.00</del>
                    <strong className="new-price">$12.00</strong>
                  </div>
                </div>
              </li>

              {/* <!-- Single Catagory item --> */}
              <li className="best-seller-item flex-between gap-20">
                <a href=" #">
                  <img width="89px" src="images/products/3.jpg" alt="" />
                </a>
                <div className="content flex-column gap-5">
                  <p className="name">Mens' Farbic Shoes</p>
                  <div className="rating flex-center">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="prices flex-center gap-20">
                    <del className=" old-price">$25.00</del>
                    <strong className="new-price">$19.00</strong>
                  </div>
                </div>
              </li>

              {/* <!-- Single Catagory item --> */}
              <li className="best-seller-item flex-between gap-20">
                <a href=" #">
                  <img width="90px" src="images/products/4.jpg" alt="" />
                </a>
                <div className="content flex-column gap-5">
                  <p className="name">Women Hat For </p>
                  <div className="rating flex-center">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="prices flex-center gap-20">
                    <del className=" old-price">$22.00</del>
                    <strong className="new-price">$18.00</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

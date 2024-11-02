import IMG1 from "../../../assets/images/banner-1.jpg";
import IMG2 from "../../../assets/images/banner-2.jpg";
import IMG3 from "../../../assets/images/banner-3.jpg";
import "./banner.css";
const Banner = () => {
  return (
    <section>
      <div className="banner">
        <div className="container">
          <div className="banner-slider d-flex gap-15 has-scrollbar">
            <div className="banner-slider-item ">
              <img src={IMG1} alt="" className="banner-img" />

              <div className="banner-content flex-column gap-10">
                <div className="banner-subtitle">Trending Item</div>
                <div className="d-none sale-offer">Sale Offer</div>
                <div className="banner-title uppercase">
                  women's latest fashion sale
                </div>
                <div className="d-none start">
                  starting at $ <strong>28</strong>.00
                </div>
                <button className="btn uppercase">shop now</button>
              </div>
            </div>

            <div className="banner-slider-item">
              <img src={IMG2} alt="" className="banner-img" />

              <div className="banner-content flex-column gap-10">
                <div className="banner-subtitle">Trending Item</div>
                <div className="d-none sale-offer">Sale Offer</div>
                <div className="banner-title uppercase">
                  women's latest fashion sale
                </div>
                <div className="d-none start">
                  starting at $ <strong>28</strong>.00
                </div>
                <button className="btn uppercase">shop now</button>
              </div>
            </div>

            <div className="banner-slider-item">
              <img src={IMG3} alt="" className="banner-img" />

              <div className="banner-content flex-column gap-10">
                <div className="banner-subtitle">Trending Item</div>
                <div className="d-none sale-offer">Sale Offer</div>
                <div className="banner-title uppercase">
                  women's latest fashion sale
                </div>
                <div className="d-none start">
                  starting at $ <strong>28</strong>.00
                </div>
                <button className="btn uppercase">shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import IMG2 from "../../../assets/images/icons/cosmetics.svg";
import IMG1 from "../../../assets/images/icons/dress.svg";
import IMG4 from "../../../assets/images/icons/glasses.svg";
import IMG3 from "../../../assets/images/icons/watch.svg";

import "./category.css";
const Category = () => {
  return (
    <section>
      <div className="catagory-section">
        <div className="container">
          <div className="catagory-slider  d-flex gap-15 has-scrollbar">
            <div className=" catagory-slider-item flex-center gap-15">
              <div className="catagory-slider-img">
                <img src={IMG1} width="50px" alt="" />
              </div>

              <div className="catagory-itme-content">
                <div className="flex-between">
                  <div className="uppercase">Dress & Frock</div>
                  <div className="total">(20)</div>
                </div>

                <button className="btn show-all">show ALl</button>
              </div>
            </div>

            <div className="catagory-slider-item  flex-center gap-15">
              <div className="catagory-slider-img">
                <img src={IMG2} width="50px" alt="" />
              </div>

              <div className="catagory-itme-content">
                <div className="flex-between">
                  <div className="uppercase">Cosmetic </div>
                  <div className="total">(20)</div>
                </div>

                <button className="btn show-all">show ALl</button>
              </div>
            </div>

            <div className="catagory-slider-item  flex-center gap-15">
              <div className="catagory-slider-img">
                <img src={IMG3} width="50px" alt="" />
              </div>

              <div className="catagory-itme-content">
                <div className="flex-between">
                  <div className="uppercase">Watch Unick</div>
                  <div className="total">(27)</div>
                </div>

                <button className="btn show-all">show ALl</button>
              </div>
            </div>

            <div className="catagory-slider-item  flex-center gap-15">
              <div className="catagory-slider-img">
                <img src={IMG4} width="50px" alt="" />
              </div>

              <div className="catagory-itme-content">
                <div className="flex-between">
                  <div className="uppercase">Glass </div>
                  <div className="total">(12)</div>
                </div>

                <button className="btn show-all">show ALl</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

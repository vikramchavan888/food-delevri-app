import React from 'react'
import "./Reviews.css";

const Reviews = () => {

const productContainers = [...document.querySelectorAll(".Reviews-cards")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth/3;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth/3;
  });
});

  return (
    <>
      <div className="Reviews-main">
        <div className="Reviews-main-sub-main">
          <div className="Reviews-slid-button">
            <h2 className="Customer-Reviews">Customer Reviews</h2>
            <span>
              <button className="pre-btn">
                <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732560957/Back_il5snt.png" />
              </button>
              <button className="nxt-btn">
                &nbsp; &nbsp;
                <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732560957/Back_1_qsjle7.png" />
              </button>
            </span>
          </div>
          <div className="Reviews-cards">
            <div className="Review-card">
              <div className="Reviews-card-profile">
                <div className="Reviews-card-profile-img-div">
                  <img src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg" />
                </div>
                <div className="Reviews-card-profile-name">
                  <span>
                    <h1>Leon Shaw</h1>
                    <p>South Londdon</p>
                  </span>
                </div>
                <div className="Review-card-rating">
                  <span>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                  </span>
                  <div className="Review-card-rating-date">
                    <span>
                      <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732552785/cloclorg_cgc3ed.png" />
                    </span>
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="Review-content">
                <p>
                  The positive aspect was undoubtedly the efficiency of
                  <br></br> the service. The queue moved quickly, the staff was
                  <br></br> friendly, and the food was up to the usual
                  McDonald's <br></br>
                  standard – hot and satisfying.
                </p>
              </div>
            </div>
            <div className="Review-card">
              <div className="Reviews-card-profile">
                <div className="Reviews-card-profile-img-div">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2bcBC2rxeYymW9_yJ1xbxz8tmAn--t7_NCVGlirSsgKXXCff9aCyV82uXVmTSEB8GO-A&usqp=CAU" />
                </div>
                <div className="Reviews-card-profile-name">
                  <span>
                    <h1>Eliseo Bridges</h1>
                    <p>South Londdon</p>
                  </span>
                </div>
                <div className="Review-card-rating">
                  <span>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                  </span>
                  <div className="Review-card-rating-date">
                    <span>
                      <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732552785/cloclorg_cgc3ed.png" />
                    </span>
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>

              <div className="Review-content">
                <p>
                  The positive aspect was undoubtedly the efficiency of
                  <br></br> the service. The queue moved quickly, the staff was
                  <br></br> friendly, and the food was up to the usual
                  McDonald's <br></br>
                  standard – hot and satisfying.
                </p>
              </div>
            </div>
            <div className="Review-card">
              <div className="Reviews-card-profile">
                <div className="Reviews-card-profile-img-div">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYrWvhcWnqziz8HlDs1B3qBoSvbclo2A0YGTO-qK5AL4bkbg-10MTMrFj1poLA55Lip0&usqp=CAU" />
                </div>
                <div className="Reviews-card-profile-name">
                  <span>
                    <h1>Melody Barron</h1>
                    <p>South Londdon</p>
                  </span>
                </div>
                <div className="Review-card-rating">
                  <span>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                  </span>
                  <div className="Review-card-rating-date">
                    <span>
                      <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732552785/cloclorg_cgc3ed.png" />
                    </span>
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="Review-content">
                <p>
                  The positive aspect was undoubtedly the efficiency of
                  <br></br> the service. The queue moved quickly, the staff was
                  <br></br> friendly, and the food was up to the usual
                  McDonald's <br></br>
                  standard – hot and satisfying.
                </p>
              </div>
            </div>
            <div className="Review-card">
              <div className="Reviews-card-profile">
                <div className="Reviews-card-profile-img-div">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrIPUVHe81YZpOiRUNwRq32b7QEpEVP6YeuAImz3FaOtVYPTNNkRveATsieLpH2_kr4g&usqp=CAU" />
                </div>
                <div className="Reviews-card-profile-name">
                  <span>
                    <h1>Zoie Lewis</h1>
                    <p>South Londdon</p>
                  </span>
                </div>
                <div className="Review-card-rating">
                  <span>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                  </span>
                  <div className="Review-card-rating-date">
                    <span>
                      <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732552785/cloclorg_cgc3ed.png" />
                    </span>
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="Review-content">
                <p>
                  The positive aspect was undoubtedly the efficiency of
                  <br></br> the service. The queue moved quickly, the staff was
                  <br></br> friendly, and the food was up to the usual
                  McDonald's <br></br>
                  standard – hot and satisfying.
                </p>
              </div>
            </div>
            <div className="Review-card">
              <div className="Reviews-card-profile">
                <div className="Reviews-card-profile-img-div">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetTiKobCp38eQXFWDXrP_rqvbZtQRCRoVERoGYlGYEBBq9nJhElC9FJQfaQbSwtas9_s&usqp=CAU" />
                </div>
                <div className="Reviews-card-profile-name">
                  <span>
                    <h1>Presley Moon</h1>
                    <p>South Londdon</p>
                  </span>
                </div>
                <div className="Review-card-rating">
                  <span>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                  </span>
                  <div className="Review-card-rating-date">
                    <span>
                      <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732552785/cloclorg_cgc3ed.png" />
                    </span>
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="Review-content">
                <p>
                  The positive aspect was undoubtedly the efficiency of
                  <br></br> the service. The queue moved quickly, the staff was
                  <br></br> friendly, and the food was up to the usual
                  McDonald's <br></br>
                  standard – hot and satisfying.
                </p>
              </div>
            </div>
            <div className="Review-card">
              <div className="Reviews-card-profile">
                <div className="Reviews-card-profile-img-div">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcC_UEMX3HfuNVabizjsiVNAYi9l5CGW6-5g&s" />
                </div>
                <div className="Reviews-card-profile-name">
                  <span>
                    <h1> Jake Nguyen</h1>
                    <p>South Londdon</p>
                  </span>
                </div>
                <div className="Review-card-rating">
                  <span>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                  </span>
                  <div className="Review-card-rating-date">
                    <span>
                      <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732552785/cloclorg_cgc3ed.png" />
                    </span>
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="Review-content">
                <p>
                  The positive aspect was undoubtedly the efficiency of
                  <br></br> the service. The queue moved quickly, the staff was
                  <br></br> friendly, and the food was up to the usual
                  McDonald's <br></br>
                  standard – hot and satisfying.
                </p>
              </div>
            </div>
            <div className="Review-card">
              <div className="Reviews-card-profile">
                <div className="Reviews-card-profile-img-div">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_F8C4HIpNYVo0MdFY8Jr4_IM_m4lXTLaUw2JeNHMT-NXd3Mpi_c4gIY9phccoEi-yjyk&usqp=CAU" />
                </div>
                <div className="Reviews-card-profile-name">
                  <span>
                    <h1>River Shah</h1>
                    <p>South Londdon</p>
                  </span>
                </div>
                <div className="Review-card-rating">
                  <span>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                  </span>
                  <div className="Review-card-rating-date">
                    <span>
                      <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732552785/cloclorg_cgc3ed.png" />
                    </span>
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="Review-content">
                <p>
                  The positive aspect was undoubtedly the efficiency of
                  <br></br> the service. The queue moved quickly, the staff was
                  <br></br> friendly, and the food was up to the usual
                  McDonald's <br></br>
                  standard – hot and satisfying.
                </p>
              </div>
            </div>
            <div className="Review-card">
              <div className="Reviews-card-profile">
                <div className="Reviews-card-profile-img-div">
                  <img src="https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg" />
                </div>
                <div className="Reviews-card-profile-name">
                  <span>
                    <h1>Kai Ford</h1>
                    <p>South Londdon</p>
                  </span>
                </div>
                <div className="Review-card-rating">
                  <span>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732601014/Star_bfbj14.png" />
                  </span>
                  <div className="Review-card-rating-date">
                    <span>
                      <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732552785/cloclorg_cgc3ed.png" />
                    </span>
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="Review-content">
                <p>
                  The positive aspect was undoubtedly the efficiency of
                  <br></br> the service. The queue moved quickly, the staff was
                  <br></br> friendly, and the food was up to the usual
                  McDonald's <br></br>
                  standard – hot and satisfying.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-rating">
          <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732600865/Rectangle_62_dugten.png" />
        </div>
      </div>
    </>
  );
}

export default Reviews
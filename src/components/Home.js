import React from "react";

const Home = () => {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://booster.io/wp-content/uploads/product-add-to-cart-e1438362099361.png" alt="" />
            </div>
            <h1> Home Components</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.transparentpng.com/thumb/mobile/transparent-mobile-image-8.png" alt="" />
                </div>
                <div className="img-wrapper item">
                    <div className="itemsnp">
                        <span className="items">
                            I-phonePrice :
                        </span><br />
                        <span className="items">
                            $1000.00
                        </span>
                    </div>

                </div>
                <button className="btn">Add To Cart</button>
            </div>
        </div>
    );
};

export default Home;

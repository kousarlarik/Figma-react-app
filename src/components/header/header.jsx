import React from "react";
import Logo from "../../asess/Group 1.png"
const Header = () => {
    return (
        <>
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <div class="col-md-3 mb-2 mb-md-0">
                        <img className="" src={Logo} alt="logo" />
                        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
             
            </a>
                    </div>


                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 text-black">Home</a></li>
                        <li><a href="#" class="nav-link px-2 text-black"> Services </a></li>
                        <li><a href="#" class="nav-link px-2 text-black"> Contact Us</a></li>


                    </ul>


                    <div class="col-md-3 text-end">
                        <button type="button" class="btn btn- me-2">Login</button>
                        <button type="button" class="btn btn-warning rounded-pill text-white px-4">Sign-up</button>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header;

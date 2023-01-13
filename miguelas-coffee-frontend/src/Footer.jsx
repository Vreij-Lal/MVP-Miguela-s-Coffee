function Footer(){
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-row">
                    <a href="#" className="footer-icon-link"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="footer-icon-link"><i className="fa fa-instagram"></i></a>
                    <a href="#" className="footer-icon-link"><i className="fa fa-youtube"></i></a>
                    <a href="#" className="footer-icon-link"><i className="fa fa-twitter"></i></a>
                </div>

                <div class="row">
                <ul>
                    <li className="footer-list-item"><a href="#" className="footer-link">Contact us</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">Our Services</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">Privacy Policy</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">Terms & Conditions</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">Career</a></li>
                </ul>
                </div>

                <div class="row">
                    All rights reserved
                </div>

            </div>
        </footer>
    );
}
export default Footer;
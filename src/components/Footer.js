import React from 'react';
import './Footer.css'

export const Footer = () => {
    return (
        <footer id="footer" className="footer position-relative">
            <div className="container footer">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-12 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                        <form action="forms/newsletter.php" method="post" className="php-email-form">
                            <div className="newsletter-form"><input type="email" name="email"/><input type="submit"
                                                                                                      value="Subscribe"/>
                            </div>
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                        </form>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong
                    className="px-1 sitename">QuickStart</strong><span>All Rights Reserved</span></p>
            </div>

        </footer>
    );
}

import React from 'react';
import './Footer.css'

export const Footer = () => {
    return (
        <footer id="footer" className="footer position-relative">
            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong
                    className="px-1 sitename">QuickStart</strong><span>All Rights Reserved</span></p>
            </div>

        </footer>
    );
}

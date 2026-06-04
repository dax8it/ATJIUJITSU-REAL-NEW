import React from "react"
import facebook from "../../content/assets/social/facebook.svg"
import instagram from "../../content/assets/social/instagram.svg"
import youtube from "../../content/assets/social/YouTube_dark_icon_.svg"

const Footer2 = () => (
  <section className="footer-panel" aria-label="Academy contact information">
    <div className="footer-card">
      <p className="eyebrow">Location</p>
      <h2>Jackson Heights, Queens</h2>
      <p>
        82-19 Northern Blvd, 2nd Floor<br />
        Jackson Heights, NY 11372<br />
        Between 82nd &amp; 83rd Street — near the corner of 83rd St and Northern Blvd
      </p>
      <a href="https://g.page/at-jiu-jitsu-nyc?share" target="_blank" rel="noopener noreferrer">
        Open in Google Maps →
      </a>
    </div>

    <div className="footer-card footer-card-accent">
      <p className="eyebrow">Start training</p>
      <h2>Questions before your first class?</h2>
      <p>Call or email the academy and we will help you choose the right program.</p>
      <a href="tel:9177451772">(917) 745-1772</a>
      <a href="mailto:atjiujitsunyc@gmail.com">atjiujitsunyc@gmail.com</a>
    </div>

    <div className="footer-card">
      <p className="eyebrow">Follow</p>
      <h2>See the academy in action</h2>
      <div className="social-links-grid">
        <a title="Facebook" href="https://www.facebook.com/ATjiujitsuNYC/" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="" /> Facebook
        </a>
        <a title="Instagram" href="https://instagram.com/jiujitsunyc" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="" /> Instagram
        </a>
        <a title="YouTube" href="https://www.youtube.com/channel/UCdi6CZkOmv_5dNZUhlVOkgw" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="" /> YouTube
        </a>
      </div>
    </div>
  </section>
)

export default Footer2

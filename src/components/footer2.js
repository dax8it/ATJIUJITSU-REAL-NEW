import React from "react"
import facebook from "../../content/assets/social/facebook.svg"
import instagram from "../../content/assets/social/instagram.svg"
import youtube from "../../content/assets/social/YouTube_dark_icon_.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMap, faUsers } from "@fortawesome/free-solid-svg-icons"

const Footer2 = class extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 col-12-medium col-12-small">
          <article className="media">
            <figure className="media-left">
              <span className="icon is-medium">
                <FontAwesomeIcon icon={faMap} className="has-text-link" />
              </span>
            </figure>
            <div>
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                <h2>LOCATION</h2>
                <p>
                  Conveniently located near E/F/7/R/M trains on Northern Blvd
                  between 80th & 81st Sts.
                  <p />
                  <a
                    href="https://g.page/at-jiu-jitsu-nyc?share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    80-22 Northern Blvd. <br />
                    Jackson Heights NY 11372
                    <br />
                    U.S.A
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="col-4 col-12-medium col-12-small">
          <article className="media">
            <figure className="media-left">
              <span className="icon is-medium">
                <FontAwesomeIcon icon={faEnvelope} className="has-text-link" />
              </span>
            </figure>
            <div>
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                <h2>CONTACT US</h2>
                <p>
                  We would love to hear from you.
                  <p></p>
                  Email:
                  <br />
                  <a href="mailto:atjiujitsunyc@gmail.com">
                    atjiujitsunyc@gmail.com
                  </a>
                  <br />
                  <br></br>
                  Call Us <br />
                  <a href="tel:9177451772">
                    <b>(917)-745-1772</b>
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="col-4 col-12-medium col-12-small">
          <article className="media">
            <figure className="media-left">
              <span className="icon is-medium">
                <FontAwesomeIcon icon={faUsers} className="has-text-link" />
              </span>
            </figure>
            <div>
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                <h2>FIND US</h2>
                <p>Get to know us.</p>
                <div className="social">
                  <a
                    title="facebook"
                    href="https://www.facebook.com/ATjiujitsuNYC/"
                  >
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "2em", height: "2em" }}
                    />{" "}
                    Facebook
                  </a>
                  <p></p>
                  <a title="instagram" href="https://instagram.com/jiujitsunyc">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "2em", height: "2em" }}
                    />{" "}
                    Instagram
                  </a>
                  <p></p>
                  <a
                    title="youtube"
                    href="https://www.youtube.com/channel/UCdi6CZkOmv_5dNZUhlVOkgw"
                  >
                    <img
                      src={youtube}
                      alt="youtube"
                      style={{ width: "2em", height: "2em" }}
                    />{" "}
                    Youtube
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default Footer2

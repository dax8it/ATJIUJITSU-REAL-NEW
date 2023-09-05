import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Elements" />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p>
            This is{" "}
            <strong>
              <strong>bold</strong>
            </strong>{" "}
            and this is{" "}
            <strong>
              <strong>strong</strong>
            </strong>
            . This is{" "}
            <em>
              <em>italic</em>
            </em>{" "}
            and this is{" "}
            <em>
              <em>emphasized</em>
            </em>
            . This is <sup>superscript</sup>text and this is{" "}
            <sub>subscript</sub> text. This is <u>underlined</u> and this is
            code:{" "}
            <code>
              for (;;) {"{"} ... {"}"}
            </code>
            . Finally, this is a <a href="#">link</a>.
          </p>
          <h2 id="heading-level-2">Heading Level 2</h2>
          <h3 id="heading-level-3">Heading Level 3</h3>
          <h4 id="heading-level-4">Heading Level 4</h4>
          <h5 id="heading-level-5">Heading Level 5</h5>
          <h6 id="heading-level-6">Heading Level 6</h6>
          <hr />
          <h2 id="this-is-a-section">This is a section</h2>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
          <h3 id="this-is-a-sub-section">This is a sub-section</h3>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet.
          </p>
          <h3 id="this-is-a-sub-section-1">This is a sub-section</h3>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet.
          </p>
          <hr />
          <h2 id="lists">Lists</h2>
          <h3 id="unordered">
            <strong>
              <strong>Unordered</strong>
            </strong>
          </h3>
          <ul>
            <li>Dolor pulvinar etiam.</li>
            <li>Sagittis lorem eleifend.</li>
            <li>Felis feugiat dolore viverra.</li>
            <li>Dolor pulvinar etiam.</li>
          </ul>
          <h3 id="ordered">Ordered</h3>
          <ol>
            <li>Dolor pulvinar etiam.</li>
            <li>Etiam vel felis at viverra.</li>
            <li>Felis enim feugiat magna.</li>
            <li>Etiam vel felis nullam.</li>
            <li>Felis enim et tempus.</li>
          </ol>
          <h3 id="definition">
            <strong>Definition</strong>
          </h3>
          <dl>
            <dt>Item 1</dt>
            <dd>
              <p>
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent.
              </p>
            </dd>
            <dt>Item 2</dt>
            <dd>
              <p>
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent.
              </p>
            </dd>
            <dt>Item 3</dt>
            <dd>
              <p>
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent.
              </p>
            </dd>
          </dl>
          <hr />

          <a
            href="javascript:void(
        window.open(
          'https://form.jotform.com/atjiujitsudev/studio-membership',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    "
          >
            ATJIUJITSUNYC MEMBERSHIP FORM
          </a>

          <br />

          <div
            class="maonrails-schedule maonrails-frame-container"
            attr-gym="DL7vA"
          ></div>

          <br />

          <h2 id="blockquote">
            <strong>Blockquote</strong>
          </h2>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis.
          </blockquote>
          <hr />
          <h2 id="images">Images</h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.smallPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Regular image</figcaption>
          </figure>
   {/*      <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.medPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large image</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.largePic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Full bleed image</figcaption>
          </figure>
    */}
          <hr />
          <h2 id="table">Table</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td> Morbi faucibus arcu accumsan lorem.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 4</td>
                <td>Vitae integer tempus condimentum.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 5</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2} />
                <td>100.00</td>
              </tr>
            </tfoot>
          </table>
          <hr />
          <h2 id="buttons">Buttons</h2>
          <ul className="actions">
            <li>
              <a href="#" className="button primary">
                Primary
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a href="#" className="button primary large">
                Large
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
            <li>
              <a href="#" className="button small">
                Small
              </a>
            </li>
          </ul>
          <ul className="actions fit">
            <li>
              <a href="#" className="button primary fit">
                Fit
              </a>
            </li>
            <li>
              <a href="#" className="button fit">
                Fit
              </a>
            </li>
          </ul>
          <ul className="actions fit small">
            <li>
              <a href="#" className="button primary fit small">
                Fit + Small
              </a>
            </li>
            <li>
              <a href="#" className="button fit small">
                Fit + Small
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <span className="button primary disabled">Primary</span>
            </li>
            <li>
              <span className="button disabled">Default</span>
            </li>
          </ul>
          <hr />


        


{/* ----- THIS IS THE CODE FOR HOME PAGE ----- */}




          <h2 id="grid-system">@Jiujitsu Martial Arts Training, Jackson Heights Queens, NY</h2>

      {/* 2 COLUMNS - Picture RIGHT */}     

          <div className="row">
            <div className="col-12">
              <div>
                
                <h2>@Jiujitsu Martial Arts Training, Jackson Heights Queens, NY</h2>
                  <p>Discover the best BJJ and martial arts training with comprehensive 
                    programs offering superior Jiujitsu instruction, welcoming everyone 
                    from complete beginners to pro fighters.
                  </p>

                  <a href="#" className="button primary large">
                      Prices. No Contracts!
                  </a>
                  <a href="#" className="button primary large">
                      Learn More
                  </a>
              </div>
            </div>
          </div>

 {/* 2 COLUMNS - Picture Right */}    

          <div className="row">        
            <div className="col-6">
              <div>
                   <h2>Kids Martial Arts</h2>
                  <p>Martial arts is a structured system of training designed to 
                    improve physical fitness, mental discipline, and self-defense
                     skills. 
                     <br />                 
                <ul>
                    <li><a href="https://www.atjiujitsunyc.com/kids-jiujitsu-classes-in-queens/">
                          **Kids Jiu-Jitsu**: (5-9)</a></li>
                    <li><a href="https://www.atjiujitsunyc.com/kids-jiujitsu-classes-in-queens/">
                          **Kids Jiu-Jitsu**: (10-15)</a></li>
                    <li><a href="https://www.atjiujitsunyc.com/kids-kickboxing-classes-in-queens/">
                          **Kids Kickboxing**: (Ages 7-15)</a></li>
                    <li><a href="https://www.atjiujitsunyc.com/kids-mma/">
                          **Kids MMA**: (Ages 8-15)</a></li>
                    <li><a href="https://www.atjiujitsunyc.com/toddler-jiujitsu/">
                          **Toddlers Jiujitsu**: (Ages 3-5)</a></li>
          
                </ul>
                
                  </p>
                  <a href="https://www.atjiujitsunyc.com/tags/kids-programs/" className="button primary large">
                      Learn More
                  </a>
              </div>
            </div>
            <div className="col-6">
              <div>
                 <figure className="kg-card kg-image-card">
                      <Img
                      fluid={data.smallPic.childImageSharp.fluid}
                      className="kg-image"
                      />
                  </figure>
              </div>
            </div>
          </div>

     {/* 2 COLUMNS - Picture Left */} 


     <div className="row">        
            
            <div className="col-6">
              <div>
                 <figure className="kg-card kg-image-card">
                      <Img
                      fluid={data.medPic.childImageSharp.fluid}
                      className="kg-image"
                      />
                  </figure>
              </div>
            </div>

            <div className="col-6">
              <div>
                   <h2>Adults Martial Arts</h2>
                  <p>Maybe this will work we shall see.
                  </p>
                  <p>                  
                <ul>
                    <li>**Full-Body Workout**</li>
                    <li>**Cardio King**</li>
                    <li>**Shed Those Pounds**</li>
                    <li>**Flexibility & Mobility**</li>
                </ul>
                  </p>

                  <a href="#" className="button primary large">
                      Learn More
                  </a>
              </div>
            </div>
          </div>  
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  smallPic: file(
    relativePath: { eq: "kids-jiujitsu-jackson-heights-queens.jpg" }
  ) {
    childImageSharp {
      fluid(maxWidth: 1360) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  medPic: file(relativePath: { eq: "adult-bjj-queens.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1360) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  largePic: file(
    relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
  ) {
    childImageSharp {
      fluid(maxWidth: 1360) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`






export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)

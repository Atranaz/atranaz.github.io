import React, {Component } from 'react';
import {Link } from 'react-router-dom';
import zeeImage from '../../images/zee-60.jpg';


class About extends Component {

  render(){

    return (
      <section id="primary" className="container author_info_container author_page_box">
          <div className="row">
      <div className="author_avatar_col col"> 
          <img src={zeeImage} width="220" height="220" alt="Zaheer Ahmad" className="avatar avatar-220 wp-user-avatar wp-user-avatar-220 alignnone photo" />
      </div>
      <div className="author_info_col col">
          <div className="author_box_info_header">
              <h2 className="author_display_name title entry-title section_title">Hi, I am Zaheer Ahmad</h2>
              <div className="social_icons_list author_social_icons_list">
                  <Link rel="nofollow" target="_blank" to="#" title="Facebook" className="social_icon author_social_icon social_facebook-square social_icon_facebook-square"><i className="fab fa-facebook-square"></i></Link>
                  <Link rel="nofollow" target="_blank" to="#" title="Twitter" className="social_icon author_social_icon social_twitter social_icon_twitter"><i className="fab fa-twitter"></i></Link>
                 
                  
                  <Link rel="nofollow" target="_blank" to="#" title="Instagram" className="social_icon author_social_icon social_instagram social_icon_instagram"><i className="fab fa-instagram"></i></Link>
                 
              </div>
          </div>
          <div className="author_description">
            <p>I have been working as a full-stack developer for more than 5 years.Throughout the years, I have worked on multiple projects with various industries such as logistics, education, project management, portals, CRM, Real estate and E-commerce related areas.
            </p>
            <p>
              <b>Some of the technologies, language, and framework I have worked on:</b>
            - ReactJs, AngularJS, NodeJS, Express, Webpack, HTML5, MaterialUI<br/>
            - PHP, Laravel, Codeigniter, Symfony, Blade, Twig<br/>
            - Bootstrap, JQuery, CSS3, PWA, ES6<br/>
            - DB: MySQL, MongoDB, MSSQL<br/>
            - Git, CLI<br/>
            </p>
            <p>
            Having hands-on experience on large-scale systems development in Open source technologies, I also have extensive knowledge in MVC, OOP, CMS[Wordpress, Drupal, Magento] and Web development.
            </p>
            <p>
            I have worked solo handling all SDLC as well as collectively in development teams as team lead which was assigned on Web-based portals and Cloud-Based System. Having thorough command on MySQL Server and knows Views, Procedures, Functions and strong knowledge of relational databases. Also experienced in team handling. Well informed about Agile development methodology and prototyping plus with using GIT and TFS version control systems.
            </p>
            <p>
            My ability to coordinate with
            
             clients and teams makes me a strong team player. I am very adaptive and always eager to learn new technologies and techniques.  
            </p>
            
          </div>
          
      </div>
  </div>
      </section>
    );

  }
}


// function About() {
  
// }

export default About;
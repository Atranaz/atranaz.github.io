import React, {Component } from 'react';
import {Link } from 'react-router-dom';

class ArticleItem extends Component {

    render(){
        return (
            <React.Fragment>
                 <article  className="blog_post_container customhentry post-188 post type-post status-publish format-image has-post-thumbnail hentry category-social-life tag-creative tag-image post_format-post-format-image">
                    <figure className="post_banner"> 
                        <Link to={`/article/${this.props.article.id}`}> 
                        <img width="880" height="400" src="https://awcdn1.ahmad.works/alia/wp-content/uploads/2018/07/business4-people-in-the-office-consulting-a-PJNJUKK.jpg" className="attachment-alia_wide_banner size-alia_wide_banner wp-post-image" alt=""  /> 
                        </Link> 
                    </figure>
                    <div className="post_body has_post_banner">
                        <div className="post_header">
                            <h3 className="entry-title title post_title">
                                <Link to={`/article/${this.props.article.id}`} rel="bookmark">{this.props.article.title}</Link>
                            </h3>
                        </div>
                        <div className="post_meta_container clearfix">
                            <div className="post_meta_info post_meta_row clearfix">
                                <span className="post_meta_item meta_item_category">
                                    <a className="post_format_icon_link" href="https://ahmad.works/alia/type/image/"><i className="far fa-image post_meta_icon imagepost_fromat_icon"></i></a>
                                    <a href="https://ahmad.works/alia/category/social-life/" rel="category tag">Social Life</a>
                                </span>
                                <a className="post_date_link" href="https://ahmad.works/alia/smiling-woman-florist-standing-and-working-in-flowers-shop/">
                                    <span className="post_meta_item meta_item_date">
                                        <span className="screen-reader-text"></span>
                                            <span className="entry-date published updated" >July 10, 2018</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="post_info_wrapper">
                            <div className="entry-summary blog_post_text blog_post_description">
                                {this.props.article.body} …
                                <div className="blog_post_control_item blog_post_readmore">
                                    <Link to={`/article/${this.props.article.id}`} className="more-link">Continue reading
                                        <span className="continue_reading_dots">
                                            <span className="continue_reading_squares">
                                                <span></span><span></span><span></span><span></span>
                                            </span>
                                            <i className="fas fa-chevron-right readmore_icon"></i>
                                        </span>
                                    </Link>
                                
                                </div>
                            </div>
                        </div> 
                    </div> 
                </article>
            </React.Fragment>
        );
    }

}

export default ArticleItem;
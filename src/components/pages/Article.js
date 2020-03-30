import React, {Component } from 'react';
// import {Link } from 'react-router-dom';
import axios from 'axios';

class Article extends Component {

    constructor(props){
        super(props);
        this.state = {
            aid:this.props.match.params.articleId,
            article:{}
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.state.aid)
        .then(res  => this.setState({article: res.data}))
        
    }

    
    render() {

      

    console.log(this.state.article);
        
        return (
            <section id="primary" className="container main_content_area blog_index_area flist_main_content_container">
                <div className="row full_width_list">  
                    <div className="col12">
                        <article id="post-188" className="blog_post_container customhentry post-188 post type-post status-publish format-image has-post-thumbnail hentry category-social-life tag-creative tag-image post_format-post-format-image">
                            <div className="single_post_body">
                                <div className="post_header post_header_single">
                                    <h1 className="entry-title title post_title">{this.state.article.title}</h1>
                                </div>
                                <div className="post_meta_container post_meta_container_single clearfix">
                                    <span className="post_meta_item meta_item_author_avatar">
                                        <a className="meta_author_avatar_url" href="https://ahmad.works/alia/author/alia/">
                                            <img src="https://awcdn1.ahmad.works/alia/wp-content/uploads/2018/08/beautiful-woman-with-curly-hair-laughing-PNKWDEG-100x100.jpg" width="40" height="40" alt="Alia Stone" className="avatar avatar-40 wp-user-avatar wp-user-avatar-40 alignnone photo" />
                                        </a>
                                    </span>
                                    <div className="post_meta_info post_meta_row clearfix">
                                        <span className="post_meta_item meta_item_author">
                                            <span className="author vcard author_name">
                                                <span className="fn">
                                                    <a className="meta_author_name url" href="https://ahmad.works/alia/author/alia/">Alia Stone</a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="post_meta_item meta_item_category">
                                            <a className="post_format_icon_link" href="https://ahmad.works/alia/type/image/">
                                                <i className="far fa-image post_meta_icon imagepost_fromat_icon"></i></a>
                                                <a href="https://ahmad.works/alia/category/social-life/" rel="category tag">Social Life</a>
                                        </span>
                                        <a className="post_date_link" href="https://ahmad.works/alia/smiling-woman-florist-standing-and-working-in-flowers-shop/">
                                            <span className="post_meta_item meta_item_date"><span className="screen-reader-text"></span>
                                            {/* <time className="entry-date published updated" datetime="2018-07-10T09:16:00+00:00">July 10, 2018</time> */}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <figure className="post_banner"> 
                            <a href="https://ahmad.works/alia/smiling-woman-florist-standing-and-working-in-flowers-shop/"> 
                            <img width="880" height="400" src="https://awcdn1.ahmad.works/alia/wp-content/uploads/2018/07/business4-people-in-the-office-consulting-a-PJNJUKK.jpg" className="attachment-full size-full wp-post-image" alt=""  /> </a> </figure>
                            <div className="post_body has_post_banner"><div className="post_info_wrapper"><div className="entry-content blog_post_text blog_post_description clearfix"><p>{this.state.article.body}</p><div className="tagcloud single_tagcloud clearfix"><a href="https://ahmad.works/alia/tag/creative/" rel="tag">creative</a><a href="https://ahmad.works/alia/tag/image/" rel="tag">image</a></div></div></div> </div>  </article>
                        </div>
            </div>
        </section>
      );
    }

}


// function Article() {
    
// }

export default Article;
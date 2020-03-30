import React, {Component } from 'react';
import ArticleItem from './ArticleItem';


class Articles extends Component {

    render() {
        
        return (
            <section id="primary" className="container main_content_area blog_index_area flist_main_content_container">
                <div className="row full_width_list">
                    <div className="col12">
                        {
                            this.props.articles.map((article) => (
                                <ArticleItem key={article.id} article={article} />
                            ))
                        }
                                             
                    </div>
                </div>
            </section>
          );

    }

}


// function Articles() {
//     console.log(this.props.articles);
  
// }

export default Articles;
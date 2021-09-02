import './ArticlePost.scss';
import Grid from '@material-ui/core/Grid';

const ArticlePost = () => {
    return (
        <div>
            <div className="article-post">
                <Grid container spacing={3}>
                    <Grid item md={5}>
                        <a href="# " className="aricle-large">
                            <div className="aricle-large__image"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg" alt="" /></div>
                            <div className="aricle-category">Dinner tips</div>
                            <div className="aricle-large__content">
                                <div className="aricle-large__content-top">
                                    <div className="aricle-large__title">
                                        Our chef tips for a great and tasty dinner ready in 20 minutes
                                    </div>
                                </div>
                                <div className="aricle-large__content-bottom">
                                    <span className="aricle-large__author">Author</span>
                                    <span className="aricle-large__date">17.6.2020</span>
                                </div>
                            </div>
                        </a>
                    </Grid>
                    <Grid item md={7}>
                        <Grid container spacing={3}>
                            <Grid item md={5}>
                                <div className="aricle-medium">
                                    <div className="aricle-medium__image">
                                        <a href="# ">
                                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="aricle-category">Vegetable</div>
                                    <a href="# " className="aricle-medium__title">
                                        Which vegetable your family will love and want’s eat each day
                                    </a>
                                    <div className="aricle-medium__addition">
                                        <span className="aricle-medium__author">Author</span>
                                        <span className="aricle-medium__date">17.6.2020</span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={7}>
                                <div className="aricle-small">
                                    <div className="aricle-small__content">
                                        <a href="# " className="article-small__title">
                                            Salat is kinda good start to your morning routines
                                        </a>
                                        <div className="aricle-small__addition">
                                            <span className="aricle-small__author">Author</span>
                                            <span className="aricle-small__date">17.6.2020</span>
                                        </div>
                                    </div>
                                    <div className="aricle-small__image">
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="aricle-small">
                                    <div className="aricle-small__content">
                                        <a href="# " className="article-small__title">
                                            Salat is kinda good start to your morning routines
                                        </a>
                                        <div className="aricle-small__addition">
                                            <span className="aricle-small__author">Author</span>
                                            <span className="aricle-small__date">17.6.2020</span>
                                        </div>
                                    </div>
                                    <div className="aricle-small__image">
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="aricle-small">
                                    <div className="aricle-small__content">
                                        <a href="# " className="article-small__title">
                                            Salat is kinda good start to your morning routines
                                        </a>
                                        <div className="aricle-small__addition">
                                            <span className="aricle-small__author">Author</span>
                                            <span className="aricle-small__date">17.6.2020</span>
                                        </div>
                                    </div>
                                    <div className="aricle-small__image">
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg" alt="" />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}


export default ArticlePost;
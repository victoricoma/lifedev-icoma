import { Link } from "react-router-dom"
import styles from "./PostDetail.module.css"

const PostDetail = ({ post }) => {
    return (
        <>
            <div className={styles.post_detail}>
                <img src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p className={styles.createby}>por: {post.createby}</p>
                <div className={styles.tags}>
                    {post.tags.map((tags) => (
                        <p key={tag}>
                            <span>#</span>{tag}
                        </p>))}
                </div>
                <p className={styles.createby}>data: {post.createAt}</p>
                <Link to={`/post/${post.id}`} className="btn btn-outline">
                Ler Postagem
                </Link>
            </div>
        </>
    )
}

export default PostDetail
const Post = props => {
    return (
        <ul>
            {props.posts.map(post => <li>{post.title} - {post.author} - {post.content}</li>)}
        </ul>
    )
}

export default Post
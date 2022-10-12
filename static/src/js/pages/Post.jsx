import {useState} from "react";
import {Link} from "@inertiajs/inertia-react";

const Post = props => {
    const [state, setState] = useState({
        'value': ''
    })

    const handleChange = (e) => {
        const val = e.target.value;
        setState( prevState => {
            return {
                ...prevState,
                value: val
            }
        })
    }

    return (
        <>
            <ul>
                {
                    props.posts.map(
                        post => <li key={post.id}>{post.title} - {post.author.name} - {post.content}</li>
                    )
                }
            </ul>
            <p>{state.value}</p>
            <input onChange={handleChange} />
            <Link href="/post/prova" data={{miao: "bau"}} >Prova</Link>
        </>
    )
}

export default Post

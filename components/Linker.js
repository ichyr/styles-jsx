import Link from 'next/link'

export default ({post}) => (
    <span>
        <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
        </Link>
        This is effected by parent components <b>DIV STYLE</b>
    </span>
)
import { PostCard } from "../components"

export const HomePage = () =>{

    const posts = [
        {id: 1, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae!',author: 'David Murillo'},
    {id: 2, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae!',author: 'Isaac Murillo'}
    ]

    return(
        <section>
            {posts.map(post => (
                <PostCard key={post.id} post={post}/>
            ))}
            
        </section>
    )
}
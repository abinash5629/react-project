import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null) //here, you can take null or empty array it solely depends upon you.
    const {slug} = useParams()  //like, after you click a particular post you are automatically directed to that particular post, so in that url or link you must be having id, so you have to take useparams.as, we know useparams will take on the ids from the above, so you have to take on the slug value from useparams.
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)   //like, any change in navigation and  slug will force it to rerun.
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
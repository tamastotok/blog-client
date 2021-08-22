import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import * as S from "./SinglePost.styles";

// fetching images
/*
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
   return builder.image(source);
}
*/

function SinglePost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
         title,
         _id,
         slug,
         mainImage{
            asset->{
               _id,
               url
            }
         },
         body,
         "name": author->name,
         "authorImage": author->image
      }`
      )
      .then((res) => setPost(res[0]))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!post) return <h1>Loading...</h1>;

  return (
    <S.Post>
      <Link className="back-button" to="/blog">
        back
      </Link>
      <h1>{post.title}</h1>

      <br />
      <br />

      <div>
        <BlockContent
          blocks={post.body}
          projectId="1r0x1pwf"
          dataset="production"
        />
      </div>

      <p className="author">{post.name}</p>
    </S.Post>
  );
}

export default SinglePost;

import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../utils/posts"

const Post = ({ postData }) => {

    const { title, id, date } = postData
    return (
        <Layout>
            {title}
            <br />
            {id}
            <br />
            {date}
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

    const { id } = params
    const postData = getPostData(id)

    return {
        props: {
            postData
        }
    }
}

export default Post
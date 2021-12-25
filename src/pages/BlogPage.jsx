import styled from "styled-components";
import blogs from "../data/blogs";
import Title from "../components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";

const BlogPage = () => {
  return (
    <MainLayout>
      <BlogPageStyled>
        <Title title="Blogs" span="Blogs" />
        <InnerLayout className="blog">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className="blog-item">
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a href={blog.link} target="_blank" rel="noreferrer">
                    {blog.title}
                  </a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogPageStyled>
    </MainLayout>
  );
};

const BlogPageStyled = styled.section`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
      .image {
        width: 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: 90%;
          object-fit: cover;
          transition: all 0.4s ease-in-out;
          &:hover {
            transform: rotate(3deg) scale(1.1);
          }
        }
      }
      .title {
        padding: 1rem 0.5rem 0 0.5rem;

        a {
          font-size: 1.7rem;
          color: var(--white-color);
          cursor: pointer;
          transition: all 0.4s ease-in-out;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
`;

export default BlogPage;

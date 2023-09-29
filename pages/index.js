import dotenv from "dotenv";
dotenv.config();

import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/navigation";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>
            Stickynote Consulting - Eredményesebb vállalatok, élvezetesebb
            munkahelyek
          </title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              heroImage={heroPost.heroImage}
              publishDate={heroPost.publishDate}
              author={heroPost.author}
              slug={heroPost.slug}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}

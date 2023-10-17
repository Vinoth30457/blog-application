import { useEffect } from "react";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <HeroSection />
      <BlogPostCard />
    </Layout>
  );
}

export default Home;

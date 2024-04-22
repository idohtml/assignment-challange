import Layout from "../components/layout/Layout";
import Image from "../assets/subhero.jpg";
import Article from "../components/Article";

// about json file
import data from "../data/about.json";

export default function About() {
  return (
    <Layout>
      <section>
        <div className="relative w-full h-[350px] flex items-center justify-center">
          <img
            className="absolute inset-0 rounded-lg h-full w-full object-center object-cover -z-10 brightness-50"
            src={Image}
            alt=""
          />
          <h1 className="text-center text-white text-7xl font-semibold z-10">
            About us
          </h1>
        </div>
      </section>
      <section>
        {data.sections.map((section, index) => (
          <Article
            key={index}
            title={section.title}
            description={section.content}
          />
        ))}
      </section>
    </Layout>
  );
}

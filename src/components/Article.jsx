/* eslint-disable react/prop-types */
export default function Article({ title, description }) {
  return (
    <article>
      <h2 className="text-4xl font-semibold my-10">{title}</h2>
      <p className="font-light leading-7 tracking-wide">{description}</p>
    </article>
  );
}

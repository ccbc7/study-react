const articles = [
  {
    title: "記事１",
    content: "こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
  },
  {
    title: "記事２",
    content: "こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
  },
  {
    title: "記事３",
    content: "おはようおはようおはようおはようおはようおはようおはようおはようおはようおはよう"
  },
  {
    title: "記事４",
    content: "ありがとうありがとうありがとうありがとうありがとうありがとうありがとうありがとう"
  }
]

export default function Articles() {
  return (
    <>
      {articles.map((article, index) => (
        <section key={index}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </section>
      ))}
    </>
  );
}

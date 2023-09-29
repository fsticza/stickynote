import Link from "next/link";
import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  heroImage,
  publishDate,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={heroImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          href={`/posts/${slug}`}
          className="underline text-green-600 hover:text-green-500 hover:no-underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={publishDate} />
      </div>
      {author && <Avatar name={author.name} image={author.image} />}
    </div>
  );
}

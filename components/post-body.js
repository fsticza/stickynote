import markdownStyles from "./markdown-styles.module.css";
import ReactMarkdown from "react-markdown";

export default function PostBody({ body, youtubeUrl }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        <ReactMarkdown>{body}</ReactMarkdown>
        {youtubeUrl && (
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              width="560"
              height="315"
              src={youtubeUrl}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

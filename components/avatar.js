import ContentfulImage from "./contentful-image";

export default function Avatar({ name, image }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <ContentfulImage
          width={48}
          height={48}
          src={image.url}
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}

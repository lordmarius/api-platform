import Image from "next/image"

const Card = ({
    image,
    url,
    title,
  }: {
    image: string;
    url: string;
    title: string;
  }) => {
    return (
    <div className="w-full max-w-xs p-2 | sm:w-1/2 | lg:w-full lg:p-0">
    <a
      href={url}
      className="w-full flex items-center flex-col justify-center shadow-card p-3 min-h-24 transition-colors text-cyan-500 border-4 border-transparent hover:border-cyan-200 hover:text-cyan-700 | sm:flex-row sm:justify-start sm:px-5"
    >
      <Image src={image} width="50" height="50" alt="" />
      <h3 className="text-center text-base uppercase font-semibold leading-tight pt-3 | sm:text-left sm:pt-0 sm:pl-5">
        {title}
      </h3>
    </a>
    </div>
)}

export default Card
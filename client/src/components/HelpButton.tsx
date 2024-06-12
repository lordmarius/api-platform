import Link from "next/link";

const HelpButton = ({
    children,
    url,
    title,
  }: {
    url: string;
    title: string;
    children: React.ReactNode;
  }) => (
    (<Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 p-2.5 rounded-full border-2 border-gray-100 justify-center transition-colors hover:border-cyan-200 hover:bg-cyan-200/50 m-2 inline-flex items-center | md:p-1 md:w-9 md:h-9 md:flex md:mx-auto md:m-0"
      title={title}>

      {children}

    </Link>)
  );

  export default HelpButton
interface HyperLinkProps {
  text: string;
  url: string;
}

export default function HyperLink ({ text, url }: HyperLinkProps) {
  return (
    <a className="bg-[#26ADD8] text-[2rem] font-semibold mt-6 flex items-center justify-center max-w-[85.7%]  text-[#fff] " href={url}>
      {text}
    </a>
  );
};


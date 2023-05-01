import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  items: {
    title: string;
    link: string;
  }[];
};

export default function Footnotes({ items }: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <h2>Footnotes</h2>

      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          className="flex items-start gap-3 no-underline pb-1.5"
        >
          <p className="w-6 m-0 font-semibold">{idx + 1}.</p>
          <div className="flex items-center gap-2">
            <p className="m-0 font-normal underline decoration-dashed decoration-monochromeLogan">
              {item.title}
            </p>
            {isMobile ? null : (
              <p className="m-0 text-xs opacity-80 font-normal">
                ({ExtractHostname(item.link)})
              </p>
            )}
          </div>
        </a>
      ))}
    </>
  );
}

//find & remove protocol (http, ftp, etc.) and get hostname
function ExtractHostname(url: string) {
  var hostname;

  if (url.indexOf("//") > -1) hostname = url.split("/")[2];
  else hostname = url.split("/")[0];

  //find & remove port number and "?" query string
  hostname = hostname.split(":")[0].split("?")[0];

  return hostname;
}

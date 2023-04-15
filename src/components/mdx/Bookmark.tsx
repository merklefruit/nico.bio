type Props = {
  title: string;
  href: string;
  desc: string;
  emoji?: string;
};

export default function Bookmark({ title, href, desc, emoji = "🔍" }: Props) {
  const domain = ExtractHostname(href);

  return (
    <a href={href} target="_blank" className="no-underline">
      <div className="bookmark">
        <div className="inner">
          <div className="lip">{emoji}</div>
          <div className="content">
            <h4>{title}</h4>
            <p>{desc}</p>
            <small>{domain}</small>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bookmark {
          border: 1px solid #868690;
          border-radius: 6px;
          color: white;
          background-color: #111216;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
          margin: 1.3rem 0;
        }
        .bookmark:hover {
          background-color: #0d0d0d;
          border: 1px solid gray;
        }

        .inner {
          padding: 1rem;
          display: grid;
          grid-template-columns: 30px 1fr;
        }

        .lip {
          width: 100%;
          display: flex;
          align-items: top;
          justify-content: center;
          margin-top: 3px;
        }

        .content {
          padding: 0 0 0 10px;
        }

        h4 {
          margin: 0 !important;
          font-weight: 600;
        }

        small {
          margin: 5px 0 0 0;
          font-size: 0.925rem;
          opacity: 0.6;
        }

        p {
          margin: 0;
          opacity: 0.8;
          max-width: 760px;
        }
      `}</style>
    </a>
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

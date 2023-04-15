interface Props {
  emoji?: string;
  content: string;
}

export default function Callout({ emoji = "💡", content }: Props) {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="emoji">{emoji}</div>
        <p>{content}</p>
      </div>

      <style jsx>{`
        .wrapper {
          width: 100%;
          margin: 1.3rem 0;
          background: #1a1b1f;
          border-radius: 6px;
        }

        .inner {
          padding: 1rem;
          display: grid;
          grid-template-columns: 30px 1fr;
          place-items: top left;
        }

        .emoji {
          width: 100%;
          display: flex;
          align-items: top;
          justify-content: center;
        }

        p {
          padding: 0 0 0 10px;
          color: #fdfdfe;
          height: 100%;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

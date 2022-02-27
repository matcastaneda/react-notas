const Social = ({ url, background, logo, social }) => {
  return (
    <a href={url}>
      <div
        className="text-white flex items-center p-2 rounded-lg shadow-lg"
        style={{ background: `${background}` }}>
        <span>{logo}</span>
        <p className="ml-2">{social}</p>
      </div>
    </a>
  );
};

export default Social;

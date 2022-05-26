import { useState } from 'react';
import YouTube from 'react-youtube';

type Props = {
  videoId: string;
  opts: {
    height: string;
    width: string;
    playerVars: {
      autoplay: 0 | 1 | undefined;
    };
  };
};

export const Trailer = ({ videoId, opts }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className="Trailer" onClick={handleClose}>
      {isOpen && <YouTube videoId={videoId} opts={opts} />}
    </div>
  );
};

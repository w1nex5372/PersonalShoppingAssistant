// GlobalImage.tsx
import Image, { ImageProps as NextImageProps } from "next/image";

interface GlobalImageProps extends NextImageProps {
  // You can add additional props specific to your global image component here
}

const GlobalImage: React.FC<GlobalImageProps> = (props) => {
  return <Image {...props} />;
};

export default GlobalImage;

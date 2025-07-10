import { type FC, type HTMLProps } from 'react';

interface IProps extends Omit<HTMLProps<HTMLImageElement>, 'src'> {
  imageURL: string;
}

const Image: FC<IProps> = ({ imageURL, ...props }) => {
  return <img src={imageURL} {...props} />;
};

export default Image;

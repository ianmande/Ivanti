import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

export const ImageSkeleton = () => (
  <ContentLoader
    speed={2}
    width={275}
    height={350}
    viewBox="0 0 275 350"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb">
    <Rect x="0" y="0" rx="0" ry="0" width="275" height="350" />
  </ContentLoader>
);

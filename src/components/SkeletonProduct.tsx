import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

const SkeletonProduct = () => (
  <ContentLoader
    speed={2}
    width={170}
    height={180}
    viewBox="0 0 170 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <Rect x="7" y="148" rx="3" ry="3" width="170" height="10" />
    <Rect x="4" y="166" rx="3" ry="3" width="178" height="6" />
    <Rect x="3" y="-3" rx="0" ry="0" width="163" height="138" />
    <Rect x="118" y="20" rx="0" ry="0" width="6" height="21" />
  </ContentLoader>
);

export default SkeletonProduct;

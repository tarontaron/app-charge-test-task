import { memo } from 'react';
import styled from 'styled-components';
import { TBundle } from '../../types';
import { Theme } from '../../constants/theme';
import BundleProducts from './BundleProducts';
import BundleDescription from './BundleDescription';

type TProps = {
  data: TBundle;
  className?: string;
};

const BundleCard = ({ data, className }: TProps) => {
  const { price, available, products, maxAvailable } = data;

  return (
    <Container className={className}>
      <BundleProducts data={products} />
      <BundleDescription price={price} available={available} maxAvailable={maxAvailable} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${Theme.yellow};
  background-color: ${Theme.yellow};
`;

export default memo(BundleCard);

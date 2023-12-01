import { memo } from 'react';
import styled from 'styled-components';
import { TBundleProduct } from '../../types';

type TProps = {
  data: TBundleProduct;
};

const ProductItem = ({ data }: TProps) => {
  const { productImage, amount, productTextColor } = data;

  return (
    <Container>
      <ProductImage src={productImage} />
      <AmountLabel color={productTextColor}>{amount}</AmountLabel>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
`;

const AmountLabel = styled.p<{ color: string }>`
  font-weight: 600;
  margin-top: 5px;
  color: ${props => props.color};
`;

export default memo(ProductItem);

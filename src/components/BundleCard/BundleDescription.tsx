import styled from 'styled-components';
import { TBundlePrice } from '../../types';
import { Theme } from '../../constants/theme';

type TProps = {
  available: number;
  maxAvailable: number;
  price: TBundlePrice;
};

const BundleDescription = ({ available, maxAvailable, price }: TProps) => (
  <Container>
    <MetaLabel>Available {available}/{maxAvailable}</MetaLabel>
    <BuyButton>{price.currencySymbol}{price.amount}</BuyButton>
    <MetaLabel>04:35:23</MetaLabel>
  </Container>
);

const Container = styled.div`
  position: relative;
  padding: 6px 0;

  display: flex;
  justify-content: space-between;
`;

const MetaLabel = styled.p`
  flex: 1;
  font-weight: 600;
  color: ${Theme.white};
  
  &:last-child {
    text-align: right;
  }
`;

const BuyButton = styled.button`
  width: 110px;
  height: 35px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: -15px;

  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  border: 1px solid ${Theme.green};

  cursor: pointer;
  transition: .3s ease-in-out;
  background-color: ${Theme.green};

  &:hover {
    transform: scale(1.05);
  }
`;

export default BundleDescription;

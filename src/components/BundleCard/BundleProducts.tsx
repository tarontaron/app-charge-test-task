import { UIEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { TBundleProduct } from '../../types';
import { Theme } from '../../constants/theme';
import ProductItem from './ProductItem';

type TProps = {
  data: TBundleProduct[];
};

const BundleProducts = ({ data }: TProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toStart = () => {
    if (!containerRef.current) return;

    containerRef.current?.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Root>
      <Container ref={containerRef} onScroll={onScroll}>
        <Wrapper>
          {data.map((product, id) => (
            <ProductItem key={id} data={product} />
          ))}
          {isScrolled && <ScrollButton onClick={toStart}>To Start</ScrollButton>}
        </Wrapper>
      </Container>
      {isScrolled && <ScrollButton onClick={toStart}>To Start</ScrollButton>}
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;

const Container = styled.div`
  height: 150px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: ${Theme.purple};

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: fit-content;
  height: 100%;

  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const ScrollButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  position: absolute;
  top: 5px;
  right: 5px;

  cursor: pointer;
  font-weight: 600;
  color: ${Theme.white};
  border: 1px solid ${Theme.yellow};
  background-color: ${Theme.yellow};
`;

export default BundleProducts;

import { useEffect } from 'react';
import styled from 'styled-components';
import { useRandomDelayDataFetch } from './utils/dataFetch';
import { MOCK_DATA } from './constants/data';
import BundleCard from './components/BundleCard';

const App = () => {
  const { loading, data, fetchData, error } = useRandomDelayDataFetch(MOCK_DATA, [1500, 3500]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      {loading && 'Loading'}
      {data?.map((item, id) => (
        <BundleCard key={id} data={item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto 0;
`;

export default App;

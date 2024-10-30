import styled from 'styled-components';

export const CarPageWrapper = styled.div `
    background-color: #1f2a37;
`

export const PageContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 40px;
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #00bfa6;
  margin-bottom: 10px;
`;

export const Price = styled.h2`
  font-size: 2em;
  color: #ffd700;
  margin: 10px 0;
`;

export const Location = styled.p`
  font-size: 1.2em;
  color: #aaa;
  margin-bottom: 30px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 1.2em;
  color: #ddd;
  margin-bottom: 30px;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #bbb;
`;

export const Reviews = styled.div`
  margin-top: 30px;
  color: #ffd700;
  font-size: 1.1em;
`;

export const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.8;
  color: #ccc;
  margin-top: 30px;
`;
import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { api } from "../../utils";
import Card from "../../components/Card";
import { Container, Title } from "../container.styles";

const Trending = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .getTrending(type)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [type]);

  if (data?.length === 0) return null;
  return (
    <Container>
      <Title>Trending {type}</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => (
          <Card key={`trending-${type}-${i}`} index={i} {...item} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Trending;

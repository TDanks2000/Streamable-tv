import { View, Text, ScrollView, FlatList } from "react-native";
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

  const renderCard = (item, i) => {
    return <Card key={`trending-${type}-${i}`} index={i} {...item} />;
  };

  return (
    <Container>
      <Title>Trending {type}</Title>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => renderCard(item, index)}
        keyExtractor={(item, index) => `trending-${type}-${index}`}
      />
    </Container>
  );
};

export default Trending;

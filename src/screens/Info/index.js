import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Description,
  InfoSkeleton,
  InfoTop,
  MetaInformation,
} from "../../components";
import Similar from "../../containers/Similar";
import { api } from "../../utils";
import { Container, ScrollView } from "../screen.styles";
import { useBreakpoints } from "../../hooks";

const InfoScreen = ({ route }) => {
  const { isMobile } = useBreakpoints();
  const navigation = useNavigation();
  const { id, type } = route?.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getInfo(id, type).then((data) => setData(data));
  }, [id, type]);

  if (!data) return <InfoSkeleton />;
  return (
    <Container style={{ marginTop: 0 }}>
      <ScrollView vertical={true}>
        <InfoTop {...data} type={type} isMobile={isMobile} />
        <MetaInformation {...data} type={type} isMobile={isMobile} />
        <Description desc={data?.overview} isMobile={isMobile} />
        <Similar data={data?.similar?.results} isMobile={isMobile} />
      </ScrollView>
    </Container>
  );
};

export default InfoScreen;

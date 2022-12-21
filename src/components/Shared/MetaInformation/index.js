import React from "react";
import {
  Container,
  MetaContainer,
  MetaItem,
  MetaItemContainer,
  MetaItemIcon,
} from "./MetaInformation.styles";

const MetaInformation = (props) => {
  const { isMobile } = props;
  const rating = props?.vote_average?.toFixed(1) || "??";
  const releaseDate = props?.release_date
    ? new Date(props.release_date).getFullYear()
    : "??";
  const status = props?.status || "??";
  const type = props?.type || "??";
  return (
    <Container>
      <MetaContainer isMobile={isMobile}>
        <MetaItemContainer isMobile={isMobile}>
          <MetaItemIcon name={"star"} />
          <MetaItem isMobile={isMobile}>{rating}</MetaItem>
        </MetaItemContainer>
        <MetaItemContainer isMobile={isMobile}>
          <MetaItem isMobile={isMobile}>{releaseDate}</MetaItem>
        </MetaItemContainer>
        <MetaItemContainer isMobile={isMobile}>
          <MetaItem isMobile={isMobile}>{status}</MetaItem>
        </MetaItemContainer>
        <MetaItemContainer isMobile={isMobile}>
          <MetaItem isMobile={isMobile}>{type}</MetaItem>
        </MetaItemContainer>
      </MetaContainer>
    </Container>
  );
};

export default MetaInformation;

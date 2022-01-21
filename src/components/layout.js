import { Pane } from "evergreen-ui";
import React from "react";

export const ListLayout = props => {
  return (
    <Pane
      display="grid"
      gridGap="1rem"
      width="100%"
      border="0px"
      marginLeft="auto"
      marginRight="auto"
      justifyItems="center"
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fit,450px)"
      gridAutoFlow="dense"
    >
      {props.children}
    </Pane>
  );
};

export const ItemContainer = props => {
  return (
    <Pane
      elevation={2}
      float="left"
      width="auto"
      minWidth="450px"
      height="auto"
      display="grid"
      alignItems="left"
      border="default"
      gridGap="1fr"
      padding="1rem"
    >
      {props.children}
    </Pane>
  );
};

export const ContainerLayout = props => {
  return (
    <Pane
      width="100vw"
      position="relative"
      border="2px"
      marginLeft="auto"
      marginRight="auto"
      display="grid"
      gridGap="1rem"
      gridTemplateColumns="1fr"
    >
      {props.children}
    </Pane>
  );
};

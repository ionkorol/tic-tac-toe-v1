import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Icon, Pressable } from "native-base";
import { useAppDispatch, useAppSelector } from "store/store";
import { cellSet } from "store/slices/gameSlice";

interface Props {
  id: number;
}

const Cell: React.FC<Props> = (props) => {
  const { id } = props;
  const { board, turn, winner } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const handlePress = () => {
    // If cell is not available or game has ended
    if (board[id] || winner) {
      return;
    }

    dispatch(cellSet({ id, data: turn }));
  };

  const getIcon = (value: null | "X" | "O") => {
    if (value === "X") {
      return (
        <Icon as={FontAwesome} name="close" size="3xl" color="primary.500" />
      );
    } else if (value === "O") {
      return (
        <Icon
          as={FontAwesome}
          name="circle-o"
          size="2xl"
          color="secondary.500"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <Pressable
      flex={1}
      onPress={handlePress}
      borderRadius={10}
      backgroundColor="tertiary.700"
      justifyContent="center"
      alignItems="center"
    >
      {getIcon(board[id])}
    </Pressable>
  );
};

export default Cell;

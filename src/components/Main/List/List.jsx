import React from "react";
import {
  Avatar,
  IconButton,
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
} from "@material-ui/core";

import useStyles from "./styles";
import { Delete, MoneyOff } from "@material-ui/icons";
import { useContext } from "react";

import { ExpenseTrackerContext } from "../../../context/context";

const List = () => {
  const classes = useStyles();

  const globalState = useContext(ExpenseTrackerContext);
  console.log(globalState);

  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "Sep 30 2022",
    },
    {
      id: 2,
      type: "Expense",
      category: "Pets",
      amount: 50,
      date: "Sep 30 2022",
    },
    {
      id: 3,
      type: "Income",
      category: "Business",
      amount: 150,
      date: "Sep 30 2022",
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;

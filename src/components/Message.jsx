import React from 'react';
import { 
  Avatar, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  styled, 
  Typography 
} from '@material-ui/core';

const AvatarStyled = styled(Avatar)({
  margin: '0 0.5rem'
})
const ListItemTextStyled = styled(ListItemText)({
  textAlign: 'end'
})

export const Message = (props) => {
  const isMyMessage = props.senderId === props.userAuthId;
  console.log(isMyMessage);
  const time = new Date(props.time?.seconds*1000).toLocaleTimeString();
  return (
    <ListItem alignItems="flex-start">
      { 
        !isMyMessage && 
          <ListItemAvatar>
            <AvatarStyled alt={props.name} src={props.photo} />
          </ListItemAvatar>
      }
      { isMyMessage 
        ? <ListItemTextStyled
            primary={props.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="primary"
                >
                  {props.text}
                </Typography>
              <br/>
              {time}
              </React.Fragment>
            }
          />
        : <ListItemText
            primary={props.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="primary"
                >
                  {props.text}
                </Typography>
              <br/>
              {time}
              </React.Fragment>
            }
          />
      }
      { 
        isMyMessage && 
          <ListItemAvatar>
            <AvatarStyled alt={props.name} src={props.photo} />
          </ListItemAvatar>
      }
    </ListItem>
  );
};
import React from 'react';
import { Segment, Form, Comment, Header, Button } from 'semantic-ui-react';

const EventDetailedChat = () => {
  return (
    <div>
      <Segment>
        <Header></Header>
      </Segment>
      <Segment>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as="a">Marcos</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How Artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as="a" >Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>How Artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </div>
  );
};

export default EventDetailedChat;
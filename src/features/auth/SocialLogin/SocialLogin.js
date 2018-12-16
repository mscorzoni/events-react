import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SocialLogin = ({socialLogin}) => {
  return (
    <div>
      <Button type='button' style={{marginBottom: '10px' }}  fluid color='facebook'>
        <Icon name='facebook' /> Login with facebook
      </Button>
      <Button  onClick={() => socialLogin('google') } type="button" fluid color="google plus">
        <Icon name='google plus' /> Login with Google Plus
      </Button>
    </div>
  );
};

export default SocialLogin;
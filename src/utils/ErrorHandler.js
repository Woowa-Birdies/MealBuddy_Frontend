import { UserCancelError } from '@utils/Error';

const handleError = (error) => {
  if ((!error) instanceof UserCancelError) {
    console.error('Error: ', error.message);
  }
};

export default handleError;

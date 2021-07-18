import { access } from 'fs/promises';
import { constants } from 'fs';

// checks if the file exists at the path specified
const fileExist = async (Path: string): Promise<boolean> => {
    try {
      await access(Path, constants.R_OK | constants.W_OK);
      console.log('Success can access the file');
      return true;
    } catch (err) {
        console.log(`Could not access. Error: ${err}`);
        return false;
    }
  };

  export default fileExist;
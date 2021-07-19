//import { access } from 'fs/promises';
import {promises as fsPromises} from 'fs';
import { constants } from 'fs';

// checks if the file exists at the path
const fileExist = async (Path: string): Promise<boolean> => {
    try {
      await fsPromises.access(Path, constants.R_OK | constants.W_OK);
      console.log('Success can access the file');
      return true;
    } catch (err) {
        console.log(`Could not access. Error: ${err}`);
        return false;
    }
  };

  export default fileExist;
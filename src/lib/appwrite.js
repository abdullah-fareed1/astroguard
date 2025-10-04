// import { Client, Account, Databases } from "appwrite";

// const client = new Client()
//     .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
//     .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// const account = new Account(client);
// const databases = new Databases(client);

// export { client, account, databases };
// export { ID } from 'appwrite';


import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('68dff8b30006d009926a'); // Replace with your project ID

 const account = new Account(client);
 const storage = new Storage(client);


export { client, account, storage };
export { ID } from 'appwrite';

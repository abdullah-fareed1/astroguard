// import { Client, Account, Databases } from "appwrite";

// const client = new Client()
//     .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
//     .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// const account = new Account(client);
// const databases = new Databases(client);

// export { client, account, databases };
// export { ID } from 'appwrite';


import { Client, Account, Storage, ID } from 'appwrite';

// Create client instance
const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1') // Your API endpoint
    .setProject('68dff8b30006d009926a'); // Your project ID

// Services
const account = new Account(client);
const storage = new Storage(client);

export { client, account, storage, ID };

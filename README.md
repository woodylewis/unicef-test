# UNICEF - Test
This project consists of two bodies of code: front end (React) and server (Node.js)

In each folder's root directory, run the npm install command, and then npm run start.

## Front End
The React front end app makes RESTful API calls to the microservices on the server.

An optimal architecture will separate at least one component from the App.tsx file, along with any appropriate handling of props.

The MongoDB database has been pre-populated with three Organizations. Extended functionality here would include a form to input various fields for each organization as designed.

Clicking the "Donate" button sends a transaction with the pre-defined amount of 100. This does not correspond to the actual amount of ETH being sent to the receiving wallet on the Sepolia testnet.

## Server
The Node server follows the established pattern of controllers

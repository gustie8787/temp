# Frontend README.md

# My Fullstack App - Frontend

This is the frontend part of the My Fullstack App, built using Angular. The application features a modern chat interface similar to ChatGPT, complete with NielsenIQ branding, persona buttons, and a conversation listing.

## Features

- **Chat Interface**: A user-friendly chat interface for real-time messaging.
- **Persona Buttons**: Five persona buttons that allow users to select different personas for the chat.
- **Conversation Listing**: A section that displays previous conversations for easy access.

## Project Structure

- `src/app/components/chat`: Contains the chat component files.
- `src/app/components/persona-buttons`: Contains the persona buttons component files.
- `src/app/components/conversation-listing`: Contains the conversation listing component files.
- `src/app/app.component.*`: The main application component files.
- `src/assets`: Static assets such as images and icons.
- `src/environments`: Environment-specific settings for development and production.
- `Dockerfile`: Instructions to build a Docker image for the Angular frontend.
- `package.json`: Lists dependencies and scripts for the frontend.

## Development

To run the frontend application locally, follow these steps:

1. Install dependencies:
   npm install

2. Start the development server:
   ng serve

3. Open your browser and navigate to `http://localhost:4200`.

## Docker

To build and run the frontend using Docker, use the following commands:

1. Build the Docker image:
   docker build -t my-frontend .

2. Run the Docker container:
   docker run -p 4200:80 my-frontend

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
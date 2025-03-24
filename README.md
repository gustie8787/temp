# My Fullstack App

This project is a full-stack application featuring an Angular frontend and a Python FastAPI backend. The application includes a modern chat interface with NielsenIQ branding, allowing users to interact with different personas and view conversation history.

## Project Structure

```
my-fullstack-app
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   │   ├── chat
│   │   │   │   ├── persona-buttons
│   │   │   │   └── conversation-listing
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   └── app.component.ts
│   │   ├── assets
│   │   ├── environments
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.scss
│   ├── angular.json
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.app.json
│   └── tsconfig.json
├── backend
│   ├── app
│   │   ├── api
│   │   ├── core
│   │   ├── main.py
│   │   └── models
│   ├── Dockerfile
│   ├── requirements.txt
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Features

- **Chat Interface**: A modern chat UI that allows users to send and receive messages.
- **Persona Selection**: Five persona buttons that enable users to choose different interaction styles.
- **Conversation Listing**: A component that displays previous conversations for easy access.

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-fullstack-app
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the frontend at `http://localhost:4200` and the backend at `http://localhost:8000`.

## Deployment

This application can be deployed using Docker and Kubernetes. Ensure that the Dockerfiles for both the frontend and backend are correctly configured for your production environment.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.# temp

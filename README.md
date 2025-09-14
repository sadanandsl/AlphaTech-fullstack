
## Getting Started

### Prerequisites

- Node.js & npm
- Python 3.x
- pip

### Backend Setup (Django)

1. Navigate to the `server` directory:
    ```sh
    cd server
    ```
2. (Optional) Create and activate a virtual environment:
    ```sh
    python -m venv ../env1
    # Windows:
    ../env1/Scripts/activate.bat
    ```
3. Install dependencies:
    ```sh
    pip install -r ../requirements.txt
    ```
4. Run migrations:
    ```sh
    python manage.py migrate
    ```
5. Start the backend server:
    ```sh
    python manage.py runserver
    ```

### Frontend Setup (React)

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the frontend development server:
    ```sh
    npm start
    ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Aptitude resources and practice
- Programming challenges
- Company-specific preparation
- Practice tests and progress tracking
- Intelligent question generation: Questions are generated automatically by AI based on the student's performance, providing personalized practice and adaptive learning.

## Contributing

Feel free to open issues or submit pull requests for improvements.

## License

This project is licensed under the MIT License.
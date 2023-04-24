# Plannig Pocker project

## Authors
ATWI Mohamad (ER1441)
KHALIFE Hassan (ER1453)
YOUSSEF Mostapha (ER1440)


## Installation manual
### Prerequisites
- Node.js (version 14.x or later)
- PHP (version 7.3 or later)
- Composer

### Installation Steps
- Clone the repository:
  - Copy code
      - git clone https://github.com/Mohamad-atwi/Plannig-pocker.git
- Navigate to the backend folder and install the dependencies:
  - Copy code
      - cd backend
      - composer install
- Create a copy of the .env.example file and name it .env:
  - Copy code
      - cp .env.example .env
- Create a new MySQL database for the project and update the DB_DATABASE, DB_USERNAME, and DB_PASSWORD variables in the .env file accordingly.
- Run the database migrations to create the necessary tables:
  - Copy code
      - php artisan migrate
- (Optional) Run the database seeder to populate the database with some sample data:
  - Copy code
      - php artisan db:seed
- Start the Laravel server:
  - Copy code
      - php artisan serve
- Open a new terminal window, navigate to the frontend folder and install the dependencies:
  - Copy code
      - cd ../frontend
      - npm install
- Start the React server:
  - Copy code
      - npm start
- Access the application by navigating to http://localhost:3000 in your browser.

### Additional Notes

- To build the React application for production, run the following command from the frontend folder:
  - Copy code
      - npm run build
  - The built files will be located in the frontend/build folder.


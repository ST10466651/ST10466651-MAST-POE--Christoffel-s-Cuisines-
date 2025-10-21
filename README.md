Christoffel's Cuisines

Description

Christoffel’s Cuisines is a modern, interactive food menu and ordering application built for restaurants to manage their dishes efficiently. The platform allows staff to update meal descriptions, prices, and categories with ease, ensuring customers always have access to accurate menu information.

Features

Fully dynamic menu with categories (Breakfast, Lunch, Dinner, Drinks, etc.)

Edit meal descriptions and prices in real-time

Filter meals by name and meal type

Smooth navigation between main menu and subpages

Responsive layout for mobile and desktop usage

Clean, semi-professional dark theme design

Installation

Clone the repository:

git clone https://github.com/yourusername/christoffels-cuisines.git


Navigate to the project folder:

cd christoffels-cuisines


Install dependencies:

npm install


Run the application:

npm start


Open in your preferred browser or use Expo Go for mobile testing.

Usage

Navigate through the menu categories using the bottom navigation bar.

Click on a meal to update its description or price.

Only meals that match both the name and meal type will be updated.

Subpages hide the main navigation for a cleaner interface; use the back button to return.

Technologies Used

React Native – For building the app interface

TypeScript – Strongly typed code for safer updates

Expo – Simplified mobile testing and deployment

React Navigation – For smooth navigation between pages

How It Works

Menu items are stored in an array grouped by meal type.

When a user updates a meal, the app searches for matching name and meal type.

Only the description and price are updated; other details remain untouched.

Changes reflect immediately across the app due to dynamic state handling.

Contributing

Contributions are welcome!

Fork the repository

Create a new branch for your feature (git checkout -b feature-name)

Make your changes and commit (git commit -m "Add feature")

Push to your branch (git push origin feature-name)

Open a pull request

License

MIT License – feel free to use, modify, and distribute this project.
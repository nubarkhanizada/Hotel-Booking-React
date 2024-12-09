# Hotel Booking + React.js + JavaScript


This project is a dynamic hotel booking platform where users can explore various hotels, check their details, and make reservations. The site features five main pages: Home, Hotels, Details, Bookings, and Not Found.

## Pages

- **Home Page:** The landing page includes a hero section, popular destinations, and hotels. Hotel data is dynamically fetched from an API to populate the content.
- **Hotels Page:** Displays a list of hotels in card format, showing key information (name, price, location) dynamically fetched from the API. Clicking a hotel card leads to the hotel’s Details page.
- **Details Page:** Provides detailed information about the selected hotel, including a banner, room types, amenities, photos, and more. The “Book Now” button triggers a modal for reservation, where users can input their booking details, such as check-in/check-out dates, room type, and number of guests. Additional options like airport transfer are also available. The booking information is saved in localStorage.
- **Bookings Page:** Displays the user's booking history, pulling data from localStorage.
- **Not Found:**

## Technologies

- **Frontend:**
  - **React.js** for building dynamic user interfaces.
  - **React Router** for routing between pages.
  - **React Hooks & Context API** for managing state across the app.
  - **SCSS, CSS, and Bootstrap** for responsive styling across desktop, tablet, and mobile devices.
  - **Axios** for API integration, fetching hotel data dynamically.
  - **React-Slick** for the slider component to showcase images.

- **Storage:**
  - **localStorage** for saving user booking data.

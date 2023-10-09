# project-2-restaurant-app

1. **router**
   - route with all pages.
   - navigate with route path name.

2. **store**
   - Using the pinia module for variable management:
     - users information management
     - restaurant information management

3. **views**
   - Pages with user role:
     - pages on member role
     - pages on restaurant user role
   - Redirecting to the pages on user role 
     - role: 1 -> Member
     - role: 2 -> Restaurant User

4. **components**
   - Components for all pages.
     - Title
     - Input
     - Button
     - Selection Numbe
     - Confirm messages
     - Restaurant Details for member and restaurant user
     - Reservation

5. **api**
   - Show the Apis for the User, Restaurant, Reservation
     - auth
     - reservation
     - restaurant
   - Request Methods
     - POST
     - PUT
     - DELETE
     - GET

## Project setup

1. Install project dependencies:
```
npm install
npm install pinia
```

2. Compile and enable hot-reloading for development:
   ```
   npm run serve
   ```

3. Open your web browser and navigate to the provided local server address (usually http://localhost:8080) to access project-2-restaurant-app,

4. Additional Commands:
### For Testing
```
npm run test:unit
```
### Lints and fixes files
```
npm run lint
```

### Build project
```
npm run build
```
The created dist folder will be deployed on hosting server.
## Technologies Used
- Vue.js
- HTML
- CSS(SCSS)
- JavaScript
- Pinia

## Acknowledgements
- This project was developed as part of learning Vue.js and web development at Vanier Cegep. Special thanks to Professor Peter Ng and other various online resources for providing valuable guidance and tutorials.

## For an Inquiries
- Please contact Pierre, at 2295472@edu.vaniercollege.qc.ca

## Get started

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the app

   ```bash
    yarn start
   ```

   Please Note:

3. I added CORS to the python server code to enable browser acces from an url
4. Created custom hooks associated with each functionality
5. Created helper functions for code organization and future code re-use
6. generarted graphql types
7. Due to time i could not do the following and some improvements will be needed:
   - set up Redux library or context API for state management to handle all the API data
   - Create login instance (mock) on the front end and server side since this is a finance application and needs authenticated users when doing post requests.
   - create custom styles for possible re-use
   - Including errror boundaries for code robustness
   - Custom loader inline with company colors
   - put global constants for font size, colors as well as strings in one place for easy debugging and possible re-use.

# Workoast Wheels
### Easily find and reserve vehicles at your convenience, while saving money.

# Product Preview
![Screenshot](https://i.ibb.co/XrN3QnxQ/image.png)

# A short summary of my decisions and trade-offs that I navigated

1. I read the README file to get a good idea of the structure used in the project, such as the framework, libraries, and folders.  
2. I navigated through the existing functionalities and briefly studied how the Front-End was designed using tRPC to create APIs in a practical way. Since it is a small application, I kept the strategy of continuing to work with tRPC and formContext. I reused some interfaces that were already defined previously as well. I analyzed that the React Hook Form was used to manage forms and share them, avoiding prop drilling.  
3. I adopted a light (minimalist) theme following the color scheme of the Workoast Wheels logo.  
4. Following the first requirement raised, I started implementing the AdditionalFilters component.  
4.1 I utilized the components already provided by the catalog (app/components/ui).  
4.2 For each component used like Slider and Checkbox, I used setValue through useFormContext so that they would be updated and reflected by the application, as the form context was being shared and watched.  
5. The VehicleList that was already making a call to trpc.vehicles.search was broken into another component called VehicleListTable to leave the code cleaner and easier to understand. The idea was the same, that is, I used Table components and also modularized the PaginationButtons.






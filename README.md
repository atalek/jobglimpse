# JobGlimpse - Job Board

![Landing page](https://res.cloudinary.com/dkofkuquf/image/upload/v1705704467/nuxtshop/syreihou08lt7prdkmic.png)

This project is a Job Board built with **Nuxt 3**, **Tailwind CSS**, **Turso
SQLite** for the database, **Stripe** for payment integration, and
**Cloudinary** for image upload.

## Features

- **Responsive Design:** The Job Board is designed to provide a seamless
  experience across various devices and screen sizes.

- **Job Listings:** Users can browse through a curated list of job listings,
  each showcasing essential details about the job, such as title, location,
  tags, and more.

- **Job Creation:** Employers can create new job listings by providing relevant
  information, including title, location, tags, company name, logo, salary
  details, and more.

- **Payment Integration:** The project integrates Stripe for secure and seamless
  payment processing. Users can promote their job listings for enhanced
  visibility by opting for a premium promotion feature.

- **Image Upload:** Employers can upload company logos through Cloudinary,
  ensuring a visually appealing presentation of their job listings.

## Technologies Used

- **Nuxt 3:** A powerful framework for building modern web applications with
  Vue.js.

- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom
  designs.

- **Turso SQLite:** A lightweight, SQLite database for storing and retrieving
  job listing data.

- **Stripe:** A secure and reliable platform for online payments.

- **Cloudinary:** A cloud-based image and video management service for efficient
  handling of uploaded logos.

![Create a job listing ](https://res.cloudinary.com/dkofkuquf/image/upload/v1705704474/nuxtshop/m2npqwo766nsfgnreggl.png)

## Setup

1. **Clone the repository.**

   ```bash
   git clone https://github.com/atalek/jobglimpse.git

   ```

2. **Navigate to the project directory.**

   ```bash
   cd jobglimpse

   ```

3. **Install dependencies.**

   ```bash
   npm install

   ```

4. **Configure environment variables.**

- Create a `.env` file in the root of the project.
- Add the necessary environment variables for Stripe and Cloudinary.

  ```env
  #Turso
  TURSO_DB_URL=your_turso_db_url
  TURSO_DB_TOKEN=your_turso_auth_token

  # Stripe
  STRIPE_PK=your_stripe_public_key
  STRIPE_SK=your_stripe_secret_key
  STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

  # Cloudinary
  CLOUDINARY=your_cloudinary_base_url
  CLOUDINARY_NAME=your_cloud_name
  CLOUDINARY_FOLDER=your_cloudinary_folder

  BASE_URL=base_url
  ```

5. **Run the migration and development server.**

   ```bash
   npm run db-push
   npm run dev

   ```

6. **Open your browser and visit http://localhost:3000 to view the Job Board.**

## Live Version

[https://jobglimpse.atalek.com/](https://jobglimpse.atalek.com/)

## Author

Github [@atalek](https://github.com/atalek) <br> Linkedin:
[@Aleksandar Atanasovski](https://www.linkedin.com/in/aleksandar-atanasovski-16b123263/)
<br> Portfolio: [https://www.atalek.com/](https://www.atalek.com/)

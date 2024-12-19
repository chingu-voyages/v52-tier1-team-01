# SolarApp

Welcome to **SolarApp**, a project aimed at streamlining solar panel installation evaluations for the residents of Los Angeles. This platform is part of a local initiative to promote sustainable energy solutions and combat global warming.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Team](#team)
6. [Acknowledgments](#acknowledgments)

---

## Overview

**SolarApp** is a single-page application (SPA) designed to facilitate the scheduling of solar panel evaluation appointments for residents and assist city employees in managing and optimizing these visits.

### Key Roles:

- **Resident:**
  - Submit a request for a solar panel evaluation.
  - Provide details such as contact information, address, and preferred timeslot.
  - Receive confirmation and appointment updates.

- **City Hall Employee:**
  - View and manage resident requests.
  - Export schedules in downloadable formats (PDF).

---

## Features

### Resident Interface:

- Submit evaluation requests via an intuitive form.
- Persistent storage of requests using Supabase DB.
- Cancel appointments through a dedicated contact number.

### Admin Interface:

- Login system for city employees username passowrd validation via a .env file).
- View and manage all appointment requests.
- Generate and export visit schedules.


---

## Getting Started

### Prerequisites:

- Web browser (Chrome, Firefox, Edge, or Safari).
- Node.js and npm (for development).
- Clone the repository: `git clone https://github.com/chingu-voyages/v52-tier1-team-01`

### Installation:

1. Navigate to the project directory: `cd SolarApp`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

---

## Usage

### Resident:

1. Navigate to the home page.
2. Fill out the form with your details and preferred timeslot.
3. Submit your request and await confirmation.

### Admin:

1. Navigate to `/admin` and log in using an approved email.
2. View all resident requests.
3. Generate schedule and export it if needed.

---

## Team

- **Amanda:** [GitHub](https://github.com/Amanda774) / [LinkedIn](https://linkedin.com/in/liaccountname)
- **Soumyajit Sinha:** [GitHub](https://github.com/soumyajit-siliguri) / [LinkedIn](https://www.linkedin.com/in/soumyajit-sinha-7652b7189/)
- **Yujeong:** [GitHub](https://github.com/icimz8)

---

Make your solar journey easier with **SolarApp**!

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

---

## Acknowledgments

We extend our gratitude to the Chingu community for their continuous support and guidance. Special thanks to Google, Ethereal, and IndexedDB for their invaluable tools and resources.

---

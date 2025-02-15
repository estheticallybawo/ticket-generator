"use client"
import React from 'react';

import { FunctionComponent } from 'react';
import styles from './About.module.css';



const About:FunctionComponent = () => {
  	return (

    		<div className={styles.about}>
      			<div className={styles.about1}>
        				<div className={styles.eventTicketBookingContainer}>
          					<p className={styles.eventTicketBooking}>Event Ticket Booking UI – Open Source Practice Project 🎟️</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>Overview</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>{`Flow & Features`}</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>1️⃣ Ticket Selection</p>
          					<p className={styles.eventTicketBooking}>{`	•	Users can browse available tickets (Free & Paid).`}</p>
          					<p className={styles.eventTicketBooking}>	•	Ticket options are displayed in a list or card view.</p>
          					<p className={styles.eventTicketBooking}>	•	For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee details.</p>
          					<p className={styles.eventTicketBooking}>	•	For Paid Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>2️⃣ Attendee Details Form</p>
          					<p className={styles.eventTicketBooking}>	•	Users input their Name, Email, and optional Phone Number.</p>
          					<p className={styles.eventTicketBooking}>	•	Profile picture upload option with preview functionality.</p>
          					<p className={styles.eventTicketBooking}>	•	Ticket summary is visible to ensure users review their details before submission.</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>3️⃣ Payment or Success Page</p>
          					<p className={styles.eventTicketBooking}>	•	If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</p>
          					<p className={styles.eventTicketBooking}>	•	If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.</p>
          					<p className={styles.eventTicketBooking}>	•	Upon successful booking, users should receive:</p>
          					<p className={styles.eventTicketBooking}>	•	A visual ticket preview with a unique QR Code.</p>
          					<p className={styles.eventTicketBooking}>	•	An option to download the ticket as PDF or save it to their device.</p>
          					<p className={styles.eventTicketBooking}>	•	An email confirmation containing ticket details.</p>
          					<p className={styles.eventTicketBooking}>How to Build This 🚀</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>This UI can be implemented using:</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>📌 Frontend (Next.js or React)</p>
          					<p className={styles.eventTicketBooking}>	•	Component Breakdown:</p>
          					<p className={styles.eventTicketBooking}>	•	TicketCard.tsx → Displays ticket details</p>
          					<p className={styles.eventTicketBooking}>	•	AttendeeForm.tsx → Captures user details</p>
          					<p className={styles.eventTicketBooking}>	•	PaymentModal.tsx → Handles payment processing</p>
          					<p className={styles.eventTicketBooking}>	•	SuccessScreen.tsx → Shows the final ticket preview</p>
          					<p className={styles.eventTicketBooking}>	•	State Management: React’s Context API, Zustand, or Redux (if needed).</p>
          					<p className={styles.eventTicketBooking}>	•	File Handling: Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL().</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>📌 Backend (Optional)</p>
          					<p className={styles.eventTicketBooking}>	•	If persistence is required, a backend can be built using:</p>
          					<p className={styles.eventTicketBooking}>{`	•	Node.js & Express or Firebase Functions`}</p>
          					<p className={styles.eventTicketBooking}>	•	Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records</p>
          					<p className={styles.eventTicketBooking}>&nbsp;</p>
          					<p className={styles.eventTicketBooking}>📌 Payment Integration</p>
          					<p className={styles.eventTicketBooking}>	•	For paid events, developers should integrate:</p>
          					<p className={styles.eventTicketBooking}>	•	Stripe Checkout (for international transactions)</p>
          					<p className={styles.eventTicketBooking}>	•	Paystack or Flutterwave (for African users)</p>
          					<p className={styles.eventTicketBooking}>What You’ll Learn 🧑‍💻</p>
          					<p className={styles.eventTicketBooking}>{`	•	File handling & validation (profile picture uploads).`}</p>
          					<p className={styles.eventTicketBooking}>	•	Dynamic UI updates based on ticket selection.</p>
          					<p className={styles.eventTicketBooking}>	•	Persisting bookings using local state or a backend.</p>
          					<p className={styles.eventTicketBooking}>	•	Integrating payment gateways for ticket purchases.</p>
          					<p className={styles.eventTicketBooking}>{`	•	Generating & validating QR Codes for event check-in (Advanced).`}</p>
          					<p className={styles.eventTicketBooking}>Need Help? Reach Out! 💬</p>
            						</div>
                                        <div className={styles.enjoy}>💛 Enjoy</div>
                                        <div className={styles.container}>
                                             <div className={styles.button}>
                                                  <a href="https://www.figma.com/community/file/1470800949188681164" target="_blank" rel="noopener noreferrer" className={styles.button1}>Design File</a>
                                             </div>
                                             <div className={styles.button2}>
                                                  <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className={styles.button1}>Github code</a>
                                             </div>
                                        </div>
                                        </div>
                                        </div>
                                        )};
          					export default About;
          					
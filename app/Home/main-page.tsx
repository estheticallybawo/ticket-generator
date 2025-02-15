"use client"
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useTickets } from '../context/TicketContext';
import UploadImage from "../utils/UploadImage";
import Image from 'next/image';




const Home: React.FC = () => {

  const { selectedTicket, setSelectedTicket } = useTickets();
  const { ticketCount, setTicketCount } = useTickets();
  const [step, setStep] = useState(1);
  const [showTicket, setShowTicket] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const { setAttendeeData, attendeeData } = useTickets();



  // Ticket options
  const tickets = [
    { price: "Free", type: "Regular Access" },
    { price: "$150", type: "VIP Access" },
    { price: "$800", type: "VVIP Access" },
  ];

  const handleCancel = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) event.preventDefault();
    setTicketCount(1);
    setSelectedTicket(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("selectedTicket");
      localStorage.removeItem("ticketFormData");
    };
  };


  const handleImageUpload = async (file: File): Promise<void> => {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  const handleNextClick = () => {
    if (!selectedTicket) {
      alert("Please select a ticket type.");
      return;
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };



  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const savedFormData = localStorage.getItem("ticketFormData");
      return savedFormData
        ? JSON.parse(savedFormData)
        : {
          name: "",
          email: "",
          specialRequest: "",
          avatar: "https://api.cloudinary.com/v1_1/duv9p9dfw/image/upload",
        };
    }
    return {
      name: "",
      email: "",
      specialRequest: "",
      avatar: "https://api.cloudinary.com/v1_1/duv9p9dfw/image/upload",
    }
  });


  // State for errors and ticket visibility
  const [errors, setErrors] = useState({
    name: " ",
    email: " ",
    avatar: " ",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setAttendeeData({ ...attendeeData, [id]: value });
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
    if (typeof window !== "undefined") {
      localStorage.setItem("ticketFormData", JSON.stringify(formData))
    };
  };

  // Form validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: " ", email: " ", avatar: " " };

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;

    }
    setErrors(newErrors);
    return isValid;
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep((prevStep) => prevStep + 1);
      setShowTicket(true);

    }
  };



  // Load data 
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, []);
  useEffect(() => {
    if (selectedTicket && typeof window !== "undefined") {
      localStorage.setItem("selectedTicket", selectedTicket);
    }
  }, [selectedTicket]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTicket = localStorage.getItem("selectedTicket");
      if (storedTicket) {
        setSelectedTicket(storedTicket);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTicket = localStorage.getItem("selectedTicket");
      if (savedTicket) setSelectedTicket(savedTicket);
    }
  }, []);

  useEffect(() => {
    const savedCount = localStorage.getItem("ticketCount");
    if (savedCount) setTicketCount(parseInt(savedCount));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ticketCount", ticketCount.toString());
    }
  }, [ticketCount]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ticketFormData", JSON.stringify(formData));
    }
  }, [formData]);

  const handleTicketSelect = (ticketType: string) => {
    setSelectedTicket(ticketType);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedTicket", ticketType); // Store in local storage
    };
  };


  return (
    <div className={styles.multiStepForm}>
      {step === 1 && (
        <div className={styles.formContent}>
          <div className={styles.forms}>
            <div className={styles.header}>
              <div className={styles.sectionTitleParent}>
                <div className={styles.sectionTitle}>
                  <div className={styles.heading}>Ticket Selection</div>
                </div>
                <div className={styles.text}>Step 1/3</div>
              </div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar} />
              </div>
            </div>
            <div className={styles.sectionTitleGroup}>
              <div className={styles.sectionTitle1}>
                <div className={styles.main}>
                  <div className={styles.heading1}>Techember Fest &rdquo;25</div>
                  <div className={styles.text1}>Join us for an unforgettable experience at Techember Fest &rdquo;25! Secure your spot now.</div>
                </div>
                <div className={styles.deets}>
                  <div className={styles.text2}>📍 Ikoyi, Lagos</div>
                  <div className={styles.text3}>| |</div>
                  <div className={styles.text2}>March 15, 2025 | 7:00 PM</div>
                </div>
              </div>
              <div className={styles.progressContainer1} />
              {/* Ticket Selection */}
              <div className={styles.sec}>
                <div className={styles.label}>Select Ticket Type:</div>
                <div className={styles.input}>
                  <div className={styles.radioButton}>
                    {tickets.map((ticket, index) => (
                      <div
                        key={index}
                        className={`${styles.radio5} ${styles.sec} ${selectedTicket === ticket.type ? styles.selected : ""
                          }`}
                        onClick={() => handleTicketSelect(ticket.type)}

                      >
                        <div className={styles.button}>{ticket.price}</div>
                        <div className={styles.sec}>
                          <div className={styles.button1}>{ticket.type}</div>
                          <div className={styles.button2}>20/52 </div></div>
                      </div>

                    ))}
                  </div>
                </div>
                <div className={styles.sec}>
                  <div className={styles.label}>Number of Tickets</div>
                  <select
                    id='dropdowm-option'
                    className={`${styles.dropdownMenu} ${styles.selectOne}`}
                    value={ticketCount}
                    onChange={(e) => setTicketCount(Number(e.target.value))}
                  >
                    {[...Array(9)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

              </div>
              <div className={styles.buttons}>
                <button className={styles.button9} onClick={handleCancel}>
                  <div className={styles.text2}>Cancel</div>
                </button>
                <button className={styles.button11} onClick={handleNextClick}>
                  <div className={styles.text2}>Next</div>
                </button>
              </div>
            </div>
          </div>
        </div>

      )}

      {step === 2 && (
        <form className={styles.formContent1} id="TicketForm" onSubmit={handleSubmit}>
          <div className={styles.header}>
            <div className={styles.sectionTitleParent}>
              <div className={styles.sectionTitle}>
                <label id="TicketForm" className={styles.heading}>Attendee Details</label>
              </div>
              <div className={styles.text}>Step 2/3</div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar1} />
            </div>
          </div>

          {/* Avatar Upload */}
          <div className={styles.sec}>
            <UploadImage
              onImageUpload={handleImageUpload}
              currentImage={attendeeData.avatar}
            />
            {errors.avatar && (
              <p className={styles.error} role="alert">
                {errors.avatar}
              </p>
            )}
          </div>

          {/* Name Field */}
          <div className={styles.sec}>
            <div className={styles.label} id="name">Enter your name *</div>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              value={attendeeData.name}
              onChange={handleChange}
              className={styles.textInput}
              aria-required="true" />
            {errors.name && <p className={styles.error} role="alert">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className={styles.sec}>
            <div className={styles.label} id="email">Enter your email *</div>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              value={attendeeData.email}
              onChange={handleChange}
              className={styles.textInput}
              aria-required="true" />
            {errors.email && <p className={styles.error} role="alert">{errors.email}</p>}
          </div>

          {/* Special Request */}
          <div className={styles.sec}>
            <div className={styles.label} id="specialRequest">Special Request</div>
            <textarea
              id="specialRequest"
              placeholder="Enter any special requests"
              value={attendeeData.specialRequest}
              onChange={handleChange}
              className={styles.textInput2} />
          </div>

          {/* Buttons */}
          <div className={styles.buttons}>
            <button className={styles.button9} onClick={handleBack}>
              <div className={styles.text2}>Back</div></button>
            <button type="submit" onClick={handleSubmit} className={styles.button11}>
              {showTicket}
              <div className={styles.text2}>Get My Ticket</div>
            </button>
          </div>
        </form>
      )}


      {step === 3 && (
        <div className={styles.formContent}>
          <div className={styles.header}>
            <div className={styles.sectionTitleParent}>
              <div className={styles.sectionTitle}>
                <div className={styles.heading}>Ready</div>
              </div>
              <div className={styles.text1}>Step 3/3</div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar2} />
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.sectionTitle1}>
              <div className={styles.heading}>Your Ticket is Booked!</div>
              <div className={styles.text2}>
                <span>Check your email for a copy or you can </span>
                <b>download</b>
              </div>
            </div>
          </div>

          <div className={styles.form}>
            <div className={styles.ticket}>
              <div className={styles.ticketImage}>

                <div className={styles.container}>
                  <div className={styles.main1}>
                    <div className={styles.eventitledate}>
                      <div className={styles.eventTitle}>Techember Fest &rdquo;25</div>
                      <div className={styles.secAddress}>
                        <div className={styles.address}>📍 04 Rumens road, Ikoyi, Lagos</div>
                        <div className={styles.address}>📅 March 15, 2025 | 7:00 PM</div>
                      </div>
                    </div>

                    <div className={styles.userimgIcon}>
                      {uploadedImage && (
                        <Image
                          alt="Uploaded Image"
                          src={uploadedImage}
                          width={150}
                          height={150}
                        />
                      )}
                    </div>

                    <div className={styles.context}>
                      <div className={styles.secInfo}>
                        <div className={styles.cellName}>
                          <div className={styles.labelName}>Your Name</div>
                          <p className={styles.valueName}>{formData.name || "Esther tsoso"} </p>
                        </div>
                        <div className={styles.cell1}>
                          <div className={styles.labelEmail}>Your Email</div>
                          <p className={styles.valueEmail}>{formData.email || "user@email.com"}</p>
                        </div>
                      </div>
                      <div className={styles.secInfoType}>
                        <div className={styles.cell}>
                          <div className={styles.labelType}>Ticket Type</div>
                          <div className={styles.valueType}>{selectedTicket || "VIP"}</div>
                        </div>
                        <div className={styles.cell1}>
                          <div className={styles.labelFor}>Ticket for</div>
                          <p className={styles.valueFor}>{ticketCount || "1"}</p>
                        </div>
                        <div>
                        </div>
                      </div>
                      <div className={styles.sec2}>
                        <div className={styles.label4}>Special request?</div>
                        <p className={styles.value4}>{formData.specialRequest || "None"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.barcode}>
                  <Image
                    alt="barcode"
                    src="/barcode.png"
                    width={236}
                    height={68}></Image>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <button className={styles.button9}>
              <p className={styles.text2}> Book Another Ticket </p></button>
            <button className={styles.button11} onClick={handleCancel}>
              <p className={styles.text2}>Download Ticket </p> </button>
          </div>
        </div>

      )
      }
    </div >
  );
};

export default Home;




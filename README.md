# CareMate - Comprehensive Healthcare Management Platform

## 🌐 Live Application
**[https://carematehealth.vercel.app/](https://carematehealth.vercel.app/)**

## 📋 Overview

CareMate is a comprehensive healthcare management platform that bridges the gap between patients, doctors, and hospitals. The platform provides real-time hospital bed availability, intelligent disease prediction using machine learning, doctor appointment booking, OPD queue management, and seamless integration across multiple dashboards.

## ✨ Key Features

### 🏥 For Patients
- **Find Hospitals**: Locate nearby hospitals using Google Maps API integration with distance calculation and route navigation
- **Bed Availability**: Real-time hospital bed search and booking system
- **Doctor Discovery**: Browse and book appointments with doctors based on specialization, availability, and ratings
- **AI Disease Prediction**: ML-powered disease prediction using image analysis (X-Ray, Brain Tumor, Breast Cancer, Lung Cancer, Blood analysis) and statistical models (Heart disease, Parkinson's, Kidney stones)
- **OPD Queue Management**: Check real-time queue position and estimated wait times
- **Appointment Tracking**: View and manage scheduled appointments with appointment history
- **Medical Assistant**: AI-powered therapy and medical assistance with automated booking

### 👨‍⚕️ For Doctors
- **Profile Management**: Manage credentials, specialization, schedule, and availability
- **Appointment Management**: View scheduled appointments and patient information
- **Patient Reports**: Access patient medical reports and prediction results
- **Bed Availability Monitoring**: Check hospital bed status
- **Schedule Management**: Control availability and working hours

### 🏨 For Hospitals
- **Hospital Registration**: Comprehensive onboarding with hospital details, address, contact information, and specializations
- **Doctor Onboarding**: Add and manage doctor profiles with credentials and schedules
- **Bed Management**: Manage bed inventory with room numbers, types, departments, and real-time availability status
- **Department Management**: Organize services across departments (Pediatric, Cardiology, General Medicine, etc.)
- **Real-time Updates**: Dashboard with live bed status and department queue management
- **Location Services**: Update location and services for patient discovery

## 🏗️ Architecture

### System Architecture

The platform follows a modern three-tier architecture with:

1. **Frontend Layer**: React Native, HTML/CSS, Streamlit interfaces
2. **Backend Layer**: Node.js APIs with MongoDB database
3. **Integration Layer**: Real-time sync across all dashboards with WebSocket support

### Tech Stack Components

**Frontend:**
- React Native
- HTML/CSS
- Streamlit (for ML interfaces)

**Backend:**
- Node.js
- MongoDB
- WebSocket (for real-time updates)

**Integrations:**
- Google Maps API (location services, distance calculation, route navigation)
- Real-time synchronization across dashboards

**ML/AI Models:**
- **Image Analysis**: YOLO v10 (X-Ray, Blood), ResNet (Brain Tumor, Lung Cancer), VGG19 (Breast Cancer)
- **Statistical Models**: Random Forest (Heart disease), XGBoost (Parkinson's), KNN (Kidney stones)

## 📊 Database Structure

### Collections

1. **Hospital Collection**
   - Hospital registration data
   - Name, address, location coordinates
   - Contact details and specializations

2. **Doctors Collection**
   - Doctor credentials and profiles
   - Specialization and schedule
   - Hospital affiliation
   - Availability status

3. **Beds Collection**
   - Bed inventory with room numbers
   - Bed type and department
   - Real-time availability status

4. **Appointments Collection**
   - Patient-doctor appointment records
   - Date/time selection and contact information

5. **Booking Records Collection**
   - Bed booking history
   - Patient and hospital information

6. **Queue Records Collection**
   - OPD queue tracking
   - Position and wait time analytics

7. **Time Analytics Collection**
   - Department-wise timing data
   - Queue performance metrics

8. **Dashboard Updates Collection**
   - Real-time dashboard data sync

## 🔄 Core Workflows

### 1. Hospital Onboarding Flow
```
Hospital Admin Login → Create Hospital Form → Hospital Registration Data → 
MongoDB Database → Onboard Doctors Module + Bed Management Module → 
Integration Points (Find Hospital, Find Bed, Doctors Page, OPD Queuing, Appointment Booking)
```

### 2. Bed Availability System
```
Patient/Hospital/Doctor Dashboard → Find Bed Feature → Bed Search & Booking → 
Frontend Layer (HTML/CSS, Streamlit) → Backend Layer (Node.js APIs, MongoDB, Real-time Updates) → 
Database Structure (Hospital/Bed Inventory/Booking Records) → Dashboard Updates → 
Real-time Bed Availability
```

### 3. Doctor Appointment Booking
```
Patient Login → Doctors Page Interface → Search & Filter (Specialization, Location, Availability, Rating) → 
MongoDB Query Doctors Collection → Doctor Listings Display → Select Doctor → 
Appointment Booking Form → MongoDB Appointments Collection → Integration Points → 
Patient Dashboard (Track Appointments) + OPD Queuing (Queue Position Updates)
```

### 4. Hospital Discovery
```
Patient/Hospital/Doctor Dashboard → Find Hospital Feature → Hospital Search & Location → 
Frontend Layer → Backend Layer (Node.js, MongoDB, Google Maps API) → 
Database Structure (Hospital Collection, Location Data, Services) → 
Maps Integration (Location Services, Distance Calculation, Route Navigation) → 
Dashboard Updates (Find Nearest Hospitals, Update Location & Services)
```

### 5. OPD Queue Management
```
Patient/Hospital/Doctor Dashboard → OPD Queuing Feature → Queue Management & Time Estimation → 
Frontend Layer (React, HTML/CSS, Streamlit) → Backend Layer (Node.js, MongoDB, WebSocket) → 
Queue Analytics (Position, Wait Time, Load Analysis) → Database Structure → Dashboard Updates → 
Real-time Queue Status via WebSocket
```

### 6. Disease Prediction System
```
Patient Data Input → Data Type Decision (Images/Clinical) → 
Image Models (X-Ray, Brain Tumor, Breast Cancer, Lung Cancer, Blood) OR 
Statistical Models (Heart, Parkinson's, Kidney Stone) → 
Prediction Engine → Patient & Doctor Dashboard → MongoDB Storage
```

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 14.x
MongoDB >= 4.x
npm or yarn
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/agnate4115/fail_exe_zocdoc.git
cd caremate
```

2. **Install dependencies**
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. **Environment Variables**

Create a `.env` file in the backend directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. **Run the application**

```bash
# Backend (from backend directory)
npm start

# Frontend (from frontend directory)
npm start
```

The application will be available at `http://localhost:3000`

## 📱 User Roles & Access

### Patient Dashboard
- Find hospitals and beds
- Book doctor appointments
- View OPD queue status
- Access disease predictions
- Track medical history

### Doctor Dashboard
- Manage appointments
- View patient reports
- Check bed availability
- Monitor patient flow
- Update schedule

### Hospital Dashboard
- Manage bed inventory
- Onboard doctors
- Track department queues
- View real-time analytics
- Update hospital information

## 🤖 AI/ML Features

### Disease Prediction Models

1. **X-Ray Analysis** - YOLO v10
2. **Brain Tumor Detection** - ResNet
3. **Breast Cancer Detection** - VGG19
4. **Lung Cancer Detection** - ResNet
5. **Blood Analysis** - YOLO v10
6. **Heart Disease Prediction** - Random Forest
7. **Parkinson's Detection** - XGBoost
8. **Kidney Stone Prediction** - KNN

### AI Assistants

- **Medical Assistant**: Auto-books appointments and suggests doctors
- **Therapy Assistant**: AI-enabled therapy sessions from patient conversations
- **Function Calling**: LLaMA 3.2+ integration for automated booking
- **Voice Appointment Booking**: Vapi Agent integration for voice-based appointments

## 🗺️ Maps Integration

- **Location Services**: Find nearby hospitals based on user location
- **Distance Calculation**: Calculate distance to hospitals
- **Route Navigation**: Get directions to selected hospitals
- **Real-time Updates**: Live hospital location and service updates

## 📊 Real-time Features

- **WebSocket Integration**: Real-time queue position updates
- **Live Bed Availability**: Instant updates on bed status
- **Dashboard Sync**: Synchronized data across all user dashboards
- **Queue Analytics**: Real-time wait time estimation

## 🔒 Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- Secure API endpoints
- Data encryption
- HIPAA compliance considerations

## 🌟 Unique Selling Points

1. **Unified Platform**: Single platform for patients, doctors, and hospitals
2. **Real-time Updates**: Live synchronization across all dashboards
3. **AI-Powered Predictions**: Multiple ML models for disease detection
4. **Smart Queue Management**: Real-time OPD queue tracking with wait time estimation
5. **Location Intelligence**: Maps-based hospital discovery with routing
6. **Comprehensive Management**: End-to-end healthcare workflow management

## 📈 Future Enhancements

- [ ] Telemedicine video consultation
- [ ] Prescription management system
- [ ] Lab report integration
- [ ] Insurance claim processing
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Payment gateway integration
- [ ] Emergency services integration

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 👥 Team

- **Project Lead**: Neil Gupta
- **Backend Development**: Rohit Ganguly
- **Frontend Development**: Rohit Ganguly
- **ML/AI Development**: Neil Gupta
- **UI/UX Design**: Neil Gupta

## 📞 Contact

For questions, feedback, or support, please contact:

- **Email**: support@carematehealth.com
- **Website**: [https://carematehealth.vercel.app/](https://carematehealth.vercel.app/)
- **GitHub**: [Project Repository](https://github.com/agnate4115/fail_exe_zocdoc.git)

## 🙏 Acknowledgments

- Google Maps API for location services
- MongoDB for database management
- Vercel for hosting and deployment
- All open-source libraries and frameworks used in this project

export const menu = [
    {
        cat: 'dashboard',
        icon: 'blocks',
        links: [

            { name: "Hospital Dashboard", link: '/dashboard_i' },
        ]
    },
    {
        cat: 'appointments',
        icon: 'calendar',
        links: [
            { name: "Patient Appointments", link: '/patient_appointments' },
            { name: "Doctor Appointments", link: '/doctor_appointments' }
        ]
    },
    {
        cat: 'Management',
        icon: 'settings',
        links: [
            { link: '/hospital/approve-beds-opds', name: 'Approve Beds & OPDs' },
            // additional hospital management links...
        ],
    },
    {
        cat: 'patients',
        icon: 'users',
        links: [
            { name: "Patients", link: '/patients' },
            { name: "Tests", link: '/tests' }
        ]
    },
    {
        cat: 'doctors',
        icon: 'stethoscope',
        links: [
            { name: "Doctors", link: '/doctors' },
            { name: "Staff", link: '/staff' }
        ]
    },
    {
        cat: 'messages',
        icon: 'comment',
        links: [
            { name: "Doctor Messenger", link: '/doctor_messenger' },
            { name: "Patient Messenger", link: '/patient_messenger' }
        ]
    },
    {
        cat: 'reviews',
        icon: 'star',
        links: [
            { name: "Doctor Reviews", link: '/doctor_reviews' },
            { name: "Patient Reviews", link: '/patient_reviews' }
        ]
    },
    {
        icon: 'wallet',
        name: 'Finances',
        link: '/finances'
    },
    {
        icon: 'settings',
        name: 'Settings',
        link: '/settings'
    },
    {
        cat: 'utilities',
        icon: 'gear', // Changed icon for better clarity
        links: [
            { name: "File Upload", link: '/upload' } // Changed link to match the defined route
        ]
    }
]
export const menu = [
    {
        cat: 'dashboard',
        icon: 'blocks',
        links: [
            { name: "Dashboard B", link: '/dashboard_b' },
        ]
    },
    {
        cat: 'appointments',
        icon: 'calendar',
        links: [
            { name: "Patient Appointments", link: '/patient_appointments' },
        ]
    },
    {
        cat: 'patients',
        icon: 'users',
        links: [
            { name: "Tests", link: '/tests' }
        ]
    },
    {
        cat: 'doctors',
        icon: 'stethoscope',
        links: [
            { name: "Doctors", link: '/doctors' },
        ]
    },
    {
        cat: 'messages',
        icon: 'comment',
        links: [
            { name: "Patient Messenger", link: '/patient_messenger' }
        ]
    },
    {
        cat: 'utilities',
        icon: 'gear', // Changed icon for better clarity
        links: [
            { name: "File Upload", link: '/upload' } // Changed link to match the defined route
        ]
    },
    {
        icon: 'settings',
        name: 'Settings',
        link: '/settings'
    }
];
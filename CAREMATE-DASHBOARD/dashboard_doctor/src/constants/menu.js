export const menu = [
    {
        cat: 'dashboard',
        icon: 'blocks',
        links: [
            { name: "Doctor Dashboard ", link: '/dashboard_a' },
        ]
    },
    {
        cat: 'appointments',
        icon: 'calendar',
        links: [
            { name: "Doctor Appointments", link: '/doctor_appointments' }
        ]
    },
    {
        cat: 'approvals',
        icon: 'star',
        links: [
            { name: "Patient Approvals", link: '/patient_approval' }
        ]
    },
    {
        cat: 'patients',
        icon: 'users',
        links: [
            { name: "Patients", link: '/patients' },
            { name: "Records", link: '/tests' }
        ]
    },

    {
        cat: 'doctors',
        icon: 'stethoscope',
        links: [
            { name: "Doctors", link: '/doctors' }
        ]
    },
    {
        icon: 'comment',
        name: "Doctor Messenger",
        link: '/doctor_messenger'
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
]

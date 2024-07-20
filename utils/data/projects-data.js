import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Study and Implementation of a  (SOC)',
        description: "This project involved first conducting research on SOCs to understand them, including the different actors involved, as well as the processes and technologies used. Subsequently, organizational and technological architectures were proposed in line with the needs of our host company. This was followed by the implementation of a Proof of Concept (PoC) to demonstrate that our architecture is indeed functional.",
        tools: ['Wazuh', 'Shuffle', 'TheHive', 'Cortex', 'MISP', 'Podman', 'Red hat'],
        role: 'Intern',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 2,
        name: 'Digital Forensics',
        description: 'Through this project, I explored the field of digital forensics and studied the stages of a forensic investigation in response to an incident in a business setting. This included everything from the information collection phase to the analysis of artifacts and the final report writing.',
        tools: ['Volatility', 'Wireshark', "Network Miner", "FTKImager", "MFT2XML"],
        role: 'Intern',
        code: '',
        demo: '',
        image: '',
    },
    // {
    //     id: 3,
    //     name: 'AI Powered Real Estate',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
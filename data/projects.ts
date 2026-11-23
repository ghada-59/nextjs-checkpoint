export type PortfolioProject = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  status: string;
  repository?: string;
};

export const projects: PortfolioProject[] = [
  {
    number: "01",
    title: "12-Lead ECG Risk Classification",
    category: "Biomedical AI · Signal Processing",
    description:
      "A machine-learning project exploring risk classification from 12-lead ECG signals, with a focus on biomedical signal workflows and reproducible experiments.",
    image: "/images/ecg-project.svg",
    imageAlt: "Abstract ECG waveform visualization on a dark grid",
    tags: ["Python", "Machine Learning", "ECG", "Signal Processing"],
    status: "GitHub project",
    repository: "https://github.com/ghada-59/risk_classification_ECG12_signals",
  },
  {
    number: "02",
    title: "Intelligent Posture Support",
    category: "Biomedical Engineering · IoT Prototype",
    description:
      "An academic prototype concept for a thoraco-lumbar support belt combining posture sensing, vibration feedback and a detachable lumbar support element.",
    image: "/images/posture-project.svg",
    imageAlt: "Abstract wearable posture support and sensor illustration",
    tags: ["ESP32", "MPU6050", "Embedded Systems", "Prototyping"],
    status: "Academic prototype",
  },
  {
    number: "03",
    title: "Biomedical Image Denoising Suite",
    category: "Medical Imaging · Software Engineering",
    description:
      "A software project focused on a structured image-denoising workflow, including a FastAPI backend and clear API documentation for experimentation.",
    image: "/images/denoising-project.svg",
    imageAlt: "Abstract medical image denoising comparison visualization",
    tags: ["Python", "FastAPI", "Image Processing", "API"],
    status: "Development project",
  },
];

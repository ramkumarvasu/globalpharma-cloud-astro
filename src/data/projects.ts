export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Neurology clinical trials",
    techs: ["Alzheimer’s disease", "Parkinson’s disease", "epilepsy", "multiple sclerosis"],
    link: "https://oncologyclinicaltrial.com",
  },
  {
    title: "Oncology clinical trials",
    techs: ["chemotherapy drugs","radiation therapies","immunotherapies", "targeted therapies"],
    link: "https://oncologyclinicaltrial.com",
  },
];

export default projects;

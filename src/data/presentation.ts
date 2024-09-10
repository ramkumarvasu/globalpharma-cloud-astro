type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "myemail@globalpharma.com",
  title: "Global Pharma👋",
  //profile: "/profile.webp",
  description:
    "We are a world-leading pharmaceutical company. Here you can find latest information on our drugs, symptoms, treatments and clinical  trials available",
  socials: [
    {
      label: "YouTube",
      link: "https://youtube.com/@globalpharma",
    },
    {
      label: "X",
      link: "https://twitter.com/globalpharma",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/globalpharma",
    },
    {
      label: "GitHub",
      link: "https://github.com/globalpharma",
    },
  ],
};

export default presentation;

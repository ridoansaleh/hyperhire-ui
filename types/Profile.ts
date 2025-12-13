export interface Profile {
  img: string;
  name: string;
  country: {
    name: string;
    flagImg: string;
  };
  role: string;
  experience: string;
  skills: string[];
  monthlyIncome: number;
}

export type Service = {
  code: number;
  desc: string;
  date: string;
  cost: number;
};
export type Customer = {
  firstName: string;
  lastName: string;
  year: number;
  make: string;
  model: string;
  services: Service[];
};

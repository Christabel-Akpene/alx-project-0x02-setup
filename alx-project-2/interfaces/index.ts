export interface CardProps {
    title: string,
    content: string
}

export interface FormErrors {
    title?: string,
    content?: string
}

export interface ButtonProps{
    title: string,
    size: "small" | "medium" | "large",
    shape: "rounded-sm" | "rounded-md" | "rounded-full"
}

export interface PostProps{
    title: string,
    body: string,
    userId: number,
    id: number
}

export interface UserProps {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


import Button from "@/components/common/Button";

const About = () => {
  return (
    <div>
      <div className="min-h-dvh py-4">
        <h1 className="text-2xl text-center">Welcome to the About Page</h1>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <Button title="small" shape="rounded-sm" size="small"/>
          <Button title="medium" shape="rounded-md" size="medium"/>
          <Button title="large" shape="rounded-full" size="large"/>
        </div>
      </div>
    </div>
  );
};

export default About;

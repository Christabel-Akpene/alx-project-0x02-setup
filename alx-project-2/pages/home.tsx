import Card from "@/components/common/Card";

const cardData = [
  {
    title: "Welcome",
    content: "This is the home page of our website."
  },
  {
    title: "Profile",
    content: "View and edit your personal information here."
  },
  {
    title: "Settings",
    content: "Change your preferences and account settings."
  },
  {
    title: "Notifications",
    content: "Check all your recent alerts and messages."
  },
]

const Home = () => {
    return (
        <div className="min-h-dvh py-4 flex flex-col items-center">
            <h1 className="text-2xl text-center mb-4">Welcome to the Home Page</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
                {
                    cardData.map(({title, content}) => {
                        return (
                            <Card key={title} title={title} content={content}/>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home;
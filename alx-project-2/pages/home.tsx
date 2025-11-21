import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";
import { useState } from "react";
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
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState(cardData);

    const handleButtonClick = () => {
        setOpenModal(true);
    }

    const handleAddContent = (formData:CardProps) => {
        setData([...data, formData])
    }

    return (
        <div className="min-h-dvh py-4 flex flex-col px-6 gap-6">
            <div className="flex flex-col gap-2 sm:flex-row justify-between items-center w-full mb-4">
                <h1 className="text-2xl">Welcome to the Home Page</h1>
                <button onClick={handleButtonClick} className="border px-6 py-2 rounded-md sm:mt-0 mt-4 hover:bg-gray-100 transition-all duration-150 transform hover:scale-105">Add content</button>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full justify-items-center sm:justify-items-start">
                {
                    data.map(({title, content}) => {
                        return (
                            <Card key={title} title={title} content={content}/>
                        )
                    })
                }
            </div>

            {
                openModal && <PostModal setOpenModal={setOpenModal} handleAddContent={handleAddContent} />
            }

        </div>
    )
}

export default Home;
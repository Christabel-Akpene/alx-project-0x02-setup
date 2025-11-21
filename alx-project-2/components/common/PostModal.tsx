// "use client";
import { useState, Dispatch, SetStateAction } from "react";
import { CardProps, FormErrors } from "@/interfaces";
import { ChangeEvent } from "react";


interface PostModalProps {
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    handleAddContent: (formData: CardProps) => void;
}

const PostModal = ({setOpenModal, handleAddContent}: PostModalProps) => {
  const [formData, setFormData] = useState<CardProps>({
    title: "",
    content: "",
  });


  const [errors, setErrors] = useState<FormErrors>({});

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateData = () => {
    const newErrors : FormErrors= {};

    if (formData.title.trim() === "") {
      newErrors.title = "Enter a title";
    }

    if (formData.content.trim() === "") {
      newErrors.content = "Enter content";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateData()) {
    handleAddContent(formData);
    setOpenModal(false);

    }
  };

  return (
    <div onClick={()=> setOpenModal(false)} className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()} className="bg-white p-6 shadow-xl w-full mx-4 max-w-md flex flex-col">
        <p onClick={()=> setOpenModal(false)} className="text-lg font-semibold text-right cursor-pointer">X</p>
        <div className="flex flex-col gap-3 mb-4">
          <label htmlFor="title">Title: </label>
          <input
            onChange={onInputChange}
            name="title"
            value={formData.title}
            type="text"
            placeholder="Enter title"
            className="border rounded-md p-3 outline-none focus:ring-1 ring-blue-400 focus:border-none"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="content">Content: </label>
          <textarea
            onChange={onInputChange}
            name="content"
            value={formData.content}
            placeholder="Enter Content"
            className="border rounded-md p-3 outline-none focus:ring-1 ring-blue-400 focus:border-none"
          ></textarea>
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content}</p>
          )}
        </div>

        <button type="submit" className="mt-4 mx-auto border px-6 py-2 rounded-md hover:bg-gray-100 transition-all duration-150 transform hover:scale-105 cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

export default PostModal;

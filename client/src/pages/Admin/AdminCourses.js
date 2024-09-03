import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice"
import axios from "axios"

function AdminCourses() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root)
    const { courses } = portfolioData;
    const [showAddEditModel, setShowAddEditModel] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add"); // add || edit

    const onFinish = async (values) => {
        try {
            const tempSkills = values?.technologies?.split(",") || [];
            values.technologies = tempSkills;
            dispatch(ShowLoading())
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/portfolio/update-course", {
                    ...values,
                    _id: selectedItemForEdit._id,
                })
            } else {
                response = await axios.post("/api/portfolio/add-course",
                    values);
            }
            dispatch(HideLoading())
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModel(false)
                setSelectedItemForEdit(null);
                dispatch(HideLoading())
                dispatch(ReloadData(true))
            } else {
                message.error(response.data.message)

            }
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.delete("/api/portfolio/delete-course", {
                data: { _id: item._id },
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            if (error.response && error.response.data && error.response.data.message) {
                message.error(error.response.data.message);
            } else {
                message.error("An error occurred while processing your request.");
            }
        }
    };


    return (
        <div>
            <div className="flex justify-end">
                <button className='bg-primary px-5 py-2 text-white '
                    onClick={() => {
                        setSelectedItemForEdit(null);
                        setType("add"); // Reset type to "add" when adding a new course
                        setShowAddEditModel(true);
                    }}
                >
                    Add Education
                </button>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-1  gap-5 mt-5'>
                {courses.map((course) => (
                    <div className='shadow border p-5 border-gray-400 flex-col gap-5 '>
                        <h1 className='text-xl text-secondary font-bold'>{course.title}</h1>
                        <hr />
                        <img src={course.image} alt="" className='h-60 w-80' />
                        <h1>Board : {course.technologies.join("  ,  ")}</h1>
                        <h1>School : {course.link}</h1>

                        <h1>Description :{course.description}</h1>
                        <div className="flex gap-3 justify-end mt-5 ">
                            <button className='bg-red-500 text-white px-5 py-2'
                                onClick={() => { onDelete(course) }}
                            >Delete</button>

                            <button className='bg-primary text-white px-5 py-2'
                                onClick={() => {
                                    setSelectedItemForEdit(course);
                                    setShowAddEditModel(true);
                                    setType("edit");
                                }}
                            >Edit</button>

                        </div>

                    </div>
                ))}
            </div>

            {
                (type === "add" ||
                    selectedItemForEdit) && (
                    <Modal
                        visible={showAddEditModel}
                        title={selectedItemForEdit ? "Edit course" : "Add course"}
                        footer={null}
                        onCancel={() => {
                            setShowAddEditModel(false);
                            setSelectedItemForEdit(null); // Reset selectedItemForEdit when modal is closed
                            setType("edit"); // Reset type to "add" when modal is closed

                        }}
                    >
                        <Form
                            layout='vertical font-bold ' className='flex-col'
                            onFinish={onFinish}
                            initialValues={{
                                ...selectedItemForEdit,
                                technologies: selectedItemForEdit?.technologies?.join(',') || '',

                            } || {}}
                        >


                            <Form.Item name='title' label='Standard'>
                                <input placeholder='standard' />
                            </Form.Item>
                            <Form.Item name='image' label='image'>
                                <input placeholder='Image' />
                            </Form.Item>
                            <Form.Item name='technologies' label='Board'>
                                <input placeholder='Board' />
                            </Form.Item>
                            <Form.Item name='link' label='School'>
                                <input placeholder='Schhol' />
                            </Form.Item>
                            <Form.Item name='description' label='Description'>
                                <textarea placeholder='Description' />
                            </Form.Item>
                            <div className="flex justify-end">

                                <button className=' bg-primary text-white px-5 py-2'>
                                    {selectedItemForEdit ? "update" : "Add"}
                                </button>
                            </div>
                        </Form>

                    </Modal>
                )
            }

        </div>
    )
}


export default AdminCourses;

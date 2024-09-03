import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice"
import axios from "axios"

function Experiences() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root)
    const { experiences } = portfolioData;
    const [showAddEditModel, setShowAddEditModel] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add"); // add || edit
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/portfolio/update-experience", {
                    ...values,
                    _id: selectedItemForEdit._id,
                })
            } else {
                response = await axios.post("/api/portfolio/add-experience",
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
            const response = await axios.delete("/api/portfolio/delete-experience", {
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
                        setType("add");
                        setShowAddEditModel(true);
                    }}
                >
                    Add Experience
                </button>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1'>
                {experiences.map((experience) => (
                    <div className='shadow border p-5 border-gray-400 flex-col '>
                        <h1 className='text-xl text-secondary font-bold'>{experience.period}</h1>
                        <hr />
                        <h1>Company : {experience.company}</h1>
                        <h1>Role : {experience.title}</h1>
                        <h1>{experience.description}</h1>
                        <div className="flex gap-3 justify-end mt-5 ">
                            <button className='bg-red-500 text-white px-5 py-2'
                                onClick={() => { onDelete(experience) }}
                            >Delete</button>

                            <button className='bg-primary text-white px-5 py-2'
                                onClick={() => {
                                    setSelectedItemForEdit(experience);

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
                        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                        footer={null}
                        onCancel={() => {
                            setShowAddEditModel(false);
                            setSelectedItemForEdit(null); // Reset selectedItemForEdit when modal is closed
                            setType("edit");
                        }}
                    >
                        <Form layout='vertical font-bold'
                            onFinish={onFinish}
                            initialValues={selectedItemForEdit || {}}
                        >
                            <Form.Item name='period' label='Period'>
                                <input placeholder='Period' />
                            </Form.Item>
                            <Form.Item name='title' label='Title'>
                                <input placeholder='Title' />
                            </Form.Item>
                            <Form.Item name='company' label='Company'>
                                <input placeholder='Company' />
                            </Form.Item>
                            <Form.Item name='description' label='Description'>
                                <input placeholder='Description' />
                            </Form.Item>
                            <div className="flex justify-end">
                                <button className=' border-primary text-primary px-5 py-2'
                                    onClick={() => { setShowAddEditModel(false) }}
                                >Cancel</button>
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

export default Experiences
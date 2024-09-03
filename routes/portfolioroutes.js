const router = require("express").Router();
const { Intro, About, Experience, Project, Course, Contact } = require("../models/portfolioMoodel");
const User=require('../models/userModel')


router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const experience = await Experience.find();
        const project = await Project.find();
        const course = await Course.find();
        const contacts = await Contact.find();

        res.status(200).send({
            intros: intros[0],
            abouts: abouts[0],
            experiences: experience,
            projects: project,
            courses: course,
            contacts: contacts[0],
        })

    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/update-intro", async (req, res) => {
    try {
        const intros = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send(
            {
                data: intros,
                success: true,
                message: "Intro updated successfully"

            }
        )
    } catch (error) {
        res.status(500).send(error)

    }
})
router.post("/update-about", async (req, res) => {
    try {
        const abouts = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send(
            {
                data: abouts,
                success: true,
                message: "Abouts updated successfully"

            }
        )
    } catch (error) {
        res.status(500).send(error)

    }
})
router.post("/add-experience", async (req, res) => {
    try {
        const experiences = new Experience(req.body);
        await experiences.save();
        res.status(200).send(
            {
                data: experiences,
                success: true,
                message: "Experience updated successfully"

            }
        )
    } catch (error) {
        res.status(500).send(error)

    }
})
router.post("/update-experience", async (req, res) => {
    try {
        const experiences = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send(
            {
                data: experiences,
                success: true,
                message: "Experience updated successfully"

            }
        )
    } catch (error) {
        res.status(500).send(error)

    }
})
router.delete("/delete-experience", async (req, res) => {
    try {
        const experiences = await Experience.findOneAndDelete({ _id: req.body._id }); // Use findOneAndDelete for deletion
       
        res.status(200).send({
            data: experiences,
            success: true,
            message: "Experience deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post("/add-project", async (req, res) => {
    try {
        const projects = new Project(req.body);
        await projects.save();
        res.status(200).send(
            {
                data: projects,
                success: true,
                message: "Experience updated successfully"

            }
        )
    } catch (error) {
        res.status(500).send(error)

    }
})
router.post("/update-project", async (req, res) => {
    try {
        const projects = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send(
            {
                data: projects,
                success: true,
                message: "Experience updated successfully"

            }
        )
    } catch (error) {
        res.status(500).send(error)

    }
})
router.delete("/delete-project", async (req, res) => {
    try {
        const projects = await Project.findOneAndDelete({ _id: req.body._id }); // Use findOneAndDelete for deletion
       
        res.status(200).send({
            data: projects,
            success: true,
            message: "Experience deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post("/add-course", async (req, res) => {
    try {
        const courses = new Course(req.body);
        await courses.save();
        res.status(200).send(
            {
                data: courses,
                success: true,
                message: "Course added successfully"

            }
        )
    } catch (error) {
        res.status(500).send(error)

    }
})
router.post("/update-course", async (req, res) => {
    try {
        const courses = await Course.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send(
            {
                data: courses,
                success: true,
                message: "Course updated successfully"

            }
        )
    } catch (error) {
        res.status(500).send(error)

    }
})
router.delete("/delete-course", async (req, res) => {
    try {
        const courses = await Course.findOneAndDelete({ _id: req.body._id }); // Use findOneAndDelete for deletion
       
        res.status(200).send({
            data: courses,
            success: true,
            message: "Course deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post("/update-contact", async (req, res) => {
    try {
        const contacts = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send(
            {
                data: contacts,
                success: true,
                message: "Contact updated successfully"

            }
        )
    } catch (error) {
        res.status(500).send(error)

    }
})
// user login
router.post("/admin-login", async (req, res) => {
    try {
const user=await User.findOne({username:req.body.username,password:req.body.password});
user.password="";
if(user){
    res.status(200).send(
        {
            data: user,
            success: true,
            message: "Login successfully"

        }
    )
}else{
    res.status(200).send(
        {
            data: user,
            success: false,
            message: "invalid user or password"

        }
    )
}
    }
    catch(error){
        res.status(500).send(error)
    }
});

module.exports = router;

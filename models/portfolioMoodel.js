const mongoose = require("mongoose");

const introschema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true
    },

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    caption: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})
const aboutschema = new mongoose.Schema({
    lottieURL: {
        type: String,
        required: true
    },

    description1: {
        type: String,
        required: true
    },

    description2: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    }
})
const experienceschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    period: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
})
const projectschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})
const courseschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
})
const contactschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
})

module.exports = {
    Intro: mongoose.model("intros", introschema),
    About: mongoose.model("abouts", aboutschema),
    Experience: mongoose.model("experiences", experienceschema),
    Project: mongoose.model("projects", projectschema),
    Course: mongoose.model("courses", courseschema),
    Contact: mongoose.model("contacts", contactschema),
}

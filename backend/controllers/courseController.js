import Course from "../models/Course";

export async function getCourses(req, res) {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
}

export async function getCourse(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch course" });
  }
}

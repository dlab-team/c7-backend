import { work_profiles } from "../../application/model/work-profile.model.js";
import { education_experiences } from "../../application/model/education_experiences.model.js";
import { work_profile_databases } from "../../application/model/work_profile_misc_model/work_profile_databases.model.js";
import { work_profile_dev_languages } from "../../application/model/work_profile_misc_model/work_profile_dev_languages.model.js";
import { work_profile_job_availability_model } from "../../application/model/work_profile_misc_model/work_profile_job_availability.model.js";
import { work_profile_job_options } from "../../application/model/work_profile_misc_model/work_profile_job_options.model.js";
import { work_profile_soft_skills } from "../../application/model/work_profile_misc_model/work_profile_soft_skills.model.js";
import { work_profile_tools } from "../../application/model/work_profile_misc_model/work_profile_tools.model.js";
import { work_profile_visas } from "../../application/model/work_profile_misc_model/work_profile_visas.model.js";

export const getWorkProfiles = async (req, res) => {
  try {
    const workProfiles = await work_profiles.findAll();
    res.json(workProfiles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getWorkProfile = async (req, res) => {
  try {
    const workProfileById = await work_profiles.findByPk(req.params.id);
    if (!workProfileById)
      return res
        .status(404)
        .json({ message: "El perfil de trabajo no existe" });
    res.json(workProfileById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserWorkProfile = async (req, res) => {
  try {
    const workProfileInUser = await work_profiles.findAll({
      where: { userId: req.params.id },
    });
    return res.json(workProfileInUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createWorkProfile = async (req, res) => {
  try {
    const newWorkProfile = await work_profiles.create({
      gender: req.body.gender,
      phone_number: req.body.phone_number,
      city: req.body.city,
      country: req.body.country,
      education_status: req.body.education_status,
      english_level: req.body.english_level,
      cv_url: req.body.cv_url,
      linkedin_url: req.body.linkedin_url,
      github_url: req.body.github_url,
      featured_project: req.body.featured_project,
      work_availability: req.body.work_availability,
      dev_experience: req.body.dev_experience,
      educational_level: req.body.educational_level,
      comment: req.body.comment,
      ideal_work_comment: req.body.ideal_work_comment,
      relocation_option: req.body.relocation_option,
      visa: req.body.visa,
      design: req.body.design,
      portfolio_url: req.body.portfolio_url,
      stack: req.body.stack,
      additional_tools_comments: req.body.additional_tools_comments,
      employment_status_current: req.body.employment_status_current,
      userId: req.body.userId,
      current_salary: req.body.current_salary,
      availability_status: req.body.availability_status,
    });
    res.json(newWorkProfile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateWorkProfile = async (req, res) => {
  try {
    const workProfileByPk = await work_profiles.findByPk(req.params.id);
    workProfileByPk.gender = req.body?.gender;
    workProfileByPk.phone_number = req.body?.phone_number;
    workProfileByPk.city = req.body?.city;
    workProfileByPk.country = req.body?.country;
    workProfileByPk.education_status = req.body?.education_status;
    workProfileByPk.english_level = req.body?.english_level;
    workProfileByPk.cv_url = req.body?.cv_url;
    workProfileByPk.linkedin_url = req.body?.linkedin_url;
    workProfileByPk.github_url = req.body?.github_url;
    workProfileByPk.featured_project = req.body?.featured_project;
    workProfileByPk.work_availability = req.body?.work_availability;
    workProfileByPk.dev_experience = req.body?.dev_experience;
    workProfileByPk.educational_level = req.body?.educational_level;
    workProfileByPk.comment = req.body?.comment;
    workProfileByPk.ideal_work_comment = req.body?.ideal_work_comment;
    workProfileByPk.relocation_option = req.body?.relocation_option;
    workProfileByPk.visa = req.body?.visa;
    workProfileByPk.design = req.body?.design;
    workProfileByPk.portfolio_url = req.body?.portfolio_url;
    workProfileByPk.stack = req.body?.stack;
    workProfileByPk.additional_tools_comments =
      req.body?.additional_tools_comments;
    workProfileByPk.employment_status_current =
      req.body?.employment_status_current;
    workProfileByPk.current_salary = req.body?.current_salary;
    workProfileByPk.availability_status = req.body?.availability_status;
    await workProfileByPk.save();
    res.json(workProfileByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteWorkProfile = async (req, res) => {
  try {
    await work_profiles.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEducationExperienceInWorkProfile = async (req, res) => {
  try {
    const educationExperienceInWorkProfile =
      await education_experiences.findAll({
        where: { work_profile_id: req.params.id },
      });
    return res.json(educationExperienceInWorkProfile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Método para poblar las tablas work_profile, education_experiences, y todas las variaciones de work_profile (databases, soft_skills, tools, etc.)
export const populateMultipleTables = async (req, res) => {
  try {
    const newWorkProfile = await work_profiles.create(
      {
        gender: req.body.wp.gender,
        phone_number: req.body.wp.phone_number,
        city: req.body.wp.city,
        country: req.body.wp.country,
        education_status: req.body.wp.education_status,
        english_level: req.body.wp.english_level,
        cv_url: req.body.wp.cv_url,
        linkedin_url: req.body.wp.linkedin_url,
        github_url: req.body.wp.github_url,
        featured_project: req.body.wp.featured_project,
        work_availability: req.body.wp.work_availability,
        dev_experience: req.body.wp.dev_experience,
        educational_level: req.body.wp.educational_level,
        comment: req.body.wp.comment,
        ideal_work_comment: req.body.wp.ideal_work_comment,
        relocation_option: req.body.wp.relocation_option,
        visa: req.body.wp.visa,
        design: req.body.wp.design,
        portfolio_url: req.body.wp.portfolio_url,
        stack: req.body.wp.stack,
        additional_tools_comments: req.body.wp.additional_tools_comments,
        employment_status_current: req.body.wp.employment_status_current,
        userId: req.body.wp.userId,
        current_salary: req.body.wp.current_salary,
        availability_status: req.body.wp.availability_status,
      },
      {
        returning: true,
      }
    );
    const newEducationExperience = await education_experiences.create({
      name: req.body.eduexp.name,
      work_profile_id: newWorkProfile.dataValues.id,
      institute_name: req.body.eduexp.institute_name,
      type: req.body.eduexp.type,
      start_month: req.body.eduexp.start_month,
      end_month: req.body.eduexp.end_month,
      start_year: req.body.eduexp.start_year,
      end_year: req.body.eduexp.end_year,
    });
    const newWorkProfileDataBase = await work_profile_databases.create({
      work_profile_id: newWorkProfile.dataValues.id,
      databases_id: req.body.wpdb.databases_id,
      level: req.body.wpdb.level,
    });
    const newWorkProfileDevLanguage = await work_profile_dev_languages.create({
      work_profile_id: newWorkProfile.dataValues.id,
      dev_languages_id: req.body.wpdl.dev_languages_id,
      level: req.body.wpdl.level,
    });
    const newWorkProfileSoftSkill = await work_profile_soft_skills.create({
      work_profile_id: newWorkProfile.dataValues.id,
      soft_skills_id: req.body.wpss.soft_skills_id,
    });
    const newWorkProfileTools = await work_profile_tools.create({
      work_profile_id: newWorkProfile.dataValues.id,
      tools_id: req.body.wpt.tools_id,
      level: req.body.wpt.level,
    });
    const newWorkProfileVisa = await work_profile_visas.create({
      work_profile_id: newWorkProfile.dataValues.id,
      visa_id: req.body.wpv.visa_id,
    });
    const newWorkProfileJobAvailability =
      await work_profile_job_availability_model.create({
        work_profile_id: newWorkProfile.dataValues.id,
        availability_id: req.body.wpja.availability_id,
      });
    const newWorkProfileJobOption = await work_profile_job_options.create({
      work_profile_id: newWorkProfile.dataValues.id,
      ideal_work_id: req.body.wpjo.ideal_work_id,
    });
    const response =
      "Created new entry with Work Profile ID: " + newWorkProfile.dataValues.id;
    res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

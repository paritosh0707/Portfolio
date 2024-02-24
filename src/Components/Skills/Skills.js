import React from "react";
import "./Skills.css";
import Med_chatbot from "./Med_chatbot.jpg";
import python from "./skill_logos/python.svg";
import airflow from "./skill_logos/airflow.svg";
import aws from "./skill_logos/aws.svg";
import azurefunctions from "./skill_logos/azurefunctions.svg";
import fileTypeAzure from "./skill_logos/file-type-azure.svg";
import fileTypeDVC from "./skill_logos/file-type-dvc.svg";
import flask from "./skill_logos/flask.svg";
import mongodb from "./skill_logos/mongodb-original.svg";
import mySql from "./skill_logos/mysql-original-wordmark.svg";
import pandas from "./skill_logos/pandas.svg";
import pytorch from "./skill_logos/pytorch.svg";
import tensorflow from "./skill_logos/tensorflow.svg";
import s3Bucket from "./skill_logos/storage-amazon-s3-bucket-with-objects.svg";


const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skill-heading-container">
        <div className="skill-heading">Skills</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={python} alt="Background" />
        <div className="skill-name">Python</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={airflow} alt="Background" />
        <div className="skill-name">airflow</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={aws} alt="Background" />
        <div className="skill-name">aws</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={azurefunctions} alt="Background" />
        <div className="skill-name">azurefunctions</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={fileTypeAzure} alt="Background" />
        <div className="skill-name">Azure</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={fileTypeDVC} alt="Background" />
        <div className="skill-name">fileTypeDVC</div>
      </div>
      <div className="skill-img-container">
        <img className="skill-img" src={flask} alt="Background" />
        <div className="skill-name">flask</div>
      </div>
      <div className="skill-img-container">
        <img className="skill-img" src={mongodb} alt="Background" />
        <div className="skill-name">mongodb</div>
      </div>
      <div className="skill-img-container">
        <img className="skill-img" src={mySql} alt="Background" />
        <div className="skill-name">mySql</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={pandas} alt="Background" />
        <div className="skill-name">pandas</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={pytorch} alt="Background" />
        <div className="skill-name">pytorch</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={tensorflow} alt="Background" />
        <div className="skill-name">Tensorflow</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={s3Bucket} alt="Background" />
        <div className="skill-name">S3-bucket</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={Med_chatbot} alt="Background" />
        <div className="skill-name">Tensorflow</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={Med_chatbot} alt="Background" />
        <div className="skill-name">Tensorflow</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={Med_chatbot} alt="Background" />
        <div className="skill-name">Tensorflow</div>
      </div>
      <div className="skill-img-container">
        <img className="skill-img" src={Med_chatbot} alt="Background" />
        <div className="skill-name">Tensorflow</div>
      </div>
      <div className="skill-img-container">
        <img className="skill-img" src={Med_chatbot} alt="Background" />
        <div className="skill-name">Tensorflow</div>
      </div>
      <div className="skill-img-container">
        <img className="skill-img" src={Med_chatbot} alt="Background" />
        <div className="skill-name">Tensorflow</div>
      </div>

      <div className="skill-img-container">
        <img className="skill-img" src={Med_chatbot} alt="Background" />
        <div className="skill-name">Tensorflow</div>
      </div>
    </div>
  );
};

export default Skills;

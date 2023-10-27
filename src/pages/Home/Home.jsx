import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../server/AxiosInterceptor";
import Loader from "../../shared/Loader";
import ContentLoader from "../../shared/ContentLoader";

const Home = () => {
  const [pageLoading, setPageloading] = useState(true);
  const fileInputRef = useRef(null);
  const [userid, setUserid] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState("");
  const [status, setStatus] = useState(false);
  const [filename, setFilename] = useState("");
  const [disable, setDisable] = useState(false);
  const [projectid, setProjectid] = useState();
  const [input, setinput] = useState({
    id: "",
    userid: "",
    projectid: "",
    scriptid: "src",
    owner: "",
    project_name: "",
    date: "",
    budget: "",
    time: "",
    mm: "",
    am: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        await axiosInstance.get("/userinputnew/");
        const current_user = await axiosInstance.get("/user/");
        console.log("current_user: ", current_user.data);
        const newdata = await axiosInstance.get(
          `/ulist1/${current_user.data.userid}`
        );
        console.log("data:", newdata.data);
        const projectid1 = newdata.data.projectid;
        setProjectid(projectid1);
        console.log(projectid1);
        const newgen = await axiosInstance.get(`/glist1/${projectid1}`);
        setinput(newgen.data);
        setPageloading(false);
      } catch (err) {
        console.log(err);
        console.log("somthing is wrong");
      }
    };
    sendRequest();
  }, []);

  return (
    <div className="p-7 shadow-xl rounded-xl bg-base-100 m-3">
      <h2>Welcome to the Project Center!</h2>
      <p className="mt-2">
        Want to know what all will it take to bring your script on the screen?
      </p>
      <p className="mt-2">
        Upload your script, fill in your budget and the date on which you want
        to start.
      </p>
      <p className="mt-2">
        You will get activity wise and head wise schedule and budget for all the
        activities required for making your film.
      </p>
      <p className="mt-2">
        You will also have the freedom to add/delete/merge/split/change
        duration, start date and allocated budget of any activity.
      </p>

      {pageLoading && (
        <ContentLoader/>
      )}
    </div>
  );
};

export default Home;

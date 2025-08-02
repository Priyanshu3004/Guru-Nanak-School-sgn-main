import "../App.css";

function AdmissionInfo() {
  return (
    <div className="bg-[#DBDBDB] mobilestyle">
      <div className=" container mx-auto px-4 p-10 ">
        {/* <h1 className=" text-2xl md:text-3xl font-bold text-[#03001B]">
          ADMISSION <span className=" text-red-600">INFORMATION</span>{" "}
        </h1>
        <div>
          <p className="my-5">
            The Common Aptitude Analysis is held in the third week of November
            at Shri Guru Nanak Doon Vale School at various locations in India.
            Additionally, it can be organised through the Indian Embassy there.
          </p>
        </div> */}
        <div>
          <h1 className=" text-2xl md:text-3xl font-semibold my-1 text-[#03001B]">
            Steps for <span className=" text-red-600">Admission Procedure</span>
          </h1>
        </div>
        <div className=" ">
          <div className="">
            <img className="image1 ml-[-25px]" src="img/admiproc.png" alt="" />
            <img
              className="image2 ml-[-20px]"
              src="img/admiprocmob.png"
              alt=""
            />
          </div>
        </div>
        {/* <div className="flex mt-[-15px] md:mt-0 ">
                    <button className="inline-flex text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Read More</button>

                </div> */}
      </div>
    </div>
  );
}

export default AdmissionInfo;

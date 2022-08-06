import React, {useState} from "react";
import { dataList } from "../data";
import Contents from "./Contents";
import '../style/Container.css'

function Container() {
  const [searchTerm, setSearchTerm] = useState('')
  let textChange = (e)=>{
    setSearchTerm(e.target.value)
    dataList.map((dataList, key)=>{
      key={key}
      let dataListPara = dataList.para1.toLowerCase().includes(searchTerm.toLowerCase())
      if (dataListPara) {
        <mark>{dataListPara}</mark>
      }

    })
  }
  return (
    <div className="container">

      <div className="content-list">
        <div className="contents-container">
        <div className="contentSearch">
              <form className="d-flex">
                <input className="form-control me-2" type="search" id="searchID" placeholder="Search" onChange={textChange} aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              </div>
          {dataList.map((dataList, key) => {

            return (
              <>

                <Contents
                  key={key}
                  head={dataList.head}
                  head1={dataList.head1}
                  para1={dataList.para1}
                  para2={dataList.para2}
                  para3={dataList.para3}
                /> 
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Container;

import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Variable = ({data})=>{

    const [variableData, setVariableData] = useState()
    const [varName, setVarName] = useState()

    useEffect(()=>{
        if(data.length>0){
            let url = window.location.href.split(window.location.origin+'/variable/')[1];
            const [variableName, criteriaIndex,activeIndex] = url.split('/')
            setVarName(variableName)
            setVariableData(data[activeIndex-1].criteria[criteriaIndex])
        }
    }, [data])

    return (
        <div className="md:max-w-7xl mx-auto max-w-full flex justify-center items-center h-screen">
            <div>
                <Link to='/details'>
                    <button className="inline-flex gap-2 items-center my-3">
                        <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='1.5' stroke="currentColor" className="w-5 h-5"><path strokeLinecap="rond" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"  /></svg>
                        Go back
                    </button>
                </Link>
                <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-5 sm:px-4 w-4ull">
                    <h3 className="text-2xl font-medium leading-6 text-gray-900">Variable params</h3>
                    <hr className="w-full border-[0.1px] border-gray-200 mt-5"></hr>
                    {(variableData!==undefined && variableData.variable[varName].values) && <div>
                        {variableData.variable[varName].values.sort(function(a, b){return a-b}).map((value,i) => {
                            return (
                                <li key={i} className="flex flex-col py-4">
                                    <p className="font-medium text-gray-900">{value}</p>
                                </li>
                            )
                        })
                        }
                        </div>}
                        {(variableData!==undefined && variableData.variable[varName].default_value) && <div>
                            {  
                                <div>
                                    <h3 className="text-lg font-medium leading-6 my-4 text-gray-900 uppercase">{variableData.variable[varName].study_type}</h3>                         
                                    <div>
                                        <label for="number" className="block text-sm font-medium text-gray-700">{variableData.variable[varName].parameter_name}</label>
                                        <div className="mt-1.5">
                                            <input data-testid="indicator-input" name="param_value" type="tel" max="99" min="1" className="block w-full rounded-md border-[0.1px] border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-3" placeholder="period value" value={variableData.variable[varName].default_value}></input>
                                        </div>
                                    </div>    
                                </div>                       
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Variable
import { Link } from "react-router-dom"

const Details = ({data, selectedScanIndex}) => {
    const CreateFinalString = (finalStr, variables, index) => {
        Object.entries(variables).map(([key,value],i) => {
            if(value.values){
                finalStr = finalStr.replace(key, `<a class="text-blue-600" href='variable/${key}/${index}/${selectedScanIndex}' >${value.values[0]}</a>`)
            }else{
                finalStr = finalStr.replace(key, `<a class="text-blue-600" href='variable/${key}/${index}/${selectedScanIndex}' >${value.default_value}</a>`)
            }
        })
        return finalStr;
    }
    
    return (
        <div className="md:max-w-7xl mx-auto max-w-full flex justify-center items-center h-screen">
            <div >
                <Link to='/scans'>
                    <button className="inline-flex gap-2 items-center my-3">
                        <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='1.5' stroke="currentColor" className="w-5 h-5"><path strokeLinecap="rond" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"  /></svg>
                        Go back
                    </button>
                </Link>
                    <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-5 sm:px-4 w-4ull">
                        {
                            data && <div>       
                            <h3 className="text-2xl font-medium leading-6 text-gray-900">{data[selectedScanIndex-1].name}</h3>
                            <div className="mt-3 flex-shrink-0">
                                <p className={`bg-${data[selectedScanIndex-1].color}-100 text-${data[selectedScanIndex-1].color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5`}>{data[selectedScanIndex-1].tag}</p>
                                <hr className="w-full border-[0.1px] border-gray-200 mt-5"></hr>
                            </div>
                            {data[selectedScanIndex-1].criteria.map((criteriaData, index) => {
                                if(criteriaData.type !== 'variable')
                                    return (
                                        <ul key={index} className="divide-y divide-gray-200">
                                            <li className="flex py-4">
                                                <p className="font-medium text-gray-900">
                                                    {criteriaData.text}
                                                </p>
                                            </li>
                                        </ul>
                                    )
                                else
                                    return (
                                        <ul className="divide-y divide-gray-200">
                                            <li className="flex py-4">
                                            <p className="font-medium text-gray-900">
                                                <div dangerouslySetInnerHTML={{__html: CreateFinalString(criteriaData.text, criteriaData.variable, index)}}></div>
                                            </p>
                                            </li>
                                        </ul>
                                    )
                            })}
                            
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Details;
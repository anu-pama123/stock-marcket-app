import { Link } from "react-router-dom";

const Scans = ({data, setselectedScanIndex}) => {

    return (
        <div className="md:max-w-5xl mx-auto max-w-full flex justify-center items-center h-screen">
            <div className="border w-1/2 overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw]">
                <div >
                    {data.map((subData) => {
                        return(
                            <Link to="/details" key={subData.id}>
                                <div id={subData.id} onClick={ (e)=>{setselectedScanIndex(subData.id)} } >
                                    <div className="border-b p-4 hover:bg-gray-50 flex items-center px-4 py-4 sm:px-6">
                                        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                                            <div className="truncate font-medium text-indigo-600">{subData.name}</div>
                                        </div>
                                        <div className="ml-16 flex flex-shrink-0">
                                            <div className={`bg-${subData.color}-100 text-${subData.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5`}>{subData.tag}</div>
                                        </div>
                                        <div className="ml-5 flex-shrink-0">
                                            <svg className="h-3 w-3 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Scans;
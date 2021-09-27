import React, {useEffect, useState} from 'react';
import axios from "axios";
import InputItem from "./components/InputeItem";


const App = () => {
    const [employers,setEmployers] = useState([])
    const [isCheckedAll,setIsCheckedAll] = useState(false)
    const [selected,setSelected] = useState([])

    const handleCheck = (id,status) => {
    // setSelected(status && selected.filter(el=>el.id!==id)? [...selected,employers.find(el=>el.id===id )]:
    //     selected.filter((item) => item.id !== id && [...selected]))
        setSelected([...selected,employers.find(el=>el.id===id)])
    }
    
    
    useEffect(()=>{
        axios('https://614dc2cee3cf1f001712d2f5.mockapi.io/api/employes')
            .then(({data})=>setEmployers(data))

    },[employers])


    return (
        <div className='bg-gray-300 h-screen'>
            <div className="container mx-auto px-4 sm:px-8 max-w-3xl bg-green-200 ">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden ">
                            <table className="min-w-full leading-normal ">
                                <thead>
                                <tr>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        <input type="checkbox"
                                        onChange={(e)=>setIsCheckedAll(e.target.checked)}

                                        />
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Имя
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Фамилия
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Возраст
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    employers.map(el=>
                                           <InputItem key={el.id} el={el}
                                                      isCheckedAll={isCheckedAll}
                                                      handleCheck={handleCheck}
                                           />
                                    )
                                }
                                </tbody>
                            </table>
                            <p>Пользователи: {
                                selected.map(el=>
                                <span>{el.name}</span>
                                )
                            }</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default App;
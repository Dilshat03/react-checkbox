import React, {useEffect, useState} from 'react';

const InputItem = ({el, isCheckedAll,handleCheck}) => {

    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        setIsChecked(isCheckedAll)
    }, [isCheckedAll])

    return (

        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    <input type="checkbox"
                           checked={isChecked}
                           onChange={(e) => {
                               setIsChecked(e.target.checked)
                               handleCheck(el.id,e.target.checked)
                           }}

                    />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {el.name}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {el.surname}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {el.age}
                </p>
            </td>
        </tr>

    );
};

export default InputItem;
import React, { useState } from 'react'

const Attribute = props => {

    const [currentSelected, setSelect] = useState('QUASIIDENTIFYING')
    const { name, index } = props;

    let content = (
            <tr>
                <td>{name}</td>
                <td>
                    <select
                        onChange={(e) => {
                            props.handleTypeSelect(e, name, index)
                            setSelect(e.target.value)
                        }
                        }
                    >
                        <option defaultValue value="QUASIIDENTIFYING">Quasi-identifying</option>
                        <option value="INSENSITIVE">Insensitive</option>
                        <option value="SENSITIVE">Sensitive</option>
                        <option value="IDENTIFYING">Identifying</option>
                    </select>
                </td>
                <td>
                    <input type='file' onChange={(e) => props.handleHierarchyUpload(e.target.files[0], name, index)}></input>
                </td>
            </tr>
    )
    return content
}

export default Attribute

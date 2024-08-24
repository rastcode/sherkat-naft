import React from 'react'

function UserLogin({name,type,placeholder,value,onChange}) {
  return (
    <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
  )
}

export default UserLogin
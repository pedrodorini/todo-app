import React from 'react'

const Checkbox = ({ checked = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    {checked ? (
      <path
        d="M1408,3694h-8a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4h8a4,4,0,0,1,4,4v8A4,4,0,0,1,1408,3694Zm-9.032-8.628h0l-.969.961,3.813,3.813,8.184-8.184-.962-.962-7.222,7.216-2.844-2.844Z"
        transform="translate(-1396 -3678)"
        fill="#2bd798"
      />
    ) : (
      <g fill="none" stroke="#d0d1dc" strokeWidth="2">
        <rect width="16" height="16" rx="4" stroke="none" />
        <rect x="1" y="1" width="14" height="14" rx="3" fill="none" />
      </g>
    )}
  </svg>
)

export default Checkbox

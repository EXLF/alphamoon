import React from 'react'

interface AlphaMoonLogoProps {
  className?: string
  height?: number
  singleLine?: boolean
}

const AlphaMoonLogo: React.FC<AlphaMoonLogoProps> = ({ className = '', height = 40, singleLine = true }) => {
  // For single line layout
  if (singleLine) {
    const width = height * 4.5
    
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 360 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g>
          {/* ALPHA text */}
          <text
            x="0"
            y="60"
            fontFamily="Arial Black, sans-serif"
            fontSize="48"
            fontWeight="900"
            fill="#F1DC4D"
            stroke="#000000"
            strokeWidth="4"
            paintOrder="stroke"
            letterSpacing="-2"
          >
            ALPHA
          </text>
          
          {/* MOON with tight spacing */}
          {/* M */}
          <text
            x="205"
            y="60"
            fontFamily="Arial Black, sans-serif"
            fontSize="48"
            fontWeight="900"
            fill="#F1DC4D"
            stroke="#000000"
            strokeWidth="4"
            paintOrder="stroke"
          >
            M
          </text>
          
          {/* First O as eye - vertical ellipse */}
          <g transform="translate(264, 42)">
            <ellipse cx="0" cy="0" rx="15" ry="19" fill="#000000" />
            <ellipse cx="0" cy="0" rx="12" ry="16" fill="#FFFFFF" />
            <ellipse cx="2" cy="-3" rx="5" ry="7" fill="#000000" />
            <ellipse cx="3.5" cy="-5" rx="2" ry="3" fill="#FFFFFF" />
          </g>
          
          {/* Second O as eye - vertical ellipse, slightly overlapping */}
          <g transform="translate(287, 42)">
            <ellipse cx="0" cy="0" rx="15" ry="19" fill="#000000" />
            <ellipse cx="0" cy="0" rx="12" ry="16" fill="#FFFFFF" />
            <ellipse cx="2" cy="-3" rx="5" ry="7" fill="#000000" />
            <ellipse cx="3.5" cy="-5" rx="2" ry="3" fill="#FFFFFF" />
          </g>
          
          {/* N */}
          <text
            x="305"
            y="60"
            fontFamily="Arial Black, sans-serif"
            fontSize="48"
            fontWeight="900"
            fill="#F1DC4D"
            stroke="#000000"
            strokeWidth="4"
            paintOrder="stroke"
          >
            N
          </text>
        </g>
      </svg>
    )
  }
  
  // Two-line layout (like the original logo)
  const width = height * 2.2
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        {/* ALPHA text centered */}
        <text
          x="90"
          y="60"
          fontFamily="Arial Black, sans-serif"
          fontSize="48"
          fontWeight="900"
          fill="#F1DC4D"
          stroke="#000000"
          strokeWidth="4"
          paintOrder="stroke"
          textAnchor="middle"
          letterSpacing="-2"
        >
          ALPHA
        </text>
        
        {/* MOON with tight spacing, centered */}
        {/* M */}
        <text
          x="22"
          y="120"
          fontFamily="Arial Black, sans-serif"
          fontSize="48"
          fontWeight="900"
          fill="#F1DC4D"
          stroke="#000000"
          strokeWidth="4"
          paintOrder="stroke"
        >
          M
        </text>
        
        {/* First O as eye - vertical ellipse */}
        <g transform="translate(80, 100)">
          <ellipse cx="0" cy="0" rx="15" ry="19" fill="#000000" />
          <ellipse cx="0" cy="0" rx="12" ry="16" fill="#FFFFFF" />
          <ellipse cx="2" cy="-3" rx="5" ry="7" fill="#000000" />
          <ellipse cx="3.5" cy="-5" rx="2" ry="3" fill="#FFFFFF" />
        </g>
        
        {/* Second O as eye - vertical ellipse, slightly overlapping */}
        <g transform="translate(104, 100)">
          <ellipse cx="0" cy="0" rx="15" ry="19" fill="#000000" />
          <ellipse cx="0" cy="0" rx="12" ry="16" fill="#FFFFFF" />
          <ellipse cx="2" cy="-3" rx="5" ry="7" fill="#000000" />
          <ellipse cx="3.5" cy="-5" rx="2" ry="3" fill="#FFFFFF" />
        </g>
        
        {/* N */}
        <text
          x="115"
          y="120"
          fontFamily="Arial Black, sans-serif"
          fontSize="48"
          fontWeight="900"
          fill="#F1DC4D"
          stroke="#000000"
          strokeWidth="4"
          paintOrder="stroke"
        >
          N
        </text>
      </g>
    </svg>
  )
}

export default AlphaMoonLogo
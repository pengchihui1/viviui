import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'
// import { ParameContext } from './tableContext'

// table component
const Table = ({ dtype, children, ...props }) => {
  return (
    <>
      {/* 样式 默认 */}
      {(dtype === 'blackBorder') && (
        <Box
          as='table'
          className='tableBlack '
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}
          <style>
            {`
            .tableBlack tr td ,.tableBlack tr th{
               border: 1px solid black;
            }
           `}
          </style>
        </Box>
      )}

      {(dtype === 'border') && (
        <Box
          as='table'
          className='borderStyle'
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}

          <style>
            {`
               .borderStyle tr td , .borderStyle tr th{
                border: 1px solid black;//所有边框黑色
              }
              .borderStyle tr:nth-child(1) td{
                background-color:none; //隔行换色
              }
              .borderStyle tr:nth-child(even) td{
                background-color:#dff0d8;
              }
              .borderStyle tr:nth-child(odd) td{
                background-color:#f9f9f9 ;
              }
            
            `}
          </style>
        </Box>
      )}
      {/* 样式 条纹  */}
      {(dtype === 'shadow') && (
        <Box
          as='table'
          className=' trShadow'
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}
          <style jsx global>
            {`
              .trShadow tr{ 
                border-bottom: 1px solid #ddd; 
              }
              .trShadow thead tr:first-of-type{ 
               border-bottom:none;
              }
              .trShadow  tr:nth-child(1) td{
                background-color:none; 
              }
              .trShadow tr:nth-child(even) td{
                background-color:#dff0d8;
              }
              .trShadow tbody tr:hover, tr:hover{
                box-shadow: 0 5px 20px 0 rgba(0,0,0,0.5) inset;
                cursor:auto;
              }

              `}
          </style>
        </Box>
      )}

      {/* 鼠标指示 */}
      {(dtype === 'mouse') && (
        <Box
          as='table'
          className='trHover'
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}
          <style>
            {`
            
              .trHover tr{
                border-top: 1px solid #ddd;  
              }
              .trHover thead tr:first-of-type{ 
                border-top:none; 
               }
              .trHover tr:nth-child(even) {
                background-color:#dff0d8;
              }
              .trHover tr:nth-child(odd) {
                background-color:f9f9f9 ;
              }
              .trHover tr:hover,.trHover tr:hover{
                background-color: #f5f5f5;
                cursor:auto;
              }
              `}
          </style>
        </Box>

      )}
      {/* 紧凑 */}
      {
        (dtype === 'compact') && (
          <Box
            as='table'
            className='trLeight'
            w='99%'
            m='auto'
            letterSpacing='0.05rem'
            {...props}
          >
            {children}

            <style>
              {`
               .trLeight tr{
                border-top: 1px solid #ddd;
                line-height:30px;
               }
               .trLeight thead tr:first-of-type{ 
                border-top: none;
               }
               .trLeight tr:nth-child(1) td{
                background-color:none; 
              }
              .trLeight tr:nth-child(even) td{
                background-color:#dff0d8;
              }
              .trLeight tr:nth-child(odd) td{
                background-color:#f9f9f9 ;
              }
              
              `}
            </style>
          </Box>
        )
      }
      {/* 松大 */}
      {
        (dtype === 'looseBig') && (
          <Box
            as='table'
            className='trLeight'
            w='99%'
            m='auto'
            letterSpacing='0.05rem'
            {...props}
          >
            {children}

            <style>
              {`
               .trLeight tr{
                border-top: 1px solid #ddd;
                line-height:50px;
               }
               .trLeight thead tr:first-of-type{ 
                border-top: none;
               }
              .trLeight tr:nth-child(even) td{
                background-color:#dff0d8;
              }
              .trLeight tr:nth-child(odd) td{
                background-color:#f9f9f9 ;
              }
              `}
            </style>
          </Box>
        )
      }

    </>
  )
}

export default memo(Table)

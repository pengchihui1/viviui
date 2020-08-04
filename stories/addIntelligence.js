import React from 'react'
import { Button, useDisclosure } from '@chakra-ui/core'
// import {
//   AddIntelligence
// } from '../src/components/selectSearch/programa'
import Admin from '../src/components/admin/adminPage'
import EditShow from '../src/components/editShow'
import DeleteIcon from '../src/components/editShow/deleteIcon'
import ConfirmButton from '../src/components/editShow/confirmButton'
import CancelButton from '../src/components/editShow/cancelButton'
import EditTable from '../src/components/editShow/editTable'

export default { title: 'AddIntelligence' }

export const EditableOne = () => {
  return (
    <>
      <EditTable value='jfiekj' color='#CC6600' />
    </>
  )
}

export const ListTest = () => {
  const talents = [
    { title: '自己啊就睏了就', content: '加哦就發欸違法' },
    { title: '及基督教發射東風五', content: '打發發打飛' },
    { title: '大沙發惡法而無法', content: '德法俄法違法' },
    { title: '士大夫文人收到', content: '蘇打粉微軟分爲' }
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Admin
        backurl='教義中學第六校>管理員'
        button={
          <>
            <Button
              variant='outline'
              variantColor='green'
              onClick={onOpen}
              display={isOpen ? 'none' : 'block'}
              mx=' auto'
            >
              新增智能
            </Button>
            {/* {isOpen && <AddIntelligence onClose={onClose} isOpen={isOpen} />} */}
          </>
        }
      >
        <EditShow>
          <EditTable value='fdfjo' />
          <EditTable value='fdfjo' />
          <DeleteIcon />
          <ConfirmButton>確認</ConfirmButton>
          <CancelButton>還原</CancelButton>
        </EditShow>
        {/* {talents.map((item, index) => {
          return (
            <>
              <Intelligence
                left={
                  <>
                    <EditIntelligence value='亚罗可' />
                    <EditIntelligence value='明星桥' />
                  </>
                }
                right={
                  <DeleteIcon
                    onClick={() => {
                      console.log('杰克')
                    }}
                  />
                }
                buttonGroup={
                  <>
                    <ConfirmButton />
                    <CancelButton />
                  </>
                }
              />
            </>
          )
        })} */}
      </Admin>
    </>
  )
}
// export const add = () => {
//   return <AddIntelligence />
// }

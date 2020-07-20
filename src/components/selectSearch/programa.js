import React, { useState, useRef, useRouter } from 'react'
import {
  Box,
  Input,
  Heading,
  Icon,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  IconButton,
  useDisclosure,
  NewModal,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Stack,
  DrawerOverlay,
  Select,
  Flex,
  Grid,
  Button,
  PseudoBox,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/core'
import { Container } from '../containerPage'
import Admin from '../admin/adminPage'
import { Formik, Field, Form } from 'formik'

// Editable单个编辑
export const ProgramaOne = ({ title, content, color, fontSize, children, ...props }) => {
  const [begin, setBegin] = useState(title || '')
  const [finish, setFinish] = useState(title)

  return (
    <Box border=''>
      <Editable
        textAlign='left'
        defaultValue={title || ('空' || !!content ? content : '空')}
        fontSize={fontSize}
        color={color}
        whiteSpace='nowrap'
        overflow='hidden'
        textOverflow='ellipsis'
        p='5px 10px'
        isPreviewFocusable={false}
      >
        {({ isEditing, onSubmit, onRequestEdit, onChange }) => (
          <>
            <EditablePreview />
            <EditableInput onChange={(e) => { setFinish(e.target.value) }} />
            <IconButton
              variantColor='green.600' variant='outline'
              ml={5} size='xs' icon='edit' onClick={onRequestEdit}
            />
          </>
        )}
      </Editable>
    </Box>
  )
}

// 智能编辑
export const EditIntelligence = ({ talent, deleteColor, deleteButtonTop = true, children, ...props }) => {
  const [selectValue, setSelectValue] = useState(talent || '')
  const [talentName, setTalentName] = useState(talent)
  return (
    <>
      <Box mx='auto'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Grid templateColumns='repeat(1, 1fr)' gap={0} m='10px' width='40%'>
            <Editable
              textAlign='left'
              fontSize='24px'
              color='#2f98ff'
              whiteSpace='nowrap'
              defaultValue={talent.title}
              overflow='hidden'
              textOverflow='ellipsis'
              p='5px 10px'
              isPreviewFocusable={false}
            >
              {({ isEditing, onSubmit, onRequestEdit, onChange }) => (
                <>
                  <EditablePreview />
                  <EditableInput onChange={(e) => { setTalentName({ title: e.target.value }); console.log(e.target.value) }} />
                  <IconButton
                    variantColor='green.600' variant='outline'
                    ml={5} size='xs' icon='edit' onClick={onRequestEdit}
                  />
                </>
              )}
            </Editable>
            <Editable
              textAlign='left'
              fontSize='24px'
              defaultValue={talent.content}
              color='#8b814c'
              whiteSpace='nowrap'
              overflow='hidden'
              textOverflow='ellipsis'
              p='5px 10px'
              isPreviewFocusable={false}
            >
              {({ isEditing, onSubmit, onRequestEdit, onChange }) => (
                <>
                  <EditablePreview />
                  <EditableInput onChange={(e) => { setTalentName({ content: e.target.value }); console.log(e.target.value) }} />
                  <IconButton
                    variantColor='green.600' variant='outline'
                    ml={5} size='xs' icon='edit' onClick={onRequestEdit}
                  />
                </>
              )}
            </Editable>
          </Grid>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} width='30%'>
            <Box display='flex' alignItems='center'>
              <Icon name='delete' size='24px' color='#696969' cursor='pointer' />
            </Box>
            <ProgramaRightButton
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              }
            />
          </Grid>
        </Flex>
      </Box>
    </>
  )
}

// 添加按钮
export const ProgramaRightButton = (visibility) => {
  return (
    <>
      <Button bg='#9370DB' color='white' _hover='color:black' visibility={visibility}>確認修改</Button>
      <Button bg='#00B2EE' color='white' _hover='color:black' visibility={visibility}>還原</Button>
    </>
  )
}

// 智能添加
export const AddIntelligence = ({ submitButton, cancelButton, ...props }) => {
  const toast = useToast()
  const validateName = (value) => {
    let error
    if (!value) {
      error = '内容不能为空'
    } else if (value.length < 3) {
      error = '长度不能少于2个'
    }
    return error
  }
  return (
    <PseudoBox
      _hover={{ backgroundColor: '#ceedff' }} cursor='pointer' p={{ base: '20px', sm: '20px', md: '10px' }}
    >
      <Formik
        initialValues={{ name1: '', name2: '' }}
        onSubmit={(values, actions) => {
          toast({
            position: 'top',
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true
          })
          console.log(values.name1, values.name2)
          actions.setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form p='5px 0'>
            <Flex direction={{ base: 'column', md: 'row' }} alignItems='center' justifyContent={{ md: 'space-between', base: 'flex-start' }}>
              <Grid width={{ base: '100%', md: '60%' }} templateColumns='repeat(1, 1fr)' gap={4}>
                <Field name='name1' validate={validateName}>
                  {({ field, form: { errors, touched } }) => (
                    <FormControl isInvalid={errors.name1 && touched.name1}>
                      <Input placeholder='新增智能名称' {...field} />
                      <FormErrorMessage>{errors.name1}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='name2' validate={validateName}>
                  {({ field, form: { errors, touched } }) => (
                    <FormControl isInvalid={errors.name2 && touched.name2}>
                      <Input placeholder='新增智能英文名称' {...field} />
                      <FormErrorMessage>{errors.name2}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Grid>
              <Grid width={{ base: '100%', md: '30%' }} mt={{ base: '20px', md: '0' }} templateColumns='repeat(2, 1fr)' gap={8}>
                <Button isLoading={props.isSubmitting} variantColor='green' type='submit'> {submitButton || '送出资料'} </Button>
                <Button onClick={() => { props.onClose() }} variantColor='green'>{cancelButton || '取消'} </Button>
              </Grid>
            </Flex>
          </Form>

        )}
      </Formik>
    </PseudoBox>
  )
}

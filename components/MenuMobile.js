import React from 'react'
import {useDisclosure,Button,Drawer,DrawerBody,Input,DrawerContent,DrawerHeader,DrawerFooter,DrawerOverlay,DrawerCloseButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import MenuDesktop from './MenuDesktop'
function MenuMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <><Button variant='ghost' marginTop="1rem" onClick={onOpen}><HamburgerIcon color="green"/></Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <MenuDesktop/>
        </DrawerContent>
      </Drawer>
</>
  )
}

export default MenuMobile
"use client"
import { Text,Box } from "@chakra-ui/react"
import Link from "next/link"
export default function Home() {
  return (
    <>
    <Text fontSize="40px" width="100%" textAlign="center">
      Welcome to Notes!
    </Text>
    <Box height="32px" display="flex" justifyContent="center" width="100%" fontSize="16px">
    <Link href="/notes">
      <Text backgroundColor="rgba(238, 238, 238,1)" padding="10px" borderRadius="15px" >
      Go to Main Notes Page
      </Text>
    </Link>
    </Box>
    </>
  )
}
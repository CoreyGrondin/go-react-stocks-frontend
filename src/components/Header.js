import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function Header() {
	return (
		<Flex
			pos="absolute"
			left="5"
			right="5"
			h="45px"
			marginTop="2.5vh"
			border="1px"
			borderRadius="10px"
			borderStyle="inset"
			bg="#7EC8E3"
		>
			<Text width="100%" align="center" fontSize="2xl">
				Welcome to go-react-stocks-frontend
			</Text>
		</Flex>
	);
}

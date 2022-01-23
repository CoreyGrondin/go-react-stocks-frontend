import { Box, Center, Text, Stack, useColorModeValue } from '@chakra-ui/react';

export default function FinancialStats(props) {
	return (
		<Center py={6}>
			<Box
				maxW={'330px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.800')}
				boxShadow={'2xl'}
				rounded={'md'}
				overflow={'hidden'}
			>
				<Stack
					textAlign={'center'}
					p={6}
					color={useColorModeValue('gray.800', 'white')}
					align={'center'}
				>
					<Text
						fontSize={'sm'}
						fontWeight={500}
						bg={useColorModeValue('blue.50', 'blue.900')}
						p={2}
						px={3}
						color={props.market}
						rounded={'full'}
					>
						{props.name}
					</Text>
					<Stack direction={'row'} align={'center'} justify={'center'}>
						<Text fontSize={'3xl'}>$</Text>
						<Text fontSize={'5xl'} fontWeight={800}>
							{props.value}
						</Text>
					</Stack>
				</Stack>
			</Box>
		</Center>
	);
}

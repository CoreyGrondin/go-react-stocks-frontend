import React from 'react';
import { Flex, Text, Icon, Link, Menu, MenuButton } from '@chakra-ui/react';

export default function NavItem({ icon, title, description, active, navSize }) {
	return (
		<Flex
			mt={30}
			flexDir="column"
			w="100%"
			alignItems={navSize === 'small' ? 'center' : 'flex-start'}
		>
			<Menu placement="right">
				<Link
					backgroundColor={active && '#79A9F5'}
					p={3}
					borderRadius={8}
					_hover={{ textDecor: 'none', backgroundColor: '#4B7BF5' }}
					w={navSize === 'large' && '100%'}
				>
					<MenuButton w="100%">
						<Flex>
							<Icon as={icon} fontSize="xl" color={active ? '#C2E2F5' : 'gray.500'} />
							<Text ml={5} display={navSize === 'small' ? 'none' : 'flex'}>
								{title}
							</Text>
						</Flex>
					</MenuButton>
				</Link>
			</Menu>
		</Flex>
	);
}

import React, { useState } from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { FiMenu, FiHome, FiDollarSign } from 'react-icons/fi';
import { BsCurrencyBitcoin } from 'react-icons/bs';

import NavItem from '../components/NavItem';

export default function Sidebar() {
	const [navSize, changeNavSize] = useState('large');
	return (
		<Flex
			pos="sticky"
			left="5"
			h="88vh"
			bottom="5"
			marginTop="75px"
			boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
			border="1px"
			borderRadius="10px"
			borderStyle="inset"
			w="10%"
			flexDir="column"
			justifyContent="space-between"
			bg="#7EC8E3"
		>
			<Flex
				p="5%"
				flexDir="column"
				w="100%"
				alignItems={navSize === 'small' ? 'center' : 'flex-start'}
				as="nav"
			>
				<IconButton
					background="none"
					mt={5}
					_hover={{ background: 'none' }}
					icon={<FiMenu />}
					onClick={() => {
						if (navSize === 'small') changeNavSize('large');
						else changeNavSize('small');
					}}
				/>
				<NavItem
					navSize={navSize}
					icon={FiHome}
					title="Dashboard"
					description="This is the description for the dashboard."
				/>
				<NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
				<NavItem navSize={navSize} icon={BsCurrencyBitcoin} title="Crypto" />
			</Flex>
		</Flex>
	);
}

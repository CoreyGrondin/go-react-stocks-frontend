import React, { useState } from 'react';

import { Flex, Grid, Button } from '@chakra-ui/react';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FinancialStats from './components/FinancialStats';

function App() {
	const [cyrptoAssets, setcyrptoAssets] = useState([]);
	const [stockAssets, setstockAssets] = useState();

	async function cryptoHandler() {
		const reponse = await fetch('http://localhost:8080/api/crypto', {
			//mode: 'no-cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
		const data = await reponse.json();
		setcyrptoAssets(data);
		console.log(cyrptoAssets);
		//console.log(data.data[0].name);
		// console.log(data['Global Quote']['02. open']);
	}

	async function stockHandler() {
		const reponse = await fetch('http://localhost:8080/api/stocks', {
			//mode: 'no-cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
		const data = await reponse.json();
		setstockAssets(data);
		console.log(stockAssets);
		//console.log(data['Global Quote']['05. price']);
		//console.log(data['Global Quote']['01. symbol']);
	}

	return (
		<Flex bg="#050A30">
			<Sidebar />
			<Header />
			<Flex
				position="absolute"
				h="86vh"
				right="5"
				left="12%"
				bottom="5"
				marginTop="75px"
				boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
				border="1px"
				borderRadius="10px"
				borderStyle="inset"
				bg="#7EC8E3"
			>
				<Button colorScheme="teal" variant="outline" onClick={cryptoHandler}>
					Crypto! :)
				</Button>

				<Button colorScheme="teal" variant="outline" onClick={stockHandler}>
					Stocks! :)
				</Button>

				<Grid templateColumns="repeat(3, 1fr)" gap={6} width="100%" m={2}>
					{cyrptoAssets.data.length > 0 && (
						<FinancialStats
							name={cyrptoAssets.data[0].name}
							value={Math.round(cyrptoAssets.data[0].priceUsd * 100) / 100}
							market="red.500"
						/>
					)}

					{stockAssets && (
						<FinancialStats
							name={stockAssets['Global Quote']['01. symbol']}
							value={Math.round(stockAssets['Global Quote']['05. price'] * 100) / 100}
							market="green.500"
						/>
					)}
				</Grid>
			</Flex>
		</Flex>
	);
}

export default App;

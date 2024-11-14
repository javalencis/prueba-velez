import React, { useState } from 'react';

import Box from '@vtex/styleguide/lib/Box';
import Button from '@vtex/styleguide/lib/Button';

const App: React.FC = () => {
	const [state, setState] = useState(0);
	return (
		<div className='pa7'>
			<Box>
				<div className='flex flex-column items-center'>
					<h1 className='t-heading-1 tc'>Ract TS + VTEX</h1>
					<div className='flex flex-row justify-center mb7'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
							width='70'
							height='auto'
							className='mr7'
							style={{
								objectFit: 'contain'
							}}
						/>
						<img
							src='https://yt3.googleusercontent.com/B_JCxhXMZOik_j8VEHodED8vTSCBLBRi7s4Eox-DRe4vY1qUiPgvkUVhtL9vncbjVM59htKT5MY=s160-c-k-c0x00ffffff-no-rj'
							width='80px'
							height='auto'
						/>
					</div>
				</div>

				<span className='mr4 flex flex-row justify-center'>
					<Button
						variation='danger'
						onClick={() => {
							setState(state - 1);
						}}
					>
						-
					</Button>
					<p className='mh7 t-action--large mw9'>{state}</p>
					<Button
						variation='prim'
						onClick={() => {
							setState(state + 1);
						}}
					>
						+
					</Button>
				</span>
				<p className='mt10'>Documentacion</p>
				<ul>
					<li>
						<a href='https://es.react.dev/'>React</a>
					</li>
					<li>
						<a href='https://tachyons.io/#style'>Tachyons</a>
					</li>
					<li>
						<a href='https://styleguide.vtex.com/'>
							Styleguide
						</a>
					</li>
				</ul>
			</Box>
		</div>
	);
};

export default App;

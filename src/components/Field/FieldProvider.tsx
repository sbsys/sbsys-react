/* react */
import { FC, createContext, memo } from 'react';
/* props */
import { SBSYSFieldContext, SBSYSFieldProvider } from './FieldElement';

export const Context = createContext<SBSYSFieldContext | null>(null);

const FieldProvider: FC<SBSYSFieldProvider> = ({ value, children }) => {
	return (
		<Context.Provider value={value}>
			{typeof children === 'function' ? children() : children}
		</Context.Provider>
	);
};

export default memo(FieldProvider);

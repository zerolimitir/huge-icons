import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.58 3.026a3.464 3.464 0 0 0-.85.261l-.259.123 2.052 2.053c1.129 1.129 2.065 2.044 2.081 2.035.061-.038.272-.613.333-.906a2.988 2.988 0 0 0-1.602-3.269 3.79 3.79 0 0 0-.555-.221c-.243-.065-.979-.112-1.2-.076m-2.299 1.705c-.172.379-.243.685-.268 1.149-.018.346-.007.483.064.778.215.9.814 1.656 1.615 2.038.4.192.699.265 1.188.291.487.026.928-.059 1.387-.267l.27-.123-2.058-2.058a229.69 229.69 0 0 0-2.071-2.059c-.007 0-.064.113-.127.251'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallBlock);
export default ForwardRef;

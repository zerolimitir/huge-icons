import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 3.043a4.293 4.293 0 0 0-1.702.669c-.768.522-1.33 1.316-1.597 2.256-.1.351-.107.434-.124 1.462l-.018 1.09h2.222c2.41 0 2.51.007 3.06.227.465.185.808.415 1.186.793.696.696 1.02 1.477 1.02 2.46 0 .97-.323 1.758-1 2.441-.512.517-.942.766-1.671.968-.295.082-.408.087-2.563.101l-2.254.016.018 1.067c.017 1.007.024 1.088.126 1.445.423 1.494 1.58 2.572 3.09 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V6.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M2 12v2h2.098c1.377 0 2.171-.015 2.31-.044C7.31 13.768 8 12.92 8 12c0-.932-.71-1.791-1.617-1.957-.151-.027-.994-.043-2.31-.043H2v2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletClose);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 4.047c-.721.138-1.381.801-1.536 1.545-.029.139-.044.933-.044 2.31V10H7.927c-1.316 0-2.159.016-2.31.043C4.71 10.209 4 11.068 4 12c0 .92.69 1.768 1.592 1.956.139.029.933.044 2.31.044H10v2.098c0 1.377.015 2.171.044 2.31C10.232 19.31 11.08 20 12 20c.92 0 1.768-.69 1.956-1.592.029-.139.044-.933.044-2.31V14h2.098c1.377 0 2.171-.015 2.31-.044C19.31 13.768 20 12.92 20 12c0-.932-.71-1.791-1.617-1.957-.151-.027-.994-.043-2.31-.043H14V7.902c0-1.377-.015-2.171-.044-2.31-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTwitter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10 10v2h3.098c2.107 0 3.166-.014 3.31-.044C17.31 11.768 18 10.92 18 10c0-.92-.69-1.768-1.592-1.956-.144-.03-1.203-.044-3.31-.044H10v2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTwitter);
export default ForwardRef;

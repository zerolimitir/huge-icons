import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.699 1.216c-.149.065-.367.308-.408.455-.04.141-.041 11.555-.001 11.696.072.258.418.51.701.512.262.002.547-.173.683-.419.06-.109.067-.441.077-3.469l.011-3.349 2.755-.011 2.756-.011.153-.124c.21-.17.301-.339.308-.575.005-.178-.04-.291-.449-1.11l-.454-.913.45-.899c.394-.787.45-.924.45-1.1a.749.749 0 0 0-.464-.696c-.179-.068-6.41-.056-6.568.013'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapFlag);
export default ForwardRef;

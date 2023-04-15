import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLandscapeLineCenter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.58 3.047c-.721.138-1.381.801-1.536 1.545-.026.125-.044.663-.044 1.31V7h10V5.902c0-.647-.018-1.185-.044-1.31-.159-.762-.818-1.411-1.573-1.549-.302-.055-6.512-.051-6.803.004M7 18.098c0 .647.018 1.185.044 1.31.157.75.798 1.391 1.548 1.548.144.03 1.229.044 3.408.044s3.264-.014 3.408-.044a2.062 2.062 0 0 0 1.548-1.548c.026-.125.044-.663.044-1.31V17H7v1.098'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscapeLineCenter);
export default ForwardRef;

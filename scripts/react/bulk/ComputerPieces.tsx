import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgComputerPieces = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.011 14.77c.023.857.054 1.013.301 1.526a2.94 2.94 0 0 0 1.428 1.408c.631.298.597.296 4.264.296h3.236v2.52H8.776l-.181.115a.73.73 0 0 0 .103 1.29c.153.069.341.073 3.302.073s3.149-.004 3.302-.073a.73.73 0 0 0 .103-1.29l-.181-.115H12.76V18h3.236c3.667 0 3.633.002 4.264-.296a2.925 2.925 0 0 0 1.444-1.444c.227-.479.296-.864.296-1.644V14H1.991l.02.77'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgComputerPieces);
export default ForwardRef;

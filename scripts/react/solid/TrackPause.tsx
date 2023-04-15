import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 5.047c-.721.138-1.381.801-1.536 1.545-.062.298-.062 10.518 0 10.816.157.75.798 1.391 1.548 1.548.283.059 2.533.059 2.816 0a2.062 2.062 0 0 0 1.548-1.548c.062-.298.062-10.518 0-10.816-.159-.762-.818-1.411-1.573-1.549-.291-.053-2.52-.05-2.803.004m10 0c-.721.138-1.381.801-1.536 1.545-.062.298-.062 10.518 0 10.816.157.75.798 1.391 1.548 1.548.283.059 2.533.059 2.816 0a2.062 2.062 0 0 0 1.548-1.548c.062-.298.062-10.518 0-10.816-.159-.762-.818-1.411-1.573-1.549-.291-.053-2.52-.05-2.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPause);
export default ForwardRef;

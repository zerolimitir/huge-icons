import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGridOneTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.58 2.047c-.721.138-1.381.801-1.536 1.545-.062.3-.062 16.516 0 16.816.157.75.798 1.391 1.548 1.548.292.061 4.524.061 4.816 0a2.062 2.062 0 0 0 1.548-1.548c.062-.3.062-16.516 0-16.816-.159-.762-.818-1.411-1.573-1.549-.298-.054-4.515-.051-4.803.004m12 0c-.721.138-1.381.801-1.536 1.545C14.015 3.732 14 4.551 14 6c0 1.449.015 2.268.044 2.408.157.75.798 1.391 1.548 1.548.292.061 4.524.061 4.816 0a2.062 2.062 0 0 0 1.548-1.548c.061-.292.061-4.524 0-4.816-.159-.762-.818-1.411-1.573-1.549-.298-.054-4.515-.051-4.803.004m0 12c-.721.138-1.381.801-1.536 1.545-.029.14-.044.959-.044 2.408 0 1.449.015 2.268.044 2.408.157.75.798 1.391 1.548 1.548.292.061 4.524.061 4.816 0a2.062 2.062 0 0 0 1.548-1.548c.061-.292.061-4.524 0-4.816-.159-.762-.818-1.411-1.573-1.549-.298-.054-4.515-.051-4.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGridOneTwo);
export default ForwardRef;

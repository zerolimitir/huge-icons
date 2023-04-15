import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTestTubeCylindrical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.811 1.279c-.552.132-.743.839-.336 1.245.195.196.364.236.995.236H8v4.48h8V2.76h.53c.631 0 .8-.04.995-.236.345-.345.285-.877-.131-1.152l-.168-.112-5.143-.006c-2.829-.004-5.201.007-5.272.025M8.01 13.71l.012 4.95.11.378c.363 1.24 1.235 2.218 2.388 2.677 1.316.524 2.866.295 3.961-.585a3.933 3.933 0 0 0 1.436-2.356c.081-.398.083-.511.083-5.21V8.76H7.998l.012 4.95'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeCylindrical);
export default ForwardRef;

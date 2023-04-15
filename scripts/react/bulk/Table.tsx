import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.42 3.044a4.83 4.83 0 0 0-.579.139 3.972 3.972 0 0 0-2.653 2.639C3.035 6.308 3 6.67 3 7.783V8.8h9V3l-2.67.005c-1.468.003-2.778.02-2.91.039M12 12v3.16H2.993l.017 1.25c.017 1.211.021 1.262.125 1.628.426 1.496 1.582 2.572 3.091 2.879.387.079.535.083 3.09.083H12v-5.84h9V8.84h-9V12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTable);
export default ForwardRef;

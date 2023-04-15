import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShutDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.807 1.289c-.249.053-.465.281-.523.549-.029.135-.044.906-.043 2.254.001 1.906.006 2.059.075 2.208a.743.743 0 0 0 1.368 0c.069-.149.074-.302.074-2.22 0-1.273-.016-2.128-.041-2.239-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShutDown);
export default ForwardRef;

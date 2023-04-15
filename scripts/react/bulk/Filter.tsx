import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.64 2.064c-1.326.352-2.02 1.832-1.417 3.022.057.113 1.393 1.891 2.969 3.95 1.575 2.059 2.939 3.866 3.031 4.014.092.149.227.423.299.61l.133.34h4.692l.116-.306c.065-.169.199-.443.298-.61.1-.167 1.47-1.987 3.045-4.044 1.574-2.057 2.909-3.831 2.965-3.943.356-.702.284-1.533-.188-2.194a2.06 2.06 0 0 0-1.182-.82c-.297-.082-.346-.083-7.42-.08-6.11.002-7.152.011-7.341.061'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;

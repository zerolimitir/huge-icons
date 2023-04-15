import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGoogle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12 12v1.52h9.878l.021-.09c.124-.539.124-2.31 0-2.86l-.021-.09H12V12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGoogle);
export default ForwardRef;

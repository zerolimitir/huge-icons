import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgColorInversion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12 11.994V22h.25c.728 0 1.856-.209 2.723-.505 1.334-.456 2.468-1.178 3.491-2.223 1.224-1.249 2.02-2.738 2.354-4.403.41-2.04.134-3.759-.959-5.969-.861-1.741-2.11-3.398-3.512-4.659-1.508-1.355-2.878-2.103-4.077-2.225L12 1.989v10.005'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgColorInversion);
export default ForwardRef;

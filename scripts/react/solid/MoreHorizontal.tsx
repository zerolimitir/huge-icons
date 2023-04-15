import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoreHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.458 10.035c-.545.141-.946.64-.95 1.182-.003.376.106.643.369.906a1.233 1.233 0 0 0 2.113-.797 1.234 1.234 0 0 0-1.16-1.309 1.663 1.663 0 0 0-.372.018m5 0c-.545.141-.946.64-.95 1.182-.003.376.106.643.369.906a1.233 1.233 0 0 0 2.113-.797 1.234 1.234 0 0 0-1.16-1.309 1.663 1.663 0 0 0-.372.018m5 0c-.545.141-.946.64-.95 1.182-.003.376.106.643.369.906a1.233 1.233 0 0 0 2.113-.797 1.234 1.234 0 0 0-1.16-1.309 1.663 1.663 0 0 0-.372.018'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoreHorizontal);
export default ForwardRef;

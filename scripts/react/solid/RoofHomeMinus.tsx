import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.336 2.058a4.172 4.172 0 0 0-1.236.39c-.394.198-.069-.021-3.86 2.605-3.573 2.475-3.662 2.546-3.958 3.158-.218.451-.296.827-.268 1.289.042.679.261 1.151.809 1.745.257.279.386.461.52.733.298.604.295.568.297 3.662.001 2.515.007 2.77.076 3.1.316 1.526 1.446 2.695 3.024 3.13l.4.11h9.72l.4-.11c.22-.06.598-.208.84-.328 1.1-.547 1.815-1.416 2.151-2.615.083-.298.086-.397.108-3.287l.022-2.98.109-.323c.137-.406.338-.718.743-1.155.809-.87.983-1.941.485-2.972-.296-.61-.385-.682-3.958-3.155-3.842-2.66-3.473-2.411-3.86-2.605a4.303 4.303 0 0 0-2.564-.392m4.052 11.309a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.064.092-.18.204-.257.249-.137.081-.186.082-3.359.082s-3.222-.001-3.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.539-.028 3.268-.024l3.143.006.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeMinus);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartWaveFull = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m2.01 13.824.012 4.836.11.378c.441 1.507 1.585 2.572 3.094 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083a4 4 0 0 0 3.096-2.905l.107-.392.011-1.82.012-1.82-1.35-1.007c-.743-.554-1.431-1.053-1.53-1.108-.385-.215-.99-.285-1.435-.167-.435.116-.634.254-1.324.922-.391.379-.744.684-.864.749a2.025 2.025 0 0 1-2.354-.347c-.197-.197-.303-.389-1.103-1.98-.953-1.899-1.062-2.068-1.514-2.358a2.027 2.027 0 0 0-1.502-.267c-.48.113-.703.264-1.424.964-.564.547-.701.659-.941.768-.6.275-1.328.244-1.855-.078a169.351 169.351 0 0 1-2.755-2.043c-.041-.032-.049.877-.039 4.796'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartWaveFull);
export default ForwardRef;

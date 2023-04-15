import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTestTubeCylindricalCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.33 2.778a1.767 1.767 0 0 0-1.341 1.436c-.059.344 0 .703.173 1.062.117.242.379.516 3.213 3.349 2.815 2.815 3.108 3.096 3.345 3.211.362.174.688.229 1.037.175.963-.149 1.624-1.023 1.486-1.964-.089-.604.058-.435-3.318-3.82-1.686-1.69-3.143-3.128-3.238-3.194-.367-.257-.903-.357-1.357-.255M4.796 14.23c-.671.677-1.285 1.32-1.364 1.43a3.343 3.343 0 0 0-.661 1.923c-.045 1.027.296 1.914 1.012 2.63.993.993 2.45 1.295 3.778.784.659-.254.699-.29 4.169-3.752a362.802 362.802 0 0 0 3.23-3.244c0-.017-8.84-1.011-8.922-1.003-.012.001-.571.555-1.242 1.232'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeCylindricalCrooked);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlashLight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.495 2.096c-.386.18-.519.472-.483 1.062.058.951.392 1.908.932 2.666.436.613 1.133 1.232 1.757 1.559l.298.157L9 13.412c0 6.424-.01 6.141.234 6.739a3.046 3.046 0 0 0 1.615 1.615 2.998 2.998 0 0 0 4.089-2.185c.054-.26.062-1.04.062-6.171V7.536l.19-.092c.335-.162.856-.535 1.2-.86a5.145 5.145 0 0 0 1.598-3.426c.036-.59-.097-.882-.483-1.062l-.205-.095H6.7l-.205.095m5.91 6.285c.08.051.188.162.24.246.095.152.095.158.095 1.38v1.226l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172v-1.226c0-1.214.001-1.229.093-1.376.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashLight);
export default ForwardRef;

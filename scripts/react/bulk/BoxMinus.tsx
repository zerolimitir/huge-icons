import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8 5.912v3.912l.104.208c.233.468.735.671 1.239.502.17-.058.331-.198 1.177-1.033C11.567 8.47 11.608 8.44 12 8.44c.392 0 .433.03 1.48 1.061.846.835 1.007.975 1.177 1.033.504.169 1.006-.034 1.239-.502L16 9.824V2H8v3.912m7.7 12.404a.745.745 0 0 0 .029 1.382c.13.054.535.062 3.188.062 2.068 0 3.105-.014 3.245-.044a.65.65 0 0 0 .358-.196c.409-.409.205-1.115-.358-1.236-.14-.03-1.176-.044-3.254-.043-2.878.001-3.057.005-3.208.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxMinus);
export default ForwardRef;

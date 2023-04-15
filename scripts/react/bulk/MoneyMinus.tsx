import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 7.095A.976.976 0 0 0 5.002 8c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m5.858 2.98a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m4.262 6.241a.745.745 0 0 0 .029 1.382c.13.054.535.062 3.188.062 2.068 0 3.105-.014 3.245-.044a.65.65 0 0 0 .358-.196c.409-.409.205-1.115-.358-1.236-.14-.03-1.176-.044-3.254-.043-2.878.001-3.057.005-3.208.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyMinus);
export default ForwardRef;

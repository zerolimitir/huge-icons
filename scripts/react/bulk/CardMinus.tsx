import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 9v2h20V7H2v2m3.58 7.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m10.12 1.221a.745.745 0 0 0 .029 1.382c.13.054.535.062 3.188.062 2.068 0 3.105-.014 3.245-.044a.65.65 0 0 0 .358-.196c.409-.409.205-1.115-.358-1.236-.14-.03-1.176-.044-3.254-.043-2.878.001-3.057.005-3.208.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardMinus);
export default ForwardRef;

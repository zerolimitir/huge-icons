import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHalfMoonPhase = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12 12v7h.231c.531 0 1.43-.161 2.012-.361a7.098 7.098 0 0 0 4.313-4.161c.464-1.215.565-2.64.283-3.992-.541-2.594-2.735-4.788-5.325-5.325-.466-.096-.981-.161-1.283-.161H12v7'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHalfMoonPhase);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionRightDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.815 6.276a.761.761 0 0 0-.538.912c.032.119.521.758 1.903 2.487l1.86 2.326-1.844 2.304c-1.014 1.267-1.869 2.364-1.9 2.438-.148.354.03.769.404.941a.679.679 0 0 0 .607-.002c.143-.065.452-.431 2.164-2.571a310.55 310.55 0 0 0 2.121-2.667.718.718 0 0 0 .119-.665c-.07-.204-4.168-5.33-4.339-5.428a.85.85 0 0 0-.557-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionRightDouble);
export default ForwardRef;

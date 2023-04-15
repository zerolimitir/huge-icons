import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.509 7.043c-.375.09-.743.358-.938.683-.11.184-.205.534-.654 2.414-.468 1.962-.523 2.229-.506 2.466a1.51 1.51 0 0 0 .869 1.249l.26.125h6.92l.26-.125a1.51 1.51 0 0 0 .869-1.249c.016-.237-.038-.502-.49-2.406-.3-1.259-.551-2.23-.611-2.358a1.486 1.486 0 0 0-.72-.695L14.5 7.02l-2.42-.007c-1.334-.003-2.488.01-2.571.03'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGold);
export default ForwardRef;

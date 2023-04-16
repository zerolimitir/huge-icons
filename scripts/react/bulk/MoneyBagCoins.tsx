import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyBagCoins = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.88 6.024c-.551.064-1.366.253-1.456.337-.02.02.081.164.235.337L9.93 7h4.14l.271-.302c.151-.17.255-.317.235-.335-.059-.054-.416-.159-.839-.247-.337-.071-.572-.085-1.557-.095a29.165 29.165 0 0 0-1.3.003m2.604 8.039a2.386 2.386 0 0 0-.42.167c-.262.14-.694.572-.833.833a2.033 2.033 0 0 0 0 1.874c.239.449.872.941 1.297 1.009.084.013.152.038.152.054s-.068.041-.152.054c-.425.068-1.058.56-1.297 1.009a2.033 2.033 0 0 0 0 1.874c.249.468.84.917 1.343 1.022.146.03 1.233.04 3.529.032 3.302-.011 3.318-.012 3.547-.099a2.093 2.093 0 0 0 1.24-1.248c.117-.319.116-.971-.002-1.294a2.11 2.11 0 0 0-.852-1.053c-.192-.121-.564-.257-.702-.257-.052 0-.094-.018-.094-.04 0-.022.042-.04.094-.04.138 0 .51-.136.702-.257a2.11 2.11 0 0 0 .852-1.053c.119-.326.119-.974 0-1.3a2.095 2.095 0 0 0-1.244-1.244c-.222-.085-.257-.086-3.584-.094-2.847-.007-3.393.001-3.576.051'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagCoins);
export default ForwardRef;
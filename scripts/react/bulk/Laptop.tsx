import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLaptop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.667 16.065a.967.967 0 0 0-.61.64c-.124.428-.02 1.023.29 1.655.157.32.243.437.55.743.306.307.423.393.743.55.728.358-.063.327 8.36.327s7.632.031 8.36-.327c.32-.157.437-.243.743-.55.307-.306.393-.423.55-.743.209-.426.292-.711.33-1.136.038-.411-.046-.681-.286-.92-.33-.331.534-.304-9.714-.301-7.946.002-9.148.01-9.316.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLaptop);
export default ForwardRef;

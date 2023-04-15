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
            d='M6.815 6.277a.76.76 0 0 0-.538.911c.032.119.521.758 1.903 2.486L10.04 12l-1.86 2.326c-1.954 2.443-1.974 2.473-1.919 2.797a.897.897 0 0 0 .388.544c.172.091.53.091.702-.001.178-.094 4.283-5.221 4.36-5.445a.718.718 0 0 0-.119-.665c-.431-.596-4.121-5.148-4.216-5.201a.884.884 0 0 0-.561-.078m6 0a.76.76 0 0 0-.538.911c.032.119.521.758 1.903 2.486L16.04 12l-1.86 2.326c-1.954 2.443-1.974 2.473-1.919 2.797a.897.897 0 0 0 .388.544c.172.091.53.091.702-.001.178-.094 4.283-5.221 4.36-5.445a.718.718 0 0 0-.119-.665c-.431-.596-4.121-5.148-4.216-5.201a.884.884 0 0 0-.561-.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionRightDouble);
export default ForwardRef;

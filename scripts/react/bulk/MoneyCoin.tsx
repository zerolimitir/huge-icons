import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyCoin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.438 12.075c-.355.114-.62.279-.872.542A1.91 1.91 0 0 0 12 14c0 .538.184.985.572 1.39.25.26.657.502.931.553.175.033.175.081 0 .114-.274.051-.681.293-.931.553-.42.438-.598.905-.56 1.469.058.854.541 1.509 1.338 1.813l.23.088h6.84l.23-.088a2.093 2.093 0 0 0 1.24-1.248c.117-.319.116-.971-.002-1.294a2.11 2.11 0 0 0-.852-1.053c-.192-.121-.564-.257-.702-.257-.052 0-.094-.018-.094-.04 0-.022.042-.04.094-.04.138 0 .51-.136.702-.257a2.11 2.11 0 0 0 .852-1.053c.119-.326.119-.974 0-1.3a2.095 2.095 0 0 0-1.244-1.244c-.222-.085-.257-.086-3.604-.094-3.156-.008-3.395-.004-3.602.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyCoin);
export default ForwardRef;

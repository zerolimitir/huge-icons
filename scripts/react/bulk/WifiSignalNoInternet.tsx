import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifiSignalNoInternet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.7 9.316a.734.734 0 0 0-.398.413c-.053.128-.062.445-.061 2.28.001 1.986.006 2.142.075 2.291.101.22.246.342.477.402.434.112.833-.121.923-.54.029-.135.044-.906.043-2.254-.001-1.906-.006-2.059-.075-2.208-.181-.392-.607-.558-.984-.384m.107 6.973a.654.654 0 0 0-.326.19c-.192.192-.241.401-.241 1.021 0 .619.049.829.24 1.02.409.409 1.115.205 1.236-.358.055-.258.056-1.082.001-1.321-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiSignalNoInternet);
export default ForwardRef;

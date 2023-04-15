import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilterThreeLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.44 5.075a2.115 2.115 0 0 0-1.328 1.275c-.119.326-.119.974 0 1.3a2.071 2.071 0 0 0 1.244 1.24c.317.116.971.116 1.288 0a2.071 2.071 0 0 0 1.244-1.24c.119-.326.119-.974 0-1.3a2.12 2.12 0 0 0-1.365-1.286c-.288-.085-.801-.079-1.083.011m-7 5a2.115 2.115 0 0 0-1.328 1.275c-.119.326-.119.974 0 1.3.168.462.507.859.945 1.107.882.501 2.025.211 2.603-.66.24-.361.312-.615.312-1.097 0-.327-.018-.471-.084-.65a2.12 2.12 0 0 0-1.365-1.286c-.288-.085-.801-.079-1.083.011m14.18 4.964a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294.168.462.507.859.945 1.107.882.501 2.025.211 2.603-.66.24-.361.312-.615.312-1.097 0-.327-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLine);
export default ForwardRef;

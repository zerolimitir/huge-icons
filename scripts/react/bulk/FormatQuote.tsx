import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFormatQuote = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.025 7.063A2.037 2.037 0 0 0 4.592 8.4c-.076.233-.087.376-.103 1.368-.019 1.192.013 1.593.153 1.969.181.483.65.936 1.184 1.146.205.081.322.094.944.108.39.009.71.024.71.033 0 .009-.242.499-.537 1.089-.366.733-.55 1.145-.579 1.301-.103.562.189 1.132.725 1.414.188.099.253.112.591.112.323 0 .41-.015.579-.098.4-.197.476-.312 1.317-1.994.428-.856.811-1.662.851-1.792.067-.215.073-.417.073-2.296 0-1.885-.006-2.08-.073-2.3a2.038 2.038 0 0 0-1.471-1.398c-.355-.084-2.582-.083-2.931.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatQuote);
export default ForwardRef;

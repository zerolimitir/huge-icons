import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPieChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.3 2.221c-.11.03-.211.056-.225.057a2.325 2.325 0 0 0-.271.166c-.281.188-.542.527-.689.896l-.095.24-.011 3.355c-.013 3.668-.02 3.529.22 4.002.139.274.528.669.803.815.493.261.332.252 4.033.239l3.355-.011.229-.093c.752-.303 1.161-.846 1.164-1.547.002-.36-.178-1.105-.436-1.806-.34-.922-.988-2.06-1.617-2.837a12.562 12.562 0 0 0-1.48-1.474c-1.22-.979-2.748-1.705-4.208-2.001-.369-.074-.507-.075-.772-.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPieChart);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHangout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.13 9.06a1.048 1.048 0 0 0-.514.47c-.115.209-.116.215-.129.99-.015.88.007 1.007.218 1.24.15.166.272.219.605.261.386.049.628.3.673.698.034.298.156.513.349.612.146.076.158.076.331.01.256-.098.555-.406.709-.73l.128-.271v-2.6l-.116-.21a1.036 1.036 0 0 0-.523-.472c-.195-.081-1.543-.08-1.731.002m6 0a1.048 1.048 0 0 0-.514.47c-.115.209-.116.215-.129.99-.015.88.007 1.007.218 1.24.15.166.272.219.605.261.386.049.628.3.673.698.034.298.156.513.349.612.146.076.158.076.331.01.256-.098.555-.406.709-.73l.128-.271v-2.6l-.116-.21a1.036 1.036 0 0 0-.523-.472c-.195-.081-1.543-.08-1.731.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHangout);
export default ForwardRef;

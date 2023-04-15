import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTiktok = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m16.015 5.756.005 2.456.34.169c.424.212.94.389 1.46.501.315.068.588.09 1.29.107l.89.021V6h-.616c-.78 0-1.165-.069-1.644-.296-.896-.424-1.538-1.26-1.698-2.207-.019-.113-.031.849-.027 2.259'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTiktok);
export default ForwardRef;

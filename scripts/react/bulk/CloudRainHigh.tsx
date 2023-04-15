import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudRainHigh = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.717 15.277c-.499.557-.885 1.126-1.068 1.572-.134.326-.168.875-.075 1.196.177.608.693.954 1.426.954.931 0 1.48-.534 1.48-1.439 0-.497-.132-.844-.571-1.496C7.669 15.706 7.065 15 7 15c-.019 0-.146.125-.283.277m9.909.102c-.514.578-.906 1.201-1.042 1.658-.08.272-.083.766-.005 1.028.176.59.698.934 1.421.934.931 0 1.48-.534 1.48-1.439 0-.497-.132-.844-.571-1.496-.242-.36-.844-1.064-.91-1.064-.019 0-.187.17-.373.379m-4.988 3.001c-.792.898-1.118 1.533-1.118 2.18 0 .905.549 1.439 1.48 1.439.931 0 1.48-.534 1.48-1.439 0-.493-.15-.885-.568-1.49C12.697 18.759 12.05 18 12 18c-.015 0-.178.171-.362.38'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainHigh);
export default ForwardRef;

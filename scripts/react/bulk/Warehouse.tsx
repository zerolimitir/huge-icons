import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWarehouse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.438 10.075a1.984 1.984 0 0 0-.872.542 1.955 1.955 0 0 0-.502.86c-.052.178-.064.427-.064 1.37V14h12v-1.153c0-1.264-.015-1.375-.248-1.815-.146-.275-.54-.664-.813-.802-.476-.241-.233-.23-4.956-.228-4.029.002-4.338.007-4.545.073M6 20v2h12v-4H6v2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWarehouse);
export default ForwardRef;

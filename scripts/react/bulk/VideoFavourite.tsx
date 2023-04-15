import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVideoFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.397 2.04c-1.591.27-2.819 1.371-3.264 2.928-.103.362-.107.408-.123 1.702L1.993 8H5.68l1.5-3 1.5-3-1.55.005c-.852.002-1.632.018-1.733.035M8.82 5l-1.5 3h6.36l1.5-3 1.5-3h-6.36l-1.5 3m8 0-1.5 3H22V6.816c0-1.039-.01-1.233-.083-1.589-.309-1.517-1.423-2.707-2.886-3.084a7.007 7.007 0 0 0-.541-.12l-.169-.024L16.82 5m-6.961 7.072a1.862 1.862 0 0 0-.784.516c-.622.651-.759 1.604-.352 2.432.1.204.35.5 1.187 1.409.583.633 1.15 1.219 1.259 1.301.267.201.565.285.935.261.421-.027.643-.15 1.083-.6.698-.714 1.848-1.985 1.987-2.197.523-.796.419-1.906-.243-2.601-.381-.398-.816-.593-1.327-.593-.513 0-.892.169-1.334.593l-.27.26-.27-.26c-.308-.296-.536-.439-.847-.53-.287-.083-.769-.079-1.024.009'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoFavourite);
export default ForwardRef;

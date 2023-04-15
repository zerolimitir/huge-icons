import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBluetoothOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.617 7.998c-.406.097-.641.471-.561.896.015.08.144.296.304.512.345.464.6.973.746 1.494.105.37.113.453.113 1.1 0 .635-.01.735-.106 1.08a4.474 4.474 0 0 1-.875 1.678c-.185.22-.238.351-.238.586 0 .506.509.858.979.679.457-.175 1.24-1.393 1.52-2.363a5.405 5.405 0 0 0 .233-1.66 5.604 5.604 0 0 0-.949-3.177c-.479-.719-.764-.921-1.166-.825m-2.953 3.065a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBluetoothOff);
export default ForwardRef;

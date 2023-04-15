import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCalculatorModernWritten = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.302 4.302 0 0 0-1.702.669c-.766.521-1.323 1.306-1.6 2.256l-.108.372-.013 3.33L1.997 12H12v10h3.091c1.902 0 3.219-.016 3.423-.042a4.008 4.008 0 0 0 3.444-3.444c.026-.204.042-1.521.042-3.423V12H12V2l-3.17.005c-1.743.003-3.272.02-3.397.038m13.834 12.76c.249.093.491.438.491.697 0 .259-.242.604-.491.697-.074.029-.842.043-2.267.043-1.425 0-2.193-.014-2.267-.043-.249-.093-.491-.438-.491-.697 0-.258.21-.572.458-.683.155-.069 4.387-.083 4.567-.014m0 3c.249.093.491.438.491.697 0 .259-.242.604-.491.697-.074.029-.842.043-2.267.043-1.425 0-2.193-.014-2.267-.043-.249-.093-.491-.438-.491-.697 0-.258.21-.572.458-.683.155-.069 4.387-.083 4.567-.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalculatorModernWritten);
export default ForwardRef;

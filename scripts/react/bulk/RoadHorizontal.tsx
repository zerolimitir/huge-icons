import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoadHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.7 11.316a.745.745 0 0 0 .029 1.382c.113.047.299.062.78.061.684-.001.852-.04 1.039-.244a.746.746 0 0 0-.248-1.199c-.134-.062-.262-.074-.8-.074s-.666.012-.8.074m5.456.017a.77.77 0 0 0-.405.667.77.77 0 0 0 .405.667c.164.087.222.093.844.093s.68-.006.844-.093a.755.755 0 0 0 0-1.334c-.164-.087-.222-.093-.844-.093s-.68.006-.844.093m5.544-.017a.745.745 0 0 0 .029 1.382c.113.047.299.062.78.061.684-.001.852-.04 1.039-.244a.746.746 0 0 0-.248-1.199c-.134-.062-.262-.074-.8-.074s-.666.012-.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadHorizontal);
export default ForwardRef;
